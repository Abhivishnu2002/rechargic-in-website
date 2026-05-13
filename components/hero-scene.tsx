"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, AdaptiveDpr, AdaptiveEvents, Preload } from "@react-three/drei";
import { useRef, useMemo } from "react";
import { Mesh, Points } from "three";

function AnimatedSphere() {
  const meshRef = useRef<Mesh>(null);
  const { viewport } = useThree();

  const time = useRef(0);

  // Responsive scale: smaller on mobile, larger on desktop
  const scale = useMemo(() => {
    const baseScale = viewport.width < 5 ? 1.5 : 2.4;
    return baseScale;
  }, [viewport.width]);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    // Limit rotation speed slightly for better consistency and reduce CPU work
    const t = Math.min(delta, 0.1);
    time.current += t;
    meshRef.current.rotation.x = time.current * 0.15;
    meshRef.current.rotation.y = time.current * 0.2;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={meshRef} args={[1, 32, 32]} scale={scale}>
        <MeshDistortMaterial
          color="#f97316"
          speed={2}
          distort={0.3}
          radius={1}
          emissive="#c2410c"
          emissiveIntensity={0.4}
          metalness={0.8}
          roughness={0.2}
        />
      </Sphere>
    </Float>
  );
}

function Particles({ count = 40 }) {
  const points = useRef<Points>(null);

  const particles = useMemo(() => {
    const temp = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      temp[i * 3] = (Math.random() - 0.5) * 10;
      temp[i * 3 + 1] = (Math.random() - 0.5) * 10;
      temp[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return temp;
  }, [count]);

  const time = useRef(0);

  useFrame((state, delta) => {
    if (!points.current) return;
    time.current += Math.min(delta, 0.1);
    points.current.rotation.y = time.current * 0.03;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particles, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#fb923c" transparent opacity={0.3} sizeAttenuation />
    </points>
  );
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
      <Canvas 
        dpr={[1, 1.5]} 
        performance={{ min: 0.5 }}
        gl={{ 
          antialias: false, 
          powerPreference: "high-performance",
          alpha: true,
          stencil: false,
          depth: true,
          preserveDrawingBuffer: false,
        }}
        camera={{ position: [0, 0, 5], fov: 75 }}
      >
        <AdaptiveDpr pixelated />
        <AdaptiveEvents />
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={1.2} color="#fb923c" />
        <pointLight position={[-5, -5, -5]} intensity={0.4} color="#fcd34d" />
        <AnimatedSphere />
        <Particles count={40} />
        <Preload all />
      </Canvas>
    </div>
  );
}


