import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/three";

const Torus = (props) => {
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  const { scale, color } = useSpring({
    scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1],
    color: hovered ? "hotpink" : "red",
  });

  return (
    <animated.mesh
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
      <torusKnotGeometry args={[1, 0.3, 100, 14]} />
      <animated.meshStandardMaterial metalness={1} color={color} />
    </animated.mesh>
  );
};

export default Torus;
