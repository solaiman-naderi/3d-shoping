import { PerspectiveCamera, View } from "@react-three/drei";
import React from "react";

function ModelView({
  index,
  groupRef,
  groupType,
  controlRef,
  setRotationSize,
  size,
  item,
}) {
  return (
    <View
      index={index}
      id={groupType}
      className={`border-2 w-full h-full border-red-400 ${
        index === 2 ? "right-[100%]" : ""
      }`}
    >
      <ambientLight intensity={0.3} />
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />
    </View>
  );
}

export default ModelView;
