import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import gsap from "gsap";

let camera, scene, renderer, model;
const loader = new GLTFLoader();

export const Landing = () => {
  camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.01,
    10
  );
  camera.position.z = 10;
  camera.rotation.z = 1.2;

  scene = new THREE.Scene();

  // const axesHelper = new THREE.AxesHelper(5);
  // scene.add(axesHelper);

  loader.load("/model/drone/scene.gltf", (gltf) => {
    model = gltf.scene;
    model.rotation.y = Math.PI;
    console.log(model);

    gsap.to(camera.position, {
      z: 2.5,
      duration: 2,
      ease: "back.out(1.7)",
    });

    gsap.to(camera.rotation, {
      z: 0,
      duration: 2,
    });

    gsap.to(model.rotation, {
      x: 0.8,
      delay: 1,
      duration: 2,
    });
    gsap.to(model.rotation, {
      y: Math.PI * 7 + 2.4,
      x: -0.1,
      delay: 0.1,
      duration: 4,
    });
    gsap.to(model.scale, {
      delay: 1,
      duration: 2,
      x: 0.5,
      y: 0.5,
      z: 0.5,
    });
    gsap.to(model.position, {
      delay: 1,
      duration: 2,
      x: 1.6,
      y: 0.71,
      z: 0.6,
    });
    gsap.to(model.position, {
      duration: 3,
      x: 0.05,
      y: -0.05,
      z: 1.5,
    });
    gsap.to(camera.position, {
      y: -0.15,
      duration: 2.5,
      delay: 2,
    });

    scene.add(model);
  });

  const light = new THREE.AmbientLight(0xffffff, 2);
  const spotLight = new THREE.SpotLight(0xffffff);
  const pointLight = new THREE.PointLight(0xffffff, 0.5, 50);
  spotLight.position.set(5, 5, 5);

  scene.add(light, spotLight, pointLight);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setAnimationLoop(animation);

  document.body.appendChild(renderer.domElement);
  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
};

// animation;
export const animation = () => {
  renderer.render(scene, camera);
};

// import React, { useState, useEffect, useRef } from "react";
// import gsap from "gsap";

// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import { Link } from "react-router-dom";
// import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import "./styles.css";

// extend({ OrbitControls });

// const Drone = (props) => {
//   const [model, setModel] = useState();
//   useEffect(() => {
//     new GLTFLoader().load("/model/drone/scene.gltf", setModel);
//   }, []);

//   return model ? <primitive object={model.scene} /> : null;
// };

// const Controls = () => {
//   const orbitRef = useRef();
//   const { camera, gl } = useThree();
//   useFrame(() => orbitRef.current.update());
//   return (
//     <orbitControls
//       enableDamping={true}
//       autoRotate
//       args={[camera, gl.domElement]}
//       ref={orbitRef}
//     />
//   );
// };

// export function Landing() {
//   return (
//     <Canvas camera={{ position: [0, 0, 2] }}>
//       <Controls />
//       <Drone className="hi" scale={[10, 10, 10]} />
//       <ambientLight args={[0xffffff]} intensity={1} />
//       <directionalLight position={[0, 0, 5]} intensity={0.5} />
//     </Canvas>
//   );
// }
