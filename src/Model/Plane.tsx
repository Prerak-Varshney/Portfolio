import { useEffect, useRef } from 'react';
import * as THREE from 'three';

import { useGLTF, useAnimations } from '@react-three/drei'
import planeScene from '../assets/3d/plane.glb'


interface PlaneProps {
    isRotating: boolean;
    [key: string]: any;
}

const Plane = ({isRotating, ...props}: PlaneProps) => {
    const ref = useRef<THREE.Mesh>(null);

    const {scene, animations} = useGLTF(planeScene);
    const {actions} = useAnimations(animations, ref);

    useEffect(() => {
        if (isRotating) {
            actions['Take 001']?.play();
        } else {
            actions['Take 001']?.stop();
        }
    }, [actions, isRotating])


    return (
      <mesh {...props} ref={ref}>
        <primitive object={scene}/>
      </mesh>
    )
}

export default Plane
