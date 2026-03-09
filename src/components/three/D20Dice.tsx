"use client";

import { useRef, useMemo, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

const D20_NUMBERS = [20, 1, 12, 8, 14, 2, 16, 6, 18, 4, 10, 19, 11, 3, 17, 7, 13, 5, 15, 9];

function createD20FaceMaterials(
  baseColor: string,
  numberColor: string,
  opacity: number,
  emissiveColor: string
): THREE.MeshPhysicalMaterial[] {
  const size = 256;

  return D20_NUMBERS.map((num) => {
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d")!;

    ctx.fillStyle = "transparent";
    ctx.clearRect(0, 0, size, size);

    ctx.fillStyle = baseColor;
    ctx.globalAlpha = 0.3;
    ctx.beginPath();
    ctx.moveTo(size / 2, 0);
    ctx.lineTo(0, size);
    ctx.lineTo(size, size);
    ctx.closePath();
    ctx.fill();
    ctx.globalAlpha = 1;

    ctx.strokeStyle = numberColor;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(size / 2, 0);
    ctx.lineTo(0, size);
    ctx.lineTo(size, size);
    ctx.closePath();
    ctx.stroke();

    const numStr = num.toString();
    const fontSize = num >= 10 ? size * 0.25 : size * 0.32;
    ctx.font = `bold ${fontSize}px "Georgia", serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    const centerY = size * 0.6;

    ctx.fillStyle = numberColor;
    ctx.globalAlpha = 0.9;
    ctx.fillText(numStr, size / 2, centerY);

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;

    return new THREE.MeshPhysicalMaterial({
      map: texture,
      color: baseColor,
      transparent: true,
      opacity,
      transmission: 0.7,
      thickness: 1.2,
      roughness: 0.15,
      metalness: 0.05,
      ior: 1.45,
      emissive: emissiveColor,
      emissiveIntensity: 0.12,
      envMapIntensity: 0.8,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
  });
}

interface D20Props {
  basePosition: [number, number, number];
  color: string;
  numberColor: string;
  scale: number;
  rotationSpeed: number;
  mouseInfluence: number;
  opacity: number;
}

function D20({
  basePosition,
  color,
  numberColor,
  scale,
  rotationSpeed,
  mouseInfluence,
  opacity,
}: D20Props) {
  const groupRef = useRef<THREE.Group>(null);
  const targetPos = useRef(new THREE.Vector3(...basePosition));
  const { pointer, viewport } = useThree();

  const geometry = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(1, 0);

    const position = geo.attributes.position;
    const faceCount = position.count / 3;
    const uvs = new Float32Array(position.count * 2);

    for (let f = 0; f < faceCount; f++) {
      const i = f * 3;
      uvs[(i + 0) * 2] = 0.5;
      uvs[(i + 0) * 2 + 1] = 0.0;
      uvs[(i + 1) * 2] = 0.0;
      uvs[(i + 1) * 2 + 1] = 1.0;
      uvs[(i + 2) * 2] = 1.0;
      uvs[(i + 2) * 2 + 1] = 1.0;
    }

    geo.setAttribute("uv", new THREE.BufferAttribute(uvs, 2));

    const groups: { start: number; count: number; materialIndex: number }[] = [];
    for (let f = 0; f < faceCount; f++) {
      groups.push({ start: f * 3, count: 3, materialIndex: f });
    }
    geo.clearGroups();
    groups.forEach((g) => geo.addGroup(g.start, g.count, g.materialIndex));

    return geo;
  }, []);

  const materials = useMemo(
    () => createD20FaceMaterials(color, numberColor, opacity, color),
    [color, numberColor, opacity]
  );

  useEffect(() => {
    return () => {
      geometry.dispose();
      materials.forEach((m) => {
        m.map?.dispose();
        m.dispose();
      });
    };
  }, [geometry, materials]);

  useFrame((_, delta) => {
    if (!groupRef.current) return;

    groupRef.current.rotation.x += delta * rotationSpeed * 0.4;
    groupRef.current.rotation.y += delta * rotationSpeed * 0.3;
    groupRef.current.rotation.z += delta * rotationSpeed * 0.1;

    const mouseX = (pointer.x * viewport.width) / 2;
    const mouseY = (pointer.y * viewport.height) / 2;

    targetPos.current.set(
      basePosition[0] + mouseX * mouseInfluence,
      basePosition[1] + mouseY * mouseInfluence,
      basePosition[2]
    );

    groupRef.current.position.lerp(targetPos.current, 0.03);
  });

  return (
    <Float speed={0.8} rotationIntensity={0.15} floatIntensity={0.4}>
      <group ref={groupRef} position={basePosition} scale={scale}>
        <mesh geometry={geometry} material={materials} />
      </group>
    </Float>
  );
}

export function D20Dice() {
  return (
    <group>
      <D20
        basePosition={[-2.2, 0.5, 1.5]}
        color="#c9a84c"
        numberColor="#fde68a"
        scale={1.4}
        rotationSpeed={0.8}
        mouseInfluence={0.35}
        opacity={0.3}
      />
      <D20
        basePosition={[2.5, -0.3, 1]}
        color="#4a9eff"
        numberColor="#bfdbfe"
        scale={1.2}
        rotationSpeed={0.6}
        mouseInfluence={0.25}
        opacity={0.3}
      />
    </group>
  );
}
