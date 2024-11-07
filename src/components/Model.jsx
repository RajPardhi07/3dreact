import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";


const Model2 = ({ scrollProgress }) => {
    const modelRef = useRef();
    const { nodes, materials } = useGLTF("/rolls_royce.glb", true);
  
    useEffect(() => {
      if (modelRef.current) {
        modelRef.current.rotation.y = scrollProgress * Math.PI * 2;
      }
    }, [scrollProgress]);
  
    return nodes ? <primitive object={nodes.RollsRoyceMain} ref={modelRef} /> : null;
  };
  
  export default Model2;