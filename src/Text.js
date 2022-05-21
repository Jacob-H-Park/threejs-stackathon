// import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as dat from "lil-gui";

import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import typefaceFont from "three/examples/fonts/helvetiker_regular.typeface.json";

let camera, scene, renderer, controls;

//debug
const gui = new dat.GUI();
// Scene
scene = new THREE.Scene();

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader();
const matcapTexture = textureLoader.load("/textures/matcaps/3.png");

/**
 * Fonts
 */
const fontLoader = new FontLoader();

export const Text = () => {
  fontLoader.load("/fonts/helvetiker_regular.typeface.json", (font) => {
    // Material
    const material = new THREE.MeshMatcapMaterial({ matcap: matcapTexture });

    // Text
    const textGeometry = new TextGeometry("Stackathon - Jake", {
      font: font,
      size: 0.5,
      height: 0.2,
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness: 0.03,
      bevelSize: 0.02,
      bevelOffset: 0,
      bevelSegments: 5,
    });
    textGeometry.center();

    const text = new THREE.Mesh(textGeometry, material);
    scene.add(text);

    // console.log(text);
    gui.add(text, "visible");
    // Donuts
    const donutGeometry = new THREE.TorusGeometry(0.3, 0.2, 32, 64);

    for (let i = 0; i < 100; i++) {
      const donut = new THREE.Mesh(donutGeometry, material);
      donut.position.x = (Math.random() - 0.5) * 10;
      donut.position.y = (Math.random() - 0.5) * 10;
      donut.position.z = (Math.random() - 0.5) * 10 + 1;
      donut.rotation.x = Math.random() * Math.PI;
      donut.rotation.y = Math.random() * Math.PI;
      const scale = Math.random();
      donut.scale.set(scale, scale, scale);

      scene.add(donut);
    }
  });

  /**
   * Sizes
   */
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  // Base camera
  camera = new THREE.PerspectiveCamera(
    75,
    sizes.width / sizes.height,
    0.1,
    100
  );
  camera.position.x = 1;
  camera.position.y = 1;
  camera.position.z = 4;
  scene.add(camera);

  /**
   * Renderer
   */
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setAnimationLoop(animation);
  document.body.appendChild(renderer.domElement);
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
};
/**
 * Animate
 */
export const animation = () => {
  // Update controls
  controls.update();

  renderer.render(scene, camera);
};
