"use client"

import { useRef, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, Sphere, Torus, Environment, Stars, useTexture, MeshDistortMaterial } from "@react-three/drei"
import * as THREE from "three"

// Floating orb with company logo
function CentralLogoOrb() {
  const meshRef = useRef<THREE.Mesh>(null)
  const glowRef = useRef<THREE.Mesh>(null)
  const logoTexture = useTexture("/logo/logo.png")
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002
    }
    if (glowRef.current) {
      const scale = 1.15 + Math.sin(state.clock.elapsedTime * 1.5) * 0.08
      glowRef.current.scale.set(scale, scale, scale)
    }
  })

  return (
    <group position={[0, 0, 0]}>
      {/* Outer glow */}
      <Sphere args={[2.8, 32, 32]} ref={glowRef}>
        <meshBasicMaterial color="#00c7f1" transparent opacity={0.1} />
      </Sphere>
      
      {/* Main sphere */}
      <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.4}>
        <Sphere args={[2.2, 64, 64]} ref={meshRef}>
          <MeshDistortMaterial
            color="#00c7f1"
            emissive="#00c7f1"
            emissiveIntensity={0.3}
            distort={0.3}
            speed={2}
            roughness={0.1}
            metalness={0.8}
            transparent
            opacity={0.7}
          />
        </Sphere>
      </Float>
      
      {/* Logo plane */}
      <mesh position={[0, 0, 0.1]}>
        <planeGeometry args={[2.5, 2.5]} />
        <meshBasicMaterial map={logoTexture} transparent side={THREE.DoubleSide} />
      </mesh>
      
      {/* Inner core */}
      <Sphere args={[0.8, 32, 32]}>
        <meshBasicMaterial color="#ffffff" transparent opacity={0.5} />
      </Sphere>
    </group>
  )
}

// Orbit ring
function OrbitRing({ radius, speed, color, tiltX = Math.PI / 2 }: { 
  radius: number
  speed: number 
  color: string
  tiltX?: number
}) {
  const ringRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * speed
    }
  })

  return (
    <Torus 
      ref={ringRef}
      args={[radius, 0.03, 16, 100]}
      rotation={[tiltX, 0, 0]}
    >
      <meshBasicMaterial color={color} transparent opacity={0.6} />
    </Torus>
  )
}

// Floating particles
function FloatingParticle({ position, size, color, speed }: {
  position: [number, number, number]
  size: number
  color: string
  speed: number
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5
      meshRef.current.position.x = position[0] + Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.3
    }
  })

  return (
    <Float speed={speed} floatIntensity={0.8}>
      <Sphere ref={meshRef} args={[size, 16, 16]} position={position}>
        <meshBasicMaterial color={color} />
      </Sphere>
    </Float>
  )
}

// Main Scene
function Scene() {
  return (
    <>
      <color attach="background" args={["#0a1628"]} />
      
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
      <pointLight position={[0, 0, 5]} intensity={2} color="#00c7f1" />
      
      {/* Stars background */}
      <Stars
        radius={50}
        depth={30}
        count={2000}
        factor={4}
        saturation={0.5}
        fade
        speed={0.5}
      />
      
      {/* Central orb with logo */}
      <CentralLogoOrb />
      
      {/* Orbit rings */}
      <OrbitRing radius={3} speed={0.3} color="#00c7f1" />
      <OrbitRing radius={3.8} speed={-0.2} color="#134a8b" tiltX={Math.PI / 2.5} />
      <OrbitRing radius={4.5} speed={0.15} color="#00c7f1" tiltX={Math.PI / 3} />
      
      {/* Floating particles */}
      <FloatingParticle position={[-3, 2, -1]} size={0.15} color="#00c7f1" speed={1.2} />
      <FloatingParticle position={[3, -1, -2]} size={0.12} color="#ffffff" speed={0.9} />
      <FloatingParticle position={[-2, -2, -1]} size={0.1} color="#134a8b" speed={1.5} />
      <FloatingParticle position={[2, 2, -1.5]} size={0.13} color="#00c7f1" speed={1.1} />
      <FloatingParticle position={[0, 3, -2]} size={0.08} color="#ffffff" speed={1.3} />
      <FloatingParticle position={[-3, -1, -1]} size={0.11} color="#00c7f1" speed={0.8} />
      
      <Environment preset="night" />
    </>
  )
}

// Loading fallback
function Loader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-[#0a1628]">
      <div className="w-16 h-16 border-4 border-[#00c7f1]/30 border-t-[#00c7f1] rounded-full animate-spin" />
    </div>
  )
}

export default function AboutScene3D({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <Suspense fallback={<Loader />}>
        <Canvas
          camera={{ position: [0, 0, 8], fov: 50 }}
          dpr={[1, 2]}
          gl={{ 
            antialias: true,
            alpha: false,
            powerPreference: "high-performance"
          }}
        >
          <Scene />
        </Canvas>
      </Suspense>
    </div>
  )
}

