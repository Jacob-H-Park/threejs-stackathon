import React, { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";

import { useSpring, animated } from "@react-spring/three";

const NormalBox = (props) => {
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  const meshRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = t / 3;
    meshRef.current.rotation.y = t / 4;
    meshRef.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
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
      <boxBufferGeometry args={[1, 1, 1]} />
      <animated.meshNormalMaterial color={color} />
    </animated.mesh>
  );
};

export default NormalBox;
