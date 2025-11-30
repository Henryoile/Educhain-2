/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Line, Sphere, Icosahedron, Box, Environment } from '@react-three/drei';
import * as THREE from 'three';

const NetworkNode = ({ position, color }: { position: [number, number, number]; color: string }) => {
  return (
    <Sphere args={[0.15, 16, 16]} position={position}>
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={2}
        toneMapped={false}
      />
    </Sphere>
  );
};

const ConnectionLines = ({ points }: { points: [number, number, number][] }) => {
  return (
    <Line
      points={points}
      color="#0ea5e9"
      lineWidth={1}
      transparent
      opacity={0.3}
    />
  );
};

export const HeroScene: React.FC = () => {
  // Generate random nodes for the blockchain network
  const count = 15;
  const nodes = useMemo(() => {
    return new Array(count).fill(0).map(() => ({
      position: [
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 6
      ] as [number, number, number],
      color: Math.random() > 0.5 ? '#2563EB' : '#0EA5E9'
    }));
  }, []);

  const connections = useMemo(() => {
    const lines = [];
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        if (Math.random() > 0.7) { // Connect some nodes
           lines.push(nodes[i].position);
           lines.push(nodes[j].position);
        }
      }
    }
    return lines;
  }, [nodes]);

  return (
    <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <color attach="background" args={['#F8FAFC']} />
        <ambientLight intensity={0.5} />
        
        <Float speed={1} rotationIntensity={0.2} floatIntensity={0.2}>
           <group>
             {nodes.map((node, i) => (
                <NetworkNode key={i} position={node.position} color={node.color} />
             ))}
             <ConnectionLines points={connections} />
           </group>
        </Float>
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

// Internal component to handle the rotating credential logic inside Canvas
const CredentialModel = () => {
  const boxRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (boxRef.current) {
        boxRef.current.rotation.y += 0.005;
        boxRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <Float rotationIntensity={0.2} floatIntensity={0.5} speed={2}>
      <group ref={boxRef}>
        {/* The "Block" */}
        <Box args={[1.8, 2.4, 0.2]} position={[0, 0, 0]}>
           <meshPhysicalMaterial 
              color="#ffffff" 
              transmission={0.2} 
              opacity={0.9} 
              metalness={0.1} 
              roughness={0.2} 
              thickness={0.5}
              clearcoat={1}
           />
        </Box>
        
        {/* Holographic Shield/Check */}
        <Icosahedron args={[0.5, 1]} position={[0, 0.3, 0.3]}>
           <meshStandardMaterial color="#2563EB" wireframe />
        </Icosahedron>
        
        {/* Decorative Lines */}
        <Box args={[1.4, 0.05, 0.05]} position={[0, -0.4, 0.11]}>
           <meshStandardMaterial color="#94a3b8" />
        </Box>
        <Box args={[1.0, 0.05, 0.05]} position={[0, -0.6, 0.11]}>
           <meshStandardMaterial color="#94a3b8" />
        </Box>
      </group>
    </Float>
  );
};

// Represents a verified block/credential in a wallet
export const QuantumComputerScene: React.FC = () => {
  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity={1} />
        <spotLight position={[5, 5, 5]} intensity={1} color="#2563EB" />
        <spotLight position={[-5, -5, -5]} intensity={0.5} color="#0EA5E9" />
        <Environment preset="studio" />
        <CredentialModel />
      </Canvas>
    </div>
  );
}
