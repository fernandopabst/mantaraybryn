import React, { useRef, useLayoutEffect } from "react";
import {
  useGLTF,
  Center,
  MeshTransmissionMaterial,
  useVideoTexture,
} from "@react-three/drei";
import { editable as e } from "@theatre/r3f";
import { types } from "@theatre/core";

export default function Bryn(props) {
  const texture = useVideoTexture("/vid.mp4");
  const { nodes, materials } = useGLTF("/bryn-v2-transformed.glb");
  const main = useRef();

  const matRef = useRef(null);
  const objRef = useRef(null);

  useLayoutEffect(() => {
    matRef.current.material.thickness = objRef.current.value.thickness;

    return objRef.current?.onValuesChange(({ thickness }) => {
      matRef.current.material.thickness = thickness;
    });
  }, []);

  return (
    <>
      <color attach="background" args={["#999"]} />
      <Center>
        <group {...props} dispose={null}>
          <group scale={0.002}>
            <e.group
              theatreKey="Text_1"
              position={[-175.17, 274.22, -122.84]}
              scale={[0.72, 0.87, 0.79]}
            >
              <mesh
                geometry={nodes.Text_2.geometry}
                material={nodes.Text_2.material}
                position={[305, 0.67, 0]}
              />
              <mesh
                geometry={nodes.Text_2_1.geometry}
                material={nodes.Text_2_1.material}
                position={[252.9, 0.67, 0]}
              />
              <mesh
                geometry={nodes.Text_2_2.geometry}
                material={nodes.Text_2_2.material}
                position={[200.4, 0.67, 0]}
              />
              <mesh
                geometry={nodes.Text_2_3.geometry}
                material={nodes.Text_2_3.material}
                position={[141.4, 0.67, 0]}
              />
              <mesh
                geometry={nodes.Text_2_4.geometry}
                material={nodes.Text_2_4.material}
                position={[84.6, 0.67, 0]}
              />
              <mesh
                geometry={nodes.Text_2_5.geometry}
                material={nodes.Text_2_5.material}
                position={[36.75, 0.67, 0]}
              />
              <mesh
                geometry={nodes.Text_2_6.geometry}
                material={nodes.Text_2_6.material}
                position={[-18.1, 0.67, 0]}
              />
              <mesh
                geometry={nodes.Text_2_7.geometry}
                material={nodes.Text_2_7.material}
                position={[-79.45, 0.67, 0]}
              />
              <mesh
                geometry={nodes.Text_2_8.geometry}
                material={nodes.Text_2_8.material}
                position={[-124.15, 0.67, 0]}
              />
              <mesh
                geometry={nodes.Text_2_9.geometry}
                material={nodes.Text_2_9.material}
                position={[-173.8, 0.67, 0]}
              />
              <mesh
                geometry={nodes.Text_2_10.geometry}
                material={nodes.Text_2_10.material}
                position={[-228.35, 0.67, 0]}
              />
              <mesh
                geometry={nodes.Text_2_11.geometry}
                material={nodes.Text_2_11.material}
                position={[-290, 0.67, 0]}
              />
            </e.group>
            <e.group
              theatreKey="Video"
              position={[-200, 300, -200]}
              scale={[150, 150, 1]}
            >
              <mesh rotation={[0, 0, 0]} position={[0, 0, 1.1]}>
                <planeGeometry args={[3.2, 1.9]} />
                <meshStandardMaterial map={texture} toneMapped={false} />
              </mesh>
            </e.group>
            <group position={[-152.02, 275.7, -133.21]} scale={5.09}>
              <group ref={main}>
                <e.mesh
                  objRef={objRef}
                  ref={matRef}
                  additionalProps={{
                    thickness: types.number(500, {
                      label: "thickness",
                      nudgeMultiplier: 5,
                      range: [0, 2000],
                    }),
                  }}
                  theatreKey="transmission"
                  geometry={nodes.disk.geometry}
                  //material={nodes.disk.material}
                  position={[-1.04, -1.31, 8.2]}
                >
                  <MeshTransmissionMaterial
                    clearcoat={0.5}
                    samples={5}
                    thickness={500}
                    chromaticAberration={0.85}
                    anisotropy={0.9}
                  />
                </e.mesh>
              </group>
              <e.group theatreKey="Boyo">
                <mesh
                  geometry={nodes.boyo.geometry}
                  material={nodes.boyo.material}
                  position={[0, 0, 11.6]}
                />
                <mesh
                  geometry={nodes.band.geometry}
                  material={nodes.band.material}
                  position={[-7.73, 28.09, 22.77]}
                  rotation={[-1.4, -0.67, 0.07]}
                  scale={0.27}
                />
              </e.group>
            </group>
          </group>
        </group>
      </Center>
    </>
  );
}

useGLTF.preload("/bryn-v2-transformed.glb");
