"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { FloatingCrystals } from "./FloatingCrystals";
import { ParticleField } from "./ParticleField";
import { D20Dice } from "./D20Dice";
import { SceneEffects } from "./SceneEffects";
import * as THREE from "three";

function MouseParallax() {
  const groupRef = useRef<THREE.Group>(null);
  const { pointer } = useThree();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        pointer.x * 0.1,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -pointer.y * 0.05,
        0.05
      );
    }
  });

  return (
    <group ref={groupRef}>
      <FloatingCrystals />
      <ParticleField />
    </group>
  );
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <Suspense fallback={null}>
          <SceneEffects />
          <MouseParallax />
          <D20Dice />
          <Environment preset="night" />
        </Suspense>
      </Canvas>
    </div>
  );
}
