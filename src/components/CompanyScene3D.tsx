"use client"

import { useRef, useMemo, useState } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Float, Stars, Environment, MeshDistortMaterial, Sphere, Trail } from "@react-three/drei"
import * as THREE from "three"

// Floating particles that move in circular patterns
function FloatingParticles({ count = 200 }: { count?: number }) {
  const mesh = useRef<THREE.Points>(null)
  
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const sizes = new Float32Array(count)
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      const radius = Math.random() * 15 + 5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.random() * Math.PI
      
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i3 + 2] = radius * Math.cos(phi)
      
      // Soft cyan/blue/white colors
      const colorChoice = Math.random()
      if (colorChoice < 0.4) {
        colors[i3] = 0.7
        colors[i3 + 1] = 0.9
        colors[i3 + 2] = 1.0
      } else if (colorChoice < 0.7) {
        colors[i3] = 0.4
        colors[i3 + 1] = 0.8
        colors[i3 + 2] = 0.95
      } else {
        colors[i3] = 1.0
        colors[i3 + 1] = 1.0
        colors[i3 + 2] = 1.0
      }
      
      sizes[i] = Math.random() * 0.08 + 0.02
    }
    
    return { positions, colors, sizes }
  }, [count])

  useFrame((state) => {
    if (!mesh.current) return
    mesh.current.rotation.y = state.clock.elapsedTime * 0.03
    mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.02) * 0.1
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
        size={0.05}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

// Flowing energy rings
function EnergyRing({ radius, speed, color }: { radius: number; speed: number; color: string }) {
  const ref = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.x = state.clock.elapsedTime * speed
    ref.current.rotation.z = state.clock.elapsedTime * speed * 0.5
  })

  return (
    <mesh ref={ref} rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[radius, 0.02, 16, 100]} />
      <meshBasicMaterial color={color} transparent opacity={0.4} />
    </mesh>
  )
}

// Central glowing orb
function CentralOrb() {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.2
    const scale = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    meshRef.current.scale.setScalar(scale)
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere ref={meshRef} args={[1.5, 64, 64]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#a8e6cf"
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0.1}
          metalness={0.8}
          transparent
          opacity={0.7}
        />
      </Sphere>
      {/* Inner glow */}
      <Sphere args={[1.2, 32, 32]} position={[0, 0, 0]}>
        <meshBasicMaterial color="#dcedc8" transparent opacity={0.5} />
      </Sphere>
      {/* Outer glow */}
      <Sphere args={[2, 32, 32]} position={[0, 0, 0]}>
        <meshBasicMaterial color="#b2dfdb" transparent opacity={0.15} />
      </Sphere>
    </Float>
  )
}

// Orbiting small spheres
function OrbitingSphere({ radius, speed, size, color, offset }: { 
  radius: number
  speed: number
  size: number
  color: string
  offset: number 
}) {
  const ref = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.elapsedTime * speed + offset
    ref.current.position.x = Math.cos(t) * radius
    ref.current.position.z = Math.sin(t) * radius
    ref.current.position.y = Math.sin(t * 2) * 0.5
  })

  return (
    <Trail
      width={0.5}
      length={6}
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

// Floating data nodes
function DataNode({ position, delay }: { position: [number, number, number]; delay: number }) {
  const ref = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.elapsedTime + delay
    ref.current.position.y = position[1] + Math.sin(t * 0.8) * 0.3
    ref.current.rotation.y = t * 0.5
    ref.current.rotation.z = t * 0.3
  })

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={ref} position={position}>
        <octahedronGeometry args={[0.2]} />
        <meshBasicMaterial color="#80deea" transparent opacity={0.8} wireframe />
      </mesh>
    </Float>
  )
}

// Connection lines between nodes
function ConnectionLines() {
  const linesRef = useRef<THREE.Line>(null)
  
  const points = useMemo(() => {
    const pts = []
    for (let i = 0; i < 20; i++) {
      const angle = (i / 20) * Math.PI * 2
      const radius = 4 + Math.sin(angle * 3) * 1.5
      pts.push(new THREE.Vector3(
        Math.cos(angle) * radius,
        Math.sin(angle * 2) * 1.5,
        Math.sin(angle) * radius
      ))
    }
    pts.push(pts[0].clone())
    return pts
  }, [])

  useFrame((state) => {
    if (!linesRef.current) return
    linesRef.current.rotation.y = state.clock.elapsedTime * 0.1
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
      <lineBasicMaterial color="#b2ebf2" transparent opacity={0.3} />
    </line>
  )
}

// Camera animation based on scroll
function CameraController() {
  const { camera } = useThree()
  
  useFrame((state) => {
    camera.position.x = Math.sin(state.clock.elapsedTime * 0.1) * 2
    camera.position.y = Math.cos(state.clock.elapsedTime * 0.08) * 1
    camera.lookAt(0, 0, 0)
  })
  
  return null
}

function Scene() {
  return (
    <>
      <CameraController />
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#e0f7fa" />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#b2dfdb" />
      
      {/* Central orb */}
      <CentralOrb />
      
      {/* Energy rings */}
      <EnergyRing radius={3} speed={0.3} color="#80cbc4" />
      <EnergyRing radius={4} speed={-0.2} color="#a5d6a7" />
      <EnergyRing radius={5} speed={0.15} color="#81d4fa" />
      
      {/* Orbiting spheres */}
      <OrbitingSphere radius={3.5} speed={0.5} size={0.15} color="#4dd0e1" offset={0} />
      <OrbitingSphere radius={4.5} speed={-0.4} size={0.12} color="#aed581" offset={Math.PI} />
      <OrbitingSphere radius={5.5} speed={0.3} size={0.1} color="#80deea" offset={Math.PI / 2} />
      
      {/* Data nodes */}
      {[...Array(8)].map((_, i) => {
        const angle = (i / 8) * Math.PI * 2
        const radius = 6 + Math.random() * 2
        return (
          <DataNode
            key={i}
            position={[
              Math.cos(angle) * radius,
              (Math.random() - 0.5) * 4,
              Math.sin(angle) * radius
            ]}
            delay={i * 0.5}
          />
        )
      })}
      
      {/* Connection lines */}
      <ConnectionLines />
      
      {/* Floating particles */}
      <FloatingParticles count={300} />
      
      {/* Stars background */}
      <Stars
        radius={50}
        depth={50}
        count={2000}
        factor={2}
        saturation={0.5}
        fade
        speed={0.5}
      />
      
      <Environment preset="dawn" />
    </>
  )
}

export default function CompanyScene3D() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'linear-gradient(180deg, #e8f5e9 0%, #e0f2f1 30%, #e3f2fd 70%, #fafafa 100%)' }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}

