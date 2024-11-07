import * as THREE from 'three'
import { useMemo } from 'react'
import { applyProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

const TryBMW = (props) => {
  const { scene, nodes, materials } = useGLTF('/bmw.glb')

  useMemo(() => {
    if (nodes && materials) {
      Object.values(nodes).forEach((node) => {
        if (node.isMesh) {
          if (node.name.startsWith('glass')) node.geometry.computeVertexNormals()
          if (node.name === 'silver_001_BreakDiscs_0')
            node.material = applyProps(materials.BreakDiscs.clone(), { color: '#ddd' })
        }
      })

      // Check if 'glass_003' exists before applying scale
      if (nodes['glass_003']) {
        nodes['glass_003'].scale.setScalar(2.7)
      }

      // Apply other material properties safely
      if (materials.FrameBlack) {
        applyProps(materials.FrameBlack, { metalness: 0.75, roughness: 0, color: 'black' })
      }
      if (materials.Chrome) {
        applyProps(materials.Chrome, { metalness: 1, roughness: 0, color: '#333' })
      }
      if (materials.BreakDiscs) {
        applyProps(materials.BreakDiscs, { metalness: 0.2, roughness: 0.2, color: '#555' })
      }
      if (materials.TiresGum) {
        applyProps(materials.TiresGum, { metalness: 0, roughness: 0.4, color: '#181818' })
      }
      if (materials.GreyElements) {
        applyProps(materials.GreyElements, { metalness: 0, color: '#292929' })
      }
      if (materials.emitbrake) {
        applyProps(materials.emitbrake, { emissiveIntensity: 3, toneMapped: false })
      }
      if (materials.LightsFrontLed) {
        applyProps(materials.LightsFrontLed, { emissiveIntensity: 3, toneMapped: false })
      }

      // Paint the car, ensuring the node exists
      if (nodes.yellow_WhiteCar_0) {
        nodes.yellow_WhiteCar_0.material = new THREE.MeshPhysicalMaterial({
          roughness: 0.3,
          metalness: 0.05,
          color: '#111',
          envMapIntensity: 0.75,
          clearcoatRoughness: 0,
          clearcoat: 1,
        })
      }
    }
  }, [nodes, materials])

  return <primitive object={scene} {...props} />
}

export default TryBMW;
