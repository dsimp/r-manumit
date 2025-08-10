import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import axios from "axios";
import { useEffect } from "react";

function Scene() {
  const mesh = useRef();

  return (
    <mesh ref={mesh} rotation={[0, 0, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="blue" />
    </mesh>
  );
}

function App() {
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/hello`)
      .then((res) => {
        console.log("Backend says:", res.data);
      })
      .catch((err) => {
        console.error("Error connecting to backend:", err);
      });
  }, []);

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Scene />
      <OrbitControls />
    </Canvas>
  );
}

export default App;
