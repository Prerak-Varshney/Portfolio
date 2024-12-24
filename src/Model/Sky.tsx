import { useRef } from "react";
import * as THREE from 'three';

import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber";

import skyScene from '../assets/3d/sky.glb';

interface SkyProps {
  isRotating: boolean;
}

const Sky = ({ isRotating }: SkyProps) => {
    const sky = useGLTF(skyScene);
    const skyRef = useRef<THREE.Mesh>(null);

    useFrame((_, delta) => {
      if (isRotating && skyRef.current) {
        skyRef.current.rotation.y += 0.15 * delta;
      }
    })

  return (
    <mesh ref={skyRef}>
      <primitive object={sky.scene}/>
    </mesh>
  )
}

export default Sky;
