import React, { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";

import { useSpring, animated } from "@react-spring/three";

export const Plane = () => {
  return (
    <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]}>
      <planeBufferGeometry attach="geometry" args={[30, 30]} />
      <meshPhysicalMaterial attach="material" color="white" />
    </mesh>
  );
};

export const Sphere = (props) => {
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  const meshRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = t / 3;
    meshRef.current.rotation.y = t / 4;
    meshRef.current.position.y = 0.5 + Math.sin(t / 1.5);
  });
  const { scale, color } = useSpring({
    scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1],
    color: hovered ? "pink" : "red",
  });

  return (
    <animated.mesh
      ref={meshRef}
      visible
      userData={{ hello: "world" }}
      rotation={[Math.PI / 2, 0, 0]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => setActive(!active)}
      scale={scale}
      {...props}
      castShadow
    >
      <sphereGeometry args={[1, 32, 32]} />
      <animated.meshStandardMaterial wireframe={true} color={0x00ffff} />
    </animated.mesh>
  );
};
