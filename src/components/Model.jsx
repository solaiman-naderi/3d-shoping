import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ModelView from "./ModelView";
import { useRef, useState } from "react";
import { yellowImg } from "../utils";
import { models, sizes } from "../constants";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";

const Model = () => {
  const [size, setSize] = useState("small");
  const [model, setModel] = useState({
    title: "iPhone 15 pro Natural  Titanium",
    color: ["#8f8a81", "#ffe7b9", "#6f6c64"],
    image: yellowImg,
  });

  //camera control for model
  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();

  //model
  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  // rotation
  const [smallRotation, setSmallRotation] = useState();
  const [largeRotation, setLargeRotation] = useState();
  useGSAP(() => {
    gsap.to("#heading", {
      opacity: 1,
      y: 0,
      delay: 1,
    });
  }, []);
  return (
    <>
      <div className="common-padding">
        <div className="screen-max-width">
          <h1 id="heading" className="section-heading">
            Take a closer look.
          </h1>
          <div className="flex flex-col items-center mt-5">
            <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
              <ModelView
                index={0}
                groupRef={small}
                groupType={"view1"}
                controlRef={cameraControlSmall}
                setRotationState={setSmallRotation}
                item={model}
                size={size}
              />

              <ModelView
                index={1}
                groupRef={large}
                groupType={"view2"}
                controlRef={cameraControlLarge}
                setRotationState={setLargeRotation}
                item={model}
                size={size}
              />
              <Canvas
                className="w-full h-full "
                style={{
                  position: "fixed",
                  top: 0,
                  bottom: 0,
                  left: 0,
                  overflow: "hidden",
                }}
                eventSource={document.getElementById("root")}
              >
                <View.Port />
              </Canvas>
            </div>
            <div className="mx-auto w-full">
              <p className="text-sm text-center mb-5 font-right">
                {model.title}
              </p>
              <div className="flex-center ">
                <ul className="color-container">
                  {models.map((item, i) => (
                    <li
                      key={i}
                      className="w-6 h-6 rounded-full mx-2 cursor-pointer"
                      style={{ backgroundColor: item.color[0] }}
                      onClick={() => {
                        setModel(item);
                      }}
                    ></li>
                  ))}
                </ul>
                <button className="size-btn-container">
                  {sizes.map(({ label, value }) => (
                    <span
                      className="size-btn transition-all"
                      style={{
                        backgroundColor:
                          size === value ? "#fff" : "transparent",
                        color: size === value ? "#000" : "#fff",
                      }}
                      onClick={() => {
                        setSize(value);
                      }}
                      key={label}
                    >
                      {label}
                    </span>
                  ))}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Model;
