import { useState } from "react";
import { Excalidraw } from "@excalidraw/excalidraw";
import Whiteboard from "./components/Whiteboard";

function App() {
  return (
    <div style={{ height: "100vh" }}>
      <Whiteboard />
    </div>
  );
}

export default App;
