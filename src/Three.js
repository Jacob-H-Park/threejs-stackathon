import React, { useRef } from "react";
import * as THREE from "three";
import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import "./styles.css";

import { Sphere, Plane } from "./Sphere";
import NormalBox from "./NormalBox";

import Torus from "./Torus";

extend({ OrbitControls });

const Controls = () => {
  const orbitRef = useRef();
  const { camera, gl } = useThree();

  useFrame(() => orbitRef.current.update());
  return (
    <orbitControls autoRotate args={[camera, gl.domElement]} ref={orbitRef} />
  );
};

function Three() {
  return (
    <div className="three">
      <Canvas
        camera={{ position: [0, 0, 6] }}
        onCreated={({ gl }) => {
          gl.shadowMap.enabled = true;
          gl.shadowMap.type = THREE.PCFSoftShadowMap;
        }}
      >
        <Controls />
        <Torus position={[0, 1, 0]} />
        <Sphere position={[-4, 1, 0]} />
        <NormalBox position={[4, 1, 0]} />
        <Plane />
        {/* <axesHelper args={[5]} /> */}
        <ambientLight args={[0xffffff]} intensity={0.5} />
        <spotLight intensity={1} position={[0, 5, 15]} />
        <directionalLight position={[0, 3, 5]} intensity={1} castShadow />
      </Canvas>
    </div>
  );
}

export default Three;
