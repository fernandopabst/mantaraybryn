import "./App.css";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Bryn from "./Bryn.js";
import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import { getProject } from "@theatre/core";
import studio from "@theatre/studio";
import extension from "@theatre/r3f/dist/extension";
import { editable as e, SheetProvider, PerspectiveCamera } from "@theatre/r3f";
import demoProjectState from "./state.json";

const demoSheet = getProject("Demo Project", { state: demoProjectState }).sheet(
  "Demo Sheet"
);

//studio.initialize();
//studio.extend(extension);
//uncomment above to edit

function Play(sheet) {
  sheet.sequence.play({
    iterationCount: Infinity,
    direction: "alternate",
    range: [0, 8],
  });
}

function App() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Canvas shadows>
        <SheetProvider sheet={demoSheet}>
          <PerspectiveCamera
            theatreKey="Camera"
            makeDefault
            far={100000}
            near={-100000}
            position={[-215.68, 276.55, 977.21]}
            rotation={[0.01, -0.01, 0]}
          />
          <Suspense fallback={null}>
            <Bryn
              scale={5}
              position={[0, 0, -5]}
              onClick={() => Play(demoSheet)}
            />
          </Suspense>
          <fog attach="fog" args={["white", 0, 40]} />
          <e.ambientLight intensity={0.1} theatreKey="Ambient light" />
          <e.directionalLight
            theatreKey="Light 2"
            intensity={0.2}
            decay={2}
            position={[348.37, 230.73, -197.53]}
            rotation={[-2.28, 0.85, 0.57]}
          />
          <e.directionalLight
            theatreKey="Light 3"
            intensity={1}
            decay={2}
            position={[-20.88, 371.44, 228.71]}
            rotation={[-1.02, -0.05, 0.03]}
          />
          <OrbitControls />
          <OrthographicCamera makeDefault={false} />
        </SheetProvider>
      </Canvas>
    </div>
  );
}

export default App;
