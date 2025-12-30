"use client"

import { useRef, useMemo, Suspense } from "react"
import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber"
import { Float, MeshDistortMaterial, Sphere, Box, Torus, Environment, Stars, MeshWobbleMaterial, useTexture, RoundedBox } from "@react-three/drei"
import * as THREE from "three"

// Floating image card with glowing frame
function FloatingImageCard({
  position,
  imagePath,
  size = 1.2,
  speed = 1,
  rotationOffset = 0,
  glowColor = "#00c7f1"
}: {
  position: [number, number, number]
  imagePath: string
  size?: number
  speed?: number
  rotationOffset?: number
  glowColor?: string
}) {
  const groupRef = useRef<THREE.Group>(null)
  const glowRef = useRef<THREE.Mesh>(null)
  const texture = useTexture(imagePath)
  
  useFrame((state) => {
    if (groupRef.current) {
      // Gentle floating motion
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed + rotationOffset) * 0.4
      groupRef.current.position.x = position[0] + Math.sin(state.clock.elapsedTime * speed * 0.5 + rotationOffset) * 0.2
      // Subtle rotation
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * speed * 0.3 + rotationOffset) * 0.2
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * speed * 0.4 + rotationOffset) * 0.1
    }
    if (glowRef.current) {
      const scale = 1.1 + Math.sin(state.clock.elapsedTime * 2 + rotationOffset) * 0.05
      glowRef.current.scale.set(scale, scale, 1)
    }
  })

  return (
    <Float speed={speed} rotationIntensity={0.3} floatIntensity={0.5}>
      <group ref={groupRef} position={position}>
        {/* Glow behind the image */}
        <mesh ref={glowRef} position={[0, 0, -0.05]}>
          <planeGeometry args={[size * 1.3, size * 1.3]} />
          <meshBasicMaterial color={glowColor} transparent opacity={0.4} />
        </mesh>
        
        {/* Outer glow ring */}
        <mesh position={[0, 0, -0.1]}>
          <ringGeometry args={[size * 0.6, size * 0.75, 32]} />
          <meshBasicMaterial color={glowColor} transparent opacity={0.2} side={THREE.DoubleSide} />
        </mesh>
        
        {/* Image frame - rounded box effect */}
        <mesh position={[0, 0, -0.02]}>
          <planeGeometry args={[size * 1.1, size * 1.1]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.1} />
        </mesh>
        
        {/* The actual image */}
        <mesh>
          <planeGeometry args={[size, size]} />
          <meshBasicMaterial map={texture} transparent side={THREE.DoubleSide} />
        </mesh>
      </group>
    </Float>
  )
}

// Floating sphere with image texture inside
function FloatingImageSphere({
  position,
  imagePath,
  size = 0.8,
  speed = 1,
  rotationOffset = 0,
  glowColor = "#00c7f1"
}: {
  position: [number, number, number]
  imagePath: string
  size?: number
  speed?: number
  rotationOffset?: number
  glowColor?: string
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  const glowRef = useRef<THREE.Mesh>(null)
  const texture = useTexture(imagePath)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005 * speed
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed + rotationOffset) * 0.5
    }
    if (glowRef.current) {
      const scale = 1.2 + Math.sin(state.clock.elapsedTime * 2 + rotationOffset) * 0.1
      glowRef.current.scale.set(scale, scale, scale)
    }
  })

  return (
    <Float speed={speed * 1.5} rotationIntensity={0.5} floatIntensity={1}>
      <group position={position}>
        {/* Glow sphere */}
        <Sphere args={[size * 1.2, 16, 16]} ref={glowRef}>
          <meshBasicMaterial color={glowColor} transparent opacity={0.15} />
        </Sphere>
        
        {/* Image sphere */}
        <Sphere args={[size, 32, 32]} ref={meshRef}>
          <meshStandardMaterial 
            map={texture} 
            emissive={glowColor}
            emissiveIntensity={0.1}
            roughness={0.3}
            metalness={0.5}
          />
        </Sphere>
      </group>
    </Float>
  )
}

// Floating geometric shapes with animation
function FloatingShape({ 
  position, 
  color, 
  shape = "sphere",
  speed = 1,
  distort = 0.3,
  size = 1,
  emissive = false
}: { 
  position: [number, number, number]
  color: string
  shape?: "sphere" | "box" | "torus"
  speed?: number
  distort?: number
  size?: number
  emissive?: boolean
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.3
      meshRef.current.rotation.y += 0.008 * speed
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5
    }
  })

  const ShapeComponent = () => {
    if (shape === "box") {
      return (
        <Box args={[size, size, size]} ref={meshRef}>
          <MeshDistortMaterial
            color={color}
            emissive={emissive ? color : "#000000"}
            emissiveIntensity={emissive ? 0.5 : 0}
            attach="material"
            distort={distort}
            speed={3}
            roughness={0.1}
            metalness={0.9}
          />
        </Box>
      )
    }
    if (shape === "torus") {
      return (
        <Torus args={[size * 0.8, size * 0.35, 16, 100]} ref={meshRef}>
          <MeshDistortMaterial
            color={color}
            emissive={emissive ? color : "#000000"}
            emissiveIntensity={emissive ? 0.5 : 0}
            attach="material"
            distort={distort * 0.5}
            speed={3}
            roughness={0.1}
            metalness={0.9}
          />
        </Torus>
      )
    }
    return (
      <Sphere args={[size, 64, 64]} ref={meshRef}>
        <MeshDistortMaterial
          color={color}
          emissive={emissive ? color : "#000000"}
          emissiveIntensity={emissive ? 0.5 : 0}
          attach="material"
          distort={distort}
          speed={3}
          roughness={0.05}
          metalness={0.95}
        />
      </Sphere>
    )
  }

  return (
    <Float speed={speed * 2} rotationIntensity={0.8} floatIntensity={1.5}>
      <group position={position}>
        <ShapeComponent />
      </group>
    </Float>
  )
}

// Animated particles system - bigger and brighter
function Particles({ count = 500 }) {
  const mesh = useRef<THREE.Points>(null)
  
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30
      positions[i * 3 + 1] = (Math.random() - 0.5) * 30
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30
      
      // Bright cyan to white colors
      const t = Math.random()
      colors[i * 3] = 0.2 + t * 0.8 // R
      colors[i * 3 + 1] = 0.8 + t * 0.2 // G
      colors[i * 3 + 2] = 1 // B
    }
    
    return { positions, colors }
  }, [count])

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.elapsedTime * 0.03
      mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.15
    }
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
        size={0.12}
        vertexColors
        transparent
        opacity={1}
        sizeAttenuation
      />
    </points>
  )
}

// Central glowing orb with company logo - MUCH BIGGER
function CentralOrb() {
  const meshRef = useRef<THREE.Mesh>(null)
  const glowRef = useRef<THREE.Mesh>(null)
  const glow2Ref = useRef<THREE.Mesh>(null)
  const glow3Ref = useRef<THREE.Mesh>(null)
  const logoRef = useRef<THREE.Mesh>(null)
  
  // Load company logo texture
  const logoTexture = useTexture("/logo/logo.png")
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.003
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
    }
    if (logoRef.current) {
      // Logo faces camera with subtle animation
      logoRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.05
    }
    if (glowRef.current) {
      const scale = 1.2 + Math.sin(state.clock.elapsedTime * 2) * 0.1
      glowRef.current.scale.set(scale, scale, scale)
    }
    if (glow2Ref.current) {
      const scale = 1.4 + Math.sin(state.clock.elapsedTime * 1.5 + 1) * 0.15
      glow2Ref.current.scale.set(scale, scale, scale)
    }
    if (glow3Ref.current) {
      const scale = 1.6 + Math.sin(state.clock.elapsedTime * 1.2 + 2) * 0.2
      glow3Ref.current.scale.set(scale, scale, scale)
    }
  })

  return (
    <group position={[2.5, 0, 0]}>
      {/* Outer glow 3 - largest */}
      <Sphere args={[6, 32, 32]} ref={glow3Ref}>
        <meshBasicMaterial
          color="#00c7f1"
          transparent
          opacity={0.04}
        />
      </Sphere>
      
      {/* Outer glow 2 */}
      <Sphere args={[5, 32, 32]} ref={glow2Ref}>
        <meshBasicMaterial
          color="#00c7f1"
          transparent
          opacity={0.08}
        />
      </Sphere>
      
      {/* Outer glow */}
      <Sphere args={[4.2, 32, 32]} ref={glowRef}>
        <meshBasicMaterial
          color="#00c7f1"
          transparent
          opacity={0.12}
        />
      </Sphere>
      
      {/* Main sphere - MUCH BIGGER */}
      <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
        <Sphere args={[3.5, 64, 64]} ref={meshRef}>
          <MeshDistortMaterial
            color="#00c7f1"
            emissive="#00c7f1"
            emissiveIntensity={0.4}
            attach="material"
            distort={0.4}
            speed={3}
            roughness={0.05}
            metalness={0.9}
            transparent
            opacity={0.85}
          />
        </Sphere>
      </Float>
      
      {/* Company Logo - floating in the center */}
      <mesh ref={logoRef} position={[0, 0, 0.1]}>
        <planeGeometry args={[4, 4]} />
        <meshBasicMaterial 
          map={logoTexture} 
          transparent 
          side={THREE.DoubleSide}
          opacity={0.95}
        />
      </mesh>
      
      {/* Inner core - brighter */}
      <Sphere args={[1.2, 32, 32]}>
        <meshBasicMaterial color="#ffffff" transparent opacity={0.6} />
      </Sphere>
    </group>
  )
}

// Orbiting rings - MUCH BIGGER and more visible
function OrbitRing({ radius, speed, color, thickness = 0.03, tiltX = Math.PI / 2, tiltY = 0 }: { 
  radius: number
  speed: number 
  color: string
  thickness?: number
  tiltX?: number
  tiltY?: number
}) {
  const ringRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * speed
    }
  })

  return (
    <group position={[2.5, 0, 0]}>
      <Torus 
        ref={ringRef}
        args={[radius, thickness, 16, 100]}
        rotation={[tiltX, tiltY, 0]}
      >
        <meshBasicMaterial color={color} transparent opacity={0.8} />
      </Torus>
    </group>
  )
}

// Orbiting dot - larger
function OrbitingDot({ radius, speed, color, size = 0.15 }: {
  radius: number
  speed: number
  color: string
  size?: number
}) {
  const dotRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (dotRef.current) {
      const angle = state.clock.elapsedTime * speed
      dotRef.current.position.x = 2.5 + Math.cos(angle) * radius
      dotRef.current.position.y = Math.sin(angle) * radius
    }
  })

  return (
    <Sphere ref={dotRef} args={[size, 16, 16]} position={[2.5 + radius, 0, 0]}>
      <meshBasicMaterial color={color} />
    </Sphere>
  )
}

// Mouse-following light - stronger
function MouseLight() {
  const lightRef = useRef<THREE.PointLight>(null)
  const { mouse, viewport } = useThree()
  
  useFrame(() => {
    if (lightRef.current) {
      lightRef.current.position.x = (mouse.x * viewport.width) / 2
      lightRef.current.position.y = (mouse.y * viewport.height) / 2
    }
  })

  return (
    <pointLight
      ref={lightRef}
      color="#00c7f1"
      intensity={3}
      distance={15}
      position={[0, 0, 5]}
    />
  )
}

// Main 3D Scene
function Scene() {
  return (
    <>
      {/* Background color */}
      <color attach="background" args={["#050a15"]} />
      
      {/* Lighting - brighter */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
      <directionalLight position={[-10, -10, -5]} intensity={1} color="#00c7f1" />
      <pointLight position={[5, 5, 5]} intensity={2} color="#00c7f1" />
      <pointLight position={[-5, -5, 5]} intensity={1} color="#134a8b" />
      <MouseLight />
      
      {/* Background stars - more visible */}
      <Stars
        radius={80}
        depth={50}
        count={5000}
        factor={5}
        saturation={0.5}
        fade
        speed={1}
      />
      
      {/* Particles - more and bigger */}
      <Particles count={500} />
      
      {/* Central element - positioned to the right */}
      <CentralOrb />
      
      {/* Orbit rings - MUCH bigger to match larger orb */}
      <OrbitRing radius={5} speed={0.3} color="#00c7f1" thickness={0.06} />
      <OrbitRing radius={6} speed={-0.2} color="#134a8b" thickness={0.05} />
      <OrbitRing radius={7} speed={0.15} color="#00c7f1" thickness={0.04} tiltX={Math.PI / 2.5} />
      <OrbitRing radius={8} speed={-0.1} color="#00c7f1" thickness={0.03} tiltX={Math.PI / 3} tiltY={0.3} />
      
      {/* Orbiting dots - larger and more visible */}
      <OrbitingDot radius={5} speed={0.6} color="#ffffff" size={0.25} />
      <OrbitingDot radius={6} speed={-0.4} color="#00c7f1" size={0.2} />
      <OrbitingDot radius={7} speed={0.3} color="#ffffff" size={0.18} />
      
      {/* Floating shapes - BIGGER and more */}
      <FloatingShape 
        position={[-5, 2, -2]} 
        color="#00c7f1" 
        shape="sphere"
        size={1}
        speed={1.2}
        distort={0.5}
        emissive
      />
      <FloatingShape 
        position={[6, -2, -3]} 
        color="#134a8b" 
        shape="box"
        size={1.2}
        speed={0.8}
        distort={0.3}
        emissive
      />
      <FloatingShape 
        position={[5, 3, -1]} 
        color="#00c7f1" 
        shape="torus"
        size={0.8}
        speed={1}
        distort={0.2}
        emissive
      />
      <FloatingShape 
        position={[-4, -3, -2]} 
        color="#00c7f1" 
        shape="sphere"
        size={0.7}
        speed={1.5}
        distort={0.6}
        emissive
      />
      <FloatingShape 
        position={[-2, 4, -4]} 
        color="#134a8b" 
        shape="box"
        size={0.5}
        speed={0.6}
        distort={0.4}
      />
      <FloatingShape 
        position={[8, 1, -5]} 
        color="#00c7f1" 
        shape="sphere"
        size={0.6}
        speed={1.1}
        distort={0.4}
        emissive
      />
      <FloatingShape 
        position={[-6, 0, -3]} 
        color="#134a8b" 
        shape="torus"
        size={0.9}
        speed={0.9}
        distort={0.3}
        emissive
      />
      
      {/* Floating Image Cards - Company & Employees */}
      {/* CEO/Team images floating around */}
      <FloatingImageCard
        position={[-7, 3, -2]}
        imagePath="/ceo.png"
        size={1.8}
        speed={0.7}
        rotationOffset={0}
        glowColor="#00c7f1"
      />
      <FloatingImageCard
        position={[9, 2, -3]}
        imagePath="/team.jpg"
        size={1.6}
        speed={0.9}
        rotationOffset={1}
        glowColor="#134a8b"
      />
      <FloatingImageCard
        position={[-8, -2, -4]}
        imagePath="/workers.jpg"
        size={1.4}
        speed={0.8}
        rotationOffset={2}
        glowColor="#00c7f1"
      />
      
      {/* Employee avatars as floating spheres */}
      <FloatingImageSphere
        position={[-5, -4, -1]}
        imagePath="/userOne.png"
        size={0.9}
        speed={1.2}
        rotationOffset={0.5}
        glowColor="#00c7f1"
      />
      <FloatingImageSphere
        position={[7, -3, -2]}
        imagePath="/userTwo.png"
        size={0.8}
        speed={1.0}
        rotationOffset={1.5}
        glowColor="#134a8b"
      />
      <FloatingImageSphere
        position={[-3, 5, -3]}
        imagePath="/userThree.png"
        size={0.85}
        speed={0.9}
        rotationOffset={2.5}
        glowColor="#00c7f1"
      />
      
      {/* More floating image cards scattered around */}
      <FloatingImageCard
        position={[10, -1, -5]}
        imagePath="/approach.jpg"
        size={1.3}
        speed={0.6}
        rotationOffset={3}
        glowColor="#134a8b"
      />
      <FloatingImageCard
        position={[-9, 0, -6]}
        imagePath="/portfolio.png"
        size={1.2}
        speed={0.75}
        rotationOffset={4}
        glowColor="#00c7f1"
      />
      
      {/* Additional floating spheres with employee images */}
      <FloatingImageSphere
        position={[6, 5, -4]}
        imagePath="/andrew.png"
        size={0.7}
        speed={1.1}
        rotationOffset={3.5}
        glowColor="#00c7f1"
      />
      <FloatingImageSphere
        position={[-6, -5, -3]}
        imagePath="/akiko.png"
        size={0.75}
        speed={0.85}
        rotationOffset={4.5}
        glowColor="#134a8b"
      />
      <FloatingImageSphere
        position={[4, -5, -2]}
        imagePath="/tanaka.png"
        size={0.65}
        speed={1.3}
        rotationOffset={5}
        glowColor="#00c7f1"
      />
      
      {/* More scattered image cards for depth */}
      <FloatingImageCard
        position={[-4, -6, -5]}
        imagePath="/japan.jpg"
        size={1.0}
        speed={0.65}
        rotationOffset={5.5}
        glowColor="#134a8b"
      />
      <FloatingImageCard
        position={[8, 4, -6]}
        imagePath="/Section.jpg"
        size={1.1}
        speed={0.55}
        rotationOffset={6}
        glowColor="#00c7f1"
      />
      
      {/* Environment for reflections */}
      <Environment preset="night" />
    </>
  )
}

// Loading fallback
function Loader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-[#050a15]">
      <div className="w-20 h-20 border-4 border-[#00c7f1]/30 border-t-[#00c7f1] rounded-full animate-spin" />
    </div>
  )
}

// Main exported component
export default function HeroScene3D({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <Suspense fallback={<Loader />}>
        <Canvas
          camera={{ position: [0, 0, 14], fov: 60 }}
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
