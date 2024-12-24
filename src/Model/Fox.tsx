import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useGLTF, useAnimations } from '@react-three/drei';

import foxScene from '../assets/3d/fox.glb';

interface FoxProps {
  currentAnimation: string;
  [key: string]: any;
}

const Fox = ({currentAnimation, ...props}: FoxProps) => {
  const group = useRef<THREE.Group>(null)
  const { nodes, materials, animations } = useGLTF(foxScene)
  const { actions } = useAnimations(animations, group)


  useEffect(() => {
      Object.values(actions).forEach((action) => action?.stop());

      if(actions[currentAnimation]){
        actions[currentAnimation].play();
      }
    
  }, [currentAnimation, actions])


  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <primitive object={nodes.GLTF_created_0_rootJoint} />
        <skinnedMesh
          name="Object_7"
          geometry={(nodes.Object_7 as THREE.SkinnedMesh).geometry}
          material={materials.PaletteMaterial001}
          skeleton={(nodes.Object_7 as THREE.SkinnedMesh).skeleton}
        />
        <skinnedMesh
          name="Object_8"
          geometry={(nodes.Object_8 as THREE.SkinnedMesh).geometry}
          material={materials.PaletteMaterial001}
          skeleton={(nodes.Object_8 as THREE.SkinnedMesh).skeleton}
        />
        <skinnedMesh
          name="Object_9"
          geometry={(nodes.Object_9 as THREE.SkinnedMesh).geometry}
          material={materials.PaletteMaterial001}
          skeleton={(nodes.Object_9 as THREE.SkinnedMesh).skeleton}
        />
        <skinnedMesh
          name="Object_10"
          geometry={(nodes.Object_10 as THREE.SkinnedMesh).geometry}
          material={materials.PaletteMaterial001}
          skeleton={(nodes.Object_10 as THREE.SkinnedMesh).skeleton}
        />
        <skinnedMesh
          name="Object_11"
          geometry={(nodes.Object_11 as THREE.SkinnedMesh).geometry}
          material={materials.PaletteMaterial001}
          skeleton={(nodes.Object_11 as THREE.SkinnedMesh).skeleton}
        />
      </group>
    </group>
  )
}

export default Fox;