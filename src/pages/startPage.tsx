import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import spaceImage from '../assets/images/space.jpg';
import moonImage from '../assets/images/moon.jpg';
import normalImage from '../assets/images/normal.jpg';
import '../styles/StartPage.scss';
import '../styles/App.scss';

const Torus: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.005;
    meshRef.current.rotation.z += 0.01;
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <torusGeometry args={[10, 3, 16, 100]} />
      <meshStandardMaterial color={0xff6347} />
    </mesh>
  );
};

const Stars: React.FC = () => {
  const { scene } = useThree();

  useEffect(() => {
    for (let i = 0; i < 200; i++) {
      const geometry = new THREE.SphereGeometry(0.25, 24, 24);
      const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
      const star = new THREE.Mesh(geometry, material);

      const [x, y, z] = Array(3).fill(null).map(() => THREE.MathUtils.randFloatSpread(100));

      star.position.set(x, y, z);
      scene.add(star);
    }
  }, [scene]);

  return null;
};

const Moon: React.FC = () => {
  const moonRef = useRef<THREE.Mesh>(null!);
  const moonTexture = useTexture(moonImage);
  const normalTexture = useTexture(normalImage);

  useFrame(() => {
    moonRef.current.rotation.x += 0.005;
  });

  return (
    <mesh ref={moonRef} position={[10, 0, 30]}>
      <sphereGeometry args={[3, 32, 32]} />
      <meshStandardMaterial map={moonTexture} normalMap={normalTexture} />
    </mesh>
  );
};

const Background: React.FC = () => {
  const texture = useTexture(spaceImage);
  const { gl } = useThree();

  useEffect(() => {
    gl.setClearColor(new THREE.Color(0x000000));
    gl.setClearAlpha(1);
    gl.domElement.style.backgroundImage = `url(${texture.image.src})`;
    gl.domElement.style.backgroundSize = 'cover';
  }, [texture, gl]);

  return null;
};

const CameraController: React.FC = () => {
  const { camera } = useThree();

  useEffect(() => {
    const handleScroll = () => {
      const t = document.body.getBoundingClientRect().top;
      camera.position.z = t * -0.01;
      camera.position.x = t * -0.0002;
      camera.rotation.y = t * -0.0002;
    };

    document.body.onscroll = handleScroll;
    handleScroll(); // Initial call to set position

    return () => {
      document.body.removeEventListener('scroll', handleScroll);
    };
  }, [camera]);

  return null;
};

const StartPage: React.FC = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} />
      <Torus />
      <Stars />
      <Moon />
      <OrbitControls />
      <Background />
      <CameraController />
    </Canvas>
  );
};

export default StartPage;
