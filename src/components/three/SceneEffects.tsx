"use client";

export function SceneEffects() {
  return (
    <>
      <ambientLight intensity={0.15} />
      <pointLight position={[5, 5, 5]} intensity={0.4} color="#c9a84c" />
      <pointLight position={[-5, -3, 3]} intensity={0.3} color="#4a9eff" />
      <pointLight position={[0, 3, -5]} intensity={0.2} color="#e8663c" />
      <fog attach="fog" args={["#0a0a12", 5, 25]} />
    </>
  );
}
