import { useRef, useEffect } from 'react';
import * as THREE from 'three';

import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

import birdScene from '../assets/3d/bird.glb';

const Bird = () => {
    const birdRef = useRef<THREE.Mesh>(null);

    const {scene, animations} = useGLTF(birdScene);
    const {actions} = useAnimations(animations, birdRef);


    useEffect(() => {
        if (actions['Take 001']) {
            actions['Take 001'].play();
        }
 
    }, []);

    useFrame(({clock, camera}) => {
        if (birdRef.current) {
            birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

            if (birdRef.current.position.x > camera.position.x + 10) {
                birdRef.current.rotation.y = Math.PI;
            } else if (birdRef.current.position.x < camera.position.x - 10) {
                birdRef.current.rotation.y = 0;
            }

            if (birdRef.current.rotation.y === 0) {
                birdRef.current.position.x += 0.05;
                birdRef.current.position.z -= 0.05;
            } else {
                birdRef.current.position.x -= 0.05;
                birdRef.current.position.z += 0.05;
            }
        }
        
    })


    return (
        <mesh position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]} ref={birdRef}>
            <primitive object={scene}/>
        </mesh>
    )
}

export default Bird