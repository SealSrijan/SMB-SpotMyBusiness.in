// "use client";

// import { useRef, useEffect } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { Sparkles, Html } from "@react-three/drei";
// import * as THREE from "three";

// // Individual Node Component
// interface NodeData {
//   name: string;
//   pos: [number, number, number];
//   icon: string;
//   color: string;
// }

// function FloatingNode({ name, pos, icon, color, mousePos }: NodeData & { mousePos: React.MutableRefObject<{ x: number; y: number }> }) {
//   const meshRef = useRef<THREE.Group>(null);
//   const initialPos = new THREE.Vector3(...pos);

//   useFrame((state) => {
//     if (!meshRef.current) return;
//     const time = state.clock.getElapsedTime();

//     // Floating animation
//     const xOffset = Math.sin(time + pos[0]) * 0.15;
//     const yOffset = Math.cos(time + pos[1]) * 0.15;
//     const zOffset = Math.sin(time * 0.5 + pos[2]) * 0.1;

//     // Mouse influence (attraction/repulsion)
//     const targetX = initialPos.x + xOffset + mousePos.current.x * 0.6;
//     const targetY = initialPos.y + yOffset + mousePos.current.y * 0.6;
    
//     // Lerp towards target position for smooth motion
//     meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, targetX, 0.05);
//     meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetY, 0.05);
//     meshRef.current.position.z = THREE.MathUtils.lerp(meshRef.current.position.z, initialPos.z + zOffset, 0.05);
//   });

//   return (
//     <group ref={meshRef} position={pos}>
//       {/* Node Core Sphere */}
//       <mesh>
//         <sphereGeometry args={[0.15, 16, 16]} />
//         <meshBasicMaterial color={color} />
//       </mesh>
      
//       {/* Glow Effect */}
//       <mesh scale={1.8}>
//         <sphereGeometry args={[0.15, 16, 16]} />
//         <meshBasicMaterial color={color} transparent opacity={0.2} />
//       </mesh>

//       {/* HTML Label on top */}
//       <Html distanceFactor={8} center>
//         <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 glass-card text-white text-[11px] whitespace-nowrap select-none pointer-events-none shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
//           <span className="text-sm">{icon}</span>
//           <span className="font-heading font-medium uppercase tracking-wider">{name}</span>
//         </div>
//       </Html>
//     </group>
//   );
// }

// // Lines Connecting Nodes
// function ConnectingLines({ nodesRefs }: { nodesRefs: React.MutableRefObject<THREE.Group[]> }) {
//   const lineGeomRef = useRef<THREE.BufferGeometry>(null);

//   useFrame(() => {
//     if (!lineGeomRef.current || nodesRefs.current.length === 0) return;

//     const positions: number[] = [];
//     const refs = nodesRefs.current;

//     // Connect node 0 (center) to all other nodes
//     const centerPos = refs[0]?.position;
//     if (centerPos) {
//       for (let i = 1; i < refs.length; i++) {
//         const targetPos = refs[i]?.position;
//         if (targetPos) {
//           positions.push(centerPos.x, centerPos.y, centerPos.z);
//           positions.push(targetPos.x, targetPos.y, targetPos.z);
//         }
//       }
//     }

//     // Connect some outer nodes together to make a web
//     for (let i = 1; i < refs.length - 1; i++) {
//       const p1 = refs[i]?.position;
//       const p2 = refs[i+1]?.position;
//       if (p1 && p2) {
//         positions.push(p1.x, p1.y, p1.z);
//         positions.push(p2.x, p2.y, p2.z);
//       }
//     }

//     lineGeomRef.current.setAttribute(
//       "position",
//       new THREE.Float32BufferAttribute(positions, 3)
//     );
//     lineGeomRef.current.attributes.position.needsUpdate = true;
//   });

//   return (
//     <lineSegments>
//       <bufferGeometry ref={lineGeomRef} />
//       <lineBasicMaterial color="#8B5E3C" transparent opacity={0.25} linewidth={1} />
//     </lineSegments>
//   );
// }

// // Scene setup
// function Scene() {
//   const mousePos = useRef({ x: 0, y: 0 });
//   const nodesRefs = useRef<THREE.Group[]>([]);

//   const nodeList: NodeData[] = [
//     { name: "SMB Hub", pos: [0, 0, 0], icon: "✨", color: "#E7D3B0" }, // Center Node
//     { name: "Google Search", pos: [-2.2, 1.6, 0.5], icon: "🔍", color: "#D4A373" },
//     { name: "Google Maps", pos: [2.2, 1.2, -0.5], icon: "📍", color: "#8B5E3C" },
//     { name: "Reviews", pos: [-1.8, -1.4, 0.8], icon: "⭐️", color: "#D4A373" },
//     { name: "Analytics", pos: [2.0, -1.6, -0.3], icon: "📊", color: "#8B5E3C" },
//     { name: "Traffic", pos: [-0.2, 2.3, -0.8], icon: "📈", color: "#E7D3B0" },
//     { name: "Leads", pos: [-3.2, -0.2, -0.6], icon: "👥", color: "#8B5E3C" },
//     { name: "Rankings", pos: [0.8, -2.5, 0.7], icon: "🏆", color: "#D4A373" },
//   ];

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       // Normalize mouse coordinates (-1 to 1)
//       mousePos.current.x = (e.clientX / window.innerWidth) * 2 - 1;
//       mousePos.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     <>
//       <ambientLight intensity={0.5} />
//       <pointLight position={[10, 10, 10]} intensity={1.5} color="#E7D3B0" />
      
//       {/* Background Sparkles */}
//       <Sparkles count={50} scale={6} size={1.2} speed={0.4} color="#8B5E3C" />

//       {/* Floating Nodes */}
//       {nodeList.map((node, i) => (
//         <group
//           key={node.name}
//           ref={(el) => {
//             if (el) nodesRefs.current[i] = el;
//           }}
//         >
//           <FloatingNode {...node} mousePos={mousePos} />
//         </group>
//       ))}

//       {/* Connective Web Lines */}
//       <ConnectingLines nodesRefs={nodesRefs} />
//     </>
//   );
// }

// export default function Hero3D() {
//   return (
//     <div className="w-full h-[500px] md:h-[650px] relative cursor-grab active:cursor-grabbing">
//       {/* Background radial gradient representing glow */}
//       <div className="absolute inset-0 bg-radial-gradient from-bronze/5 via-transparent to-transparent pointer-events-none z-0" />
      
//       <Canvas
//         camera={{ position: [0, 0, 5], fov: 60 }}
//         dpr={[1, 2]}
//         gl={{ antialias: true, alpha: true }}
//         className="w-full h-full relative z-10"
//       >
//         <Scene />
//       </Canvas>
//     </div>
//   );
// }
