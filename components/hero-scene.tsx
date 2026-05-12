"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, PerspectiveCamera } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();

  const time = useRef(0);

  // Responsive scale: smaller on mobile, larger on desktop
  const scale = useMemo(() => {
    const baseScale = viewport.width < 5 ? 1.5 : 2.4;
    return baseScale;
  }, [viewport.width]);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    time.current += delta;
    meshRef.current.rotation.x = time.current * 0.2;
    meshRef.current.rotation.y = time.current * 0.3;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 64, 64]} scale={scale}>
        <MeshDistortMaterial
          color="#f97316"
          speed={3}
          distort={0.4}
          radius={1}
          emissive="#c2410c"
          emissiveIntensity={0.5}
          metalness={0.8}
          roughness={0.2}
        />
      </Sphere>
    </Float>
  );
}

function Particles({ count = 80 }) {
  const points = useRef<THREE.Points>(null);
  const { viewport } = useThree();

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
    time.current += delta;
    points.current.rotation.y = time.current * 0.05;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particles, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#fb923c" transparent opacity={0.4} sizeAttenuation />
    </points>
  );
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
      <Canvas 
        dpr={[1, 2]} 
        performance={{ min: 0.5 }}
        gl={{ antialias: false, powerPreference: "high-performance" }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={1.5} color="#fb923c" />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#fcd34d" />
        <AnimatedSphere />
        <Particles count={60} />
      </Canvas>
    </div>
  );
}
