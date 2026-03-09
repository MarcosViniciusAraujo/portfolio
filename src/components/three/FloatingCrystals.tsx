"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

interface CrystalProps {
  position: [number, number, number];
  scale: number;
  color: string;
  speed: number;
  geometry: "icosahedron" | "octahedron" | "dodecahedron";
}

function Crystal({ position, scale, color, speed, geometry }: CrystalProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * speed * 0.3;
      meshRef.current.rotation.y += delta * speed * 0.2;
    }
  });

  const Geometry = useMemo(() => {
    switch (geometry) {
      case "icosahedron":
        return <icosahedronGeometry args={[1, 0]} />;
      case "octahedron":
        return <octahedronGeometry args={[1, 0]} />;
      case "dodecahedron":
        return <dodecahedronGeometry args={[1, 0]} />;
    }
  }, [geometry]);

  return (
    <Float speed={speed * 0.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position} scale={scale}>
        {Geometry}
        <meshPhysicalMaterial
          color={color}
          transparent
          opacity={0.15}
          wireframe
          emissive={color}
          emissiveIntensity={0.3}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

const crystalConfigs: CrystalProps[] = [
  { position: [3.8, -0.5, -3], scale: 1.1, color: "#4a9eff", speed: 0.8, geometry: "octahedron" },
  { position: [-1.5, -2, -1.5], scale: 0.6, color: "#e8663c", speed: 1.5, geometry: "dodecahedron" },
  { position: [2, 2.5, -4], scale: 0.9, color: "#c9a84c", speed: 1.0, geometry: "dodecahedron" },
  { position: [-4, -1, -5], scale: 1.3, color: "#4a9eff", speed: 0.6, geometry: "icosahedron" },
  { position: [4.5, 1, -2.5], scale: 0.5, color: "#e8663c", speed: 1.8, geometry: "octahedron" },
];

export function FloatingCrystals() {
  return (
    <group>
      {crystalConfigs.map((config, i) => (
        <Crystal key={i} {...config} />
      ))}
    </group>
  );
}
