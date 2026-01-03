"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, Stars, Environment, Sphere, MeshDistortMaterial, useTexture } from "@react-three/drei"
import * as THREE from "three"

// Floating particles
function FloatingParticles({ count = 200 }: { count?: number }) {
  const mesh = useRef<THREE.Points>(null)
  
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      const radius = Math.random() * 15 + 5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.random() * Math.PI
      
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i3 + 2] = radius * Math.cos(phi)
      
      // Soft colors
      const colorChoice = Math.random()
      if (colorChoice < 0.4) {
        colors[i3] = 0.5; colors[i3 + 1] = 0.9; colors[i3 + 2] = 0.85
      } else if (colorChoice < 0.7) {
        colors[i3] = 0.4; colors[i3 + 1] = 0.85; colors[i3 + 2] = 0.95
      } else {
        colors[i3] = 1.0; colors[i3 + 1] = 1.0; colors[i3 + 2] = 1.0
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
        size={0.05}
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
function EnergyRing({ radius, speed, color }: { radius: number; speed: number; color: string }) {
  const ref = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.x = state.clock.elapsedTime * speed
    ref.current.rotation.z = state.clock.elapsedTime * speed * 0.5
  })

  return (
    <mesh ref={ref} rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[radius, 0.015, 16, 100]} />
      <meshBasicMaterial color={color} transparent opacity={0.3} />
    </mesh>
  )
}

// Central orb
function CentralOrb() {
  const meshRef = useRef<THREE.Mesh>(null)
  const logoTexture = useTexture("/logo/logo.png")
  
  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.15
    const scale = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.08
    meshRef.current.scale.setScalar(scale)
  })

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.4}>
      <Sphere ref={meshRef} args={[1.5, 64, 64]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#a8e6cf"
          attach="material"
          distort={0.2}
          speed={1.5}
          roughness={0.15}
          metalness={0.6}
          transparent
          opacity={0.5}
        />
      </Sphere>
      {/* Inner core with logo */}
      <Sphere args={[0.6, 32, 32]}>
        <meshStandardMaterial 
          map={logoTexture} 
          transparent 
          opacity={0.9}
        />
      </Sphere>
      {/* Glow layers */}
      <Sphere args={[1.1, 32, 32]}>
        <meshBasicMaterial color="#dcedc8" transparent opacity={0.25} />
      </Sphere>
      <Sphere args={[1.8, 32, 32]}>
        <meshBasicMaterial color="#b2dfdb" transparent opacity={0.1} />
      </Sphere>
    </Float>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#e0f7fa" />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#c8e6c9" />
      
      <CentralOrb />
      
      <EnergyRing radius={2.5} speed={0.3} color="#80cbc4" />
      <EnergyRing radius={3.2} speed={-0.25} color="#a5d6a7" />
      <EnergyRing radius={4} speed={0.18} color="#81d4fa" />
      
      <FloatingParticles count={200} />
      
      <Stars
        radius={40}
        depth={50}
        count={1500}
        factor={2}
        saturation={0.3}
        fade
        speed={0.3}
      />
      
      <Environment preset="dawn" />
    </>
  )
}

export default function AboutScene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      gl={{ antialias: true, alpha: true }}
      style={{ 
        background: 'linear-gradient(180deg, #e8f5e9 0%, #e0f2f1 30%, #e3f2fd 70%, #fafafa 100%)' 
      }}
    >
      <Scene />
    </Canvas>
  )
}
