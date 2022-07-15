import React from "react";
import { Planet } from "./Planet";
import * as THREE from "three";

export const SolarSystem = (props) => {
  const solarSystem = props.solarSystem || [];
  let orbitRings = [];
  if (solarSystem.length > 0) orbitRings = solarSystem[0].orbitPlanet;
  const handleSetState = { handleSetState: props.handleSetState };

  return (
    <>
      {orbitRings && orbitRings.length > 0
        ? orbitRings.map((orbit, idx) => {
            return (
              <mesh key={idx} rotation={[Math.PI / 2, 0, 0]}>
                <ringBufferGeometry
                  args={[
                    orbit.position[0] - 0.25,
                    orbit.position[0] + 0.25,
                    512,
                    1,
                    0,
                  ]}
                />
                <meshBasicMaterial side={THREE.DoubleSide} />
              </mesh>
            );
          })
        : ""}
      {solarSystem.map((planet, idx) => {
        let updatedPlanet = { ...planet, ...handleSetState };
        return (
          <mesh key={idx}>
            <Planet {...updatedPlanet} />
          </mesh>
        );
      })}
    </>
  );
};
