"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Float, Stars, Environment, MeshDistortMaterial, Sphere, Trail, useTexture } from "@react-three/drei"
import * as THREE from "three"

// Floating particles with soft colors
function FloatingParticles({ count = 400 }: { count?: number }) {
  const mesh = useRef<THREE.Points>(null)
  
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      const radius = Math.random() * 20 + 5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.random() * Math.PI
      
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i3 + 2] = radius * Math.cos(phi)
      
      // Soft teal/cyan/mint colors
      const colorChoice = Math.random()
      if (colorChoice < 0.3) {
        colors[i3] = 0.5; colors[i3 + 1] = 0.9; colors[i3 + 2] = 0.85 // Teal
      } else if (colorChoice < 0.6) {
        colors[i3] = 0.4; colors[i3 + 1] = 0.85; colors[i3 + 2] = 0.95 // Cyan
      } else if (colorChoice < 0.8) {
        colors[i3] = 0.68; colors[i3 + 1] = 0.92; colors[i3 + 2] = 0.8 // Mint
      } else {
        colors[i3] = 1.0; colors[i3 + 1] = 1.0; colors[i3 + 2] = 1.0 // White
      }
    }
    
    return { positions, colors }
  }, [count])

  useFrame((state) => {
    if (!mesh.current) return
    mesh.current.rotation.y = state.clock.elapsedTime * 0.02
    mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.015) * 0.1
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.positions.length / 3}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particles.colors.length / 3}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

// Soft energy rings
function EnergyRing({ radius, speed, color, tilt }: { radius: number; speed: number; color: string; tilt: number }) {
  const ref = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.x = tilt + state.clock.elapsedTime * speed * 0.3
    ref.current.rotation.z = state.clock.elapsedTime * speed * 0.5
  })

  return (
    <mesh ref={ref} rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[radius, 0.015, 16, 100]} />
      <meshBasicMaterial color={color} transparent opacity={0.35} />
    </mesh>
  )
}

// Central glowing orb with logo
function CentralOrb() {
  const meshRef = useRef<THREE.Mesh>(null)
  const logoTexture = useTexture("/logo/logo.png")
  
  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.15
    const scale = 1 + Math.sin(state.clock.elapsedTime * 0.4) * 0.08
    meshRef.current.scale.setScalar(scale)
  })

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.4}>
      <group position={[2, 0, 0]}>
        {/* Main sphere */}
        <Sphere ref={meshRef} args={[2.5, 64, 64]}>
          <MeshDistortMaterial
            color="#a8e6cf"
            attach="material"
            distort={0.25}
            speed={1.5}
            roughness={0.15}
            metalness={0.7}
            transparent
            opacity={0.6}
          />
        </Sphere>
        {/* Inner core with logo */}
        <Sphere args={[1.0, 32, 32]}>
          <meshStandardMaterial 
            map={logoTexture} 
            transparent 
            opacity={0.9}
            emissive="#ffffff"
            emissiveIntensity={0.1}
          />
        </Sphere>
        {/* Inner glow */}
        <Sphere args={[1.8, 32, 32]}>
          <meshBasicMaterial color="#dcedc8" transparent opacity={0.35} />
        </Sphere>
        {/* Outer glow 1 */}
        <Sphere args={[3, 32, 32]}>
          <meshBasicMaterial color="#b2dfdb" transparent opacity={0.12} />
        </Sphere>
        {/* Outer glow 2 */}
        <Sphere args={[3.5, 32, 32]}>
          <meshBasicMaterial color="#e0f7fa" transparent opacity={0.08} />
        </Sphere>
      </group>
    </Float>
  )
}

// Orbiting spheres with trails
function OrbitingSphere({ radius, speed, size, color, offset, yOffset = 0 }: { 
  radius: number
  speed: number
  size: number
  color: string
  offset: number
  yOffset?: number
}) {
  const ref = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.elapsedTime * speed + offset
    ref.current.position.x = Math.cos(t) * radius + 2
    ref.current.position.z = Math.sin(t) * radius
    ref.current.position.y = Math.sin(t * 1.5) * 0.8 + yOffset
  })

  return (
    <Trail
      width={0.4}
      length={5}
      color={color}
      attenuation={(t) => t * t}
    >
      <mesh ref={ref}>
        <sphereGeometry args={[size, 16, 16]} />
        <meshBasicMaterial color={color} />
      </mesh>
    </Trail>
  )
}

// Floating geometric shapes
function FloatingShape({ position, rotationSpeed, shape }: { 
  position: [number, number, number]
  rotationSpeed: number
  shape: 'octahedron' | 'icosahedron' | 'dodecahedron'
}) {
  const ref = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.x = state.clock.elapsedTime * rotationSpeed
    ref.current.rotation.y = state.clock.elapsedTime * rotationSpeed * 0.7
    ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 0.3
  })

  const Geometry = () => {
    switch (shape) {
      case 'octahedron': return <octahedronGeometry args={[0.3]} />
      case 'icosahedron': return <icosahedronGeometry args={[0.25]} />
      case 'dodecahedron': return <dodecahedronGeometry args={[0.2]} />
    }
  }

  return (
    <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.3}>
      <mesh ref={ref} position={position}>
        <Geometry />
        <meshBasicMaterial color="#80deea" transparent opacity={0.6} wireframe />
      </mesh>
    </Float>
  )
}

// Connection web
function ConnectionWeb() {
  const linesRef = useRef<THREE.Line>(null)
  
  const points = useMemo(() => {
    const pts = []
    for (let i = 0; i < 24; i++) {
      const angle = (i / 24) * Math.PI * 2
      const radius = 5 + Math.sin(angle * 4) * 1.5
      pts.push(new THREE.Vector3(
        Math.cos(angle) * radius + 2,
        Math.sin(angle * 3) * 1.2,
        Math.sin(angle) * radius
      ))
    }
    pts.push(pts[0].clone())
    return pts
  }, [])

  useFrame((state) => {
    if (!linesRef.current) return
    linesRef.current.rotation.y = state.clock.elapsedTime * 0.08
  })

  return (
    <line ref={linesRef as any}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length}
          array={new Float32Array(points.flatMap(p => [p.x, p.y, p.z]))}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial color="#b2ebf2" transparent opacity={0.25} />
    </line>
  )
}

// Mouse-following light
function MouseLight() {
  const light = useRef<THREE.PointLight>(null)
  const { mouse, viewport } = useThree()
  
  useFrame(() => {
    if (!light.current) return
    light.current.position.x = (mouse.x * viewport.width) / 2
    light.current.position.y = (mouse.y * viewport.height) / 2
  })
  
  return <pointLight ref={light} intensity={0.8} color="#e0f7fa" distance={15} />
}

// Gentle camera movement
function CameraController() {
  const { camera } = useThree()
  
  useFrame((state) => {
    camera.position.x = Math.sin(state.clock.elapsedTime * 0.08) * 1.5
    camera.position.y = Math.cos(state.clock.elapsedTime * 0.06) * 0.8
    camera.lookAt(2, 0, 0)
  })
  
  return null
}

function Scene() {
  return (
    <>
      <CameraController />
      <MouseLight />
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={0.6} color="#e0f7fa" />
      <pointLight position={[-10, -5, -10]} intensity={0.3} color="#c8e6c9" />
      <pointLight position={[0, 10, 0]} intensity={0.2} color="#b3e5fc" />
      
      {/* Central orb with logo */}
      <CentralOrb />
      
      {/* Soft energy rings */}
      <EnergyRing radius={4} speed={0.3} color="#80cbc4" tilt={0.3} />
      <EnergyRing radius={5} speed={-0.25} color="#a5d6a7" tilt={-0.2} />
      <EnergyRing radius={6} speed={0.2} color="#81d4fa" tilt={0.4} />
      <EnergyRing radius={7} speed={-0.15} color="#b2dfdb" tilt={-0.5} />
      
      {/* Orbiting spheres */}
      <OrbitingSphere radius={4.5} speed={0.4} size={0.12} color="#4dd0e1" offset={0} />
      <OrbitingSphere radius={5.5} speed={-0.35} size={0.1} color="#81c784" offset={Math.PI} />
      <OrbitingSphere radius={6.5} speed={0.28} size={0.08} color="#80deea" offset={Math.PI / 2} />
      <OrbitingSphere radius={7.5} speed={-0.22} size={0.1} color="#aed581" offset={Math.PI * 1.5} />
      
      {/* Floating shapes */}
      {[...Array(10)].map((_, i) => {
        const angle = (i / 10) * Math.PI * 2
        const radius = 8 + Math.random() * 3
        const shapes: ('octahedron' | 'icosahedron' | 'dodecahedron')[] = ['octahedron', 'icosahedron', 'dodecahedron']
        return (
          <FloatingShape
            key={i}
            position={[
              Math.cos(angle) * radius,
              (Math.random() - 0.5) * 5,
              Math.sin(angle) * radius
            ]}
            rotationSpeed={0.2 + Math.random() * 0.3}
            shape={shapes[i % 3]}
          />
        )
      })}
      
      {/* Connection web */}
      <ConnectionWeb />
      
      {/* Floating particles */}
      <FloatingParticles count={400} />
      
      {/* Stars background */}
      <Stars
        radius={60}
        depth={60}
        count={3000}
        factor={2}
        saturation={0.3}
        fade
        speed={0.3}
      />
      
      <Environment preset="dawn" />
    </>
  )
}

export default function HeroScene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 14], fov: 55 }}
      gl={{ antialias: true, alpha: true }}
      style={{ 
        background: 'linear-gradient(180deg, #e8f5e9 0%, #e0f2f1 25%, #e3f2fd 50%, #f5f5f5 100%)' 
      }}
    >
      <Scene />
    </Canvas>
  )
}
