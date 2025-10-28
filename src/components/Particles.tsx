import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Particles() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // === Scene, Camera, Renderer ===
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000);

    if (mountRef.current && !mountRef.current.hasChildNodes()) {
      mountRef.current.appendChild(renderer.domElement); 
    }

    // === Diamond Sphere ===
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      roughness: 0.5,
      metalness: 0.0,
      clearcoat: 1.0,
      clearcoatRoughness: 0.2,
    });

    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // === Moon ===
    const moonGeometry = new THREE.SphereGeometry(0.3, 32, 32);
    const moonMaterial = new THREE.MeshStandardMaterial({
      color: 0xaaaaaa,
      emissive: 0x222222,
      emissiveIntensity: 0.5,
    });
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);
    scene.add(moon);

    // === Lights ===
    const ambientLight = new THREE.AmbientLight(0x404040, 1.2); 
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // === Animation Loop ===
    const animate = () => {
      requestAnimationFrame(animate);

      sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.01;

      const time = Date.now() * 0.001;
      moon.position.x = Math.sin(time) * 2;
      moon.position.z = Math.cos(time) * 2;

      renderer.render(scene, camera);
    };
    animate();

    // === Handle Resize ===
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // === Cleanup ===
    return () => {
      window.removeEventListener("resize", handleResize);
      if (mountRef.current) {
        mountRef.current.innerHTML = ""; 
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    />
  );
}
