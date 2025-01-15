"use client";
import { RootState } from "@/store/store";
import { translate } from "@/utils/translation";
import { Col, Row } from "antd";
import { useSelector } from "react-redux";
import "../../styles/buttonShapes.scss";
import "../../styles/frontendReact.scss";
import { useState } from "react";

export default function FrontendReact() {
  const locale = useSelector((state: RootState) => state.language.locale);
  const [shapes, setShapes] = useState([
    "oval",
    "circle",
    "trapezoid",
    "rectangle",
    "parallelogram",
    "square",
  ]);
  const [isTopRowLeft, setIsTopRowLeft] = useState(false);

  // Rotate the shape array to the left
  const rotateShapeLeft = () => {
    const rotatedShapes = [...shapes];
    rotatedShapes.push(rotatedShapes.shift()!); // Move first shape to the end
    console.log("rotatedShapes", rotatedShapes);
    setShapes(rotatedShapes);
  };

  // Rotate the shape array to the right
  const rotateShapeRight = () => {
    const rotatedShapes = [...shapes];
    rotatedShapes.unshift(rotatedShapes.pop()!); // Move last shape to the beginning
    console.log("rotatedShapes", rotatedShapes);
    setShapes(rotatedShapes);
  };

  // Swap the row alignment
  const movePosition = () => {
    console.log("move");
    setIsTopRowLeft(!isTopRowLeft);
  };

  // Randomize the shapes array
  const randomizePositions = () => {
    const randomizedShapes = [...shapes];
    for (let i = randomizedShapes.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [randomizedShapes[i], randomizedShapes[j]] = [
        randomizedShapes[j],
        randomizedShapes[i],
      ];
    }
    setShapes(randomizedShapes);
  };
  const topRowShapes = shapes.slice(0, 3);
  const bottomRowShapes = shapes.slice(3);
  return (
    <div>
      <h1 className="titleText">{translate("descriptionTest1", locale)}</h1>
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            display: "inline-block", // Shrink to fit children
            borderBottom: "1px solid #827f7a", // Bottom border
            marginBottom: "20px",
          }}
        >
          <Row justify="center" gutter={[20, 20]}>
            {/* Left Card */}
            <Col>
              <div
                // key={index}
                className="card-block"
                onClick={rotateShapeLeft}
              >
                <div className="triangle-left" />
                <div className="text-card-block">
                  {translate("Move shape", locale)}
                </div>
              </div>
            </Col>

            {/* Middle Long Card */}
            <Col>
              <div
                // key={index}
                className="long-card-block"
                onClick={movePosition}
              >
                <div className="triangle-top" />
                <div className="triangle-bottom" />
                <div className="text-card-block">
                  {translate("Move position", locale)}
                </div>
              </div>
            </Col>

            {/* Right Card */}
            <Col>
              <div
                // key={index}
                className="card-block"
                onClick={rotateShapeRight}
              >
                <div className="triangle-right" />
                <div className="text-card-block">
                  {translate("Move shape", locale)}
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      {/* <Row justify="center" gutter={[20, 20]}>
        {shapes.map((shape, index) => (
          <Col span={8} key={index} onClick={randomizePositions}> 
            <div className="card-block">
              <div className={shape} />
            </div>
          </Col>
        ))}
      </Row> */}
      {/* Top Row */}
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: isTopRowLeft ? "start" : "end",
          paddingInline: "20vw",
        }}
      >
        <Row justify={"center"} gutter={[20, 10]}>
          {topRowShapes.map((shape, index) => (
            <Col span={8} key={index} onClick={randomizePositions}>
              {/* 3 shapes per row */}
              <div className="card-block">
                <div className={shape} />
              </div>
            </Col>
          ))}
        </Row>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: isTopRowLeft ? "end" : "start",
          paddingInline: "20vw",
        }}
      >
        {/* Bottom Row */}
        <Row justify={isTopRowLeft ? "end" : "start"} gutter={[20, 20]}>
          {bottomRowShapes.map((shape, index) => (
            <Col span={8} key={index} onClick={randomizePositions}>
              {/* 3 shapes per row */}
              <div className="card-block">
                <div className={shape} />
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

// <div>
//   <h1 className="titleText">{translate("descriptionTest1", locale)}</h1>
//   <div style={{ display: "flex", width: "100%", justifyContent:"center" }}>
//     <div
//       style={{
//         display: "inline-flex", // Adjust to fit the width of children
//         justifyContent: "center",
//         gap: "20px",
//         borderBottom: "1px solid #827f7a", // Bottom border only
//         width: "fit-content",
//       }}
//     >
//       <div
//         // key={index}
//         className="card-block"
//         onClick={() => {}}
//       >
//         <div className="triangle-left" />
//         <div className="text-card-block">
//           {translate("Move shape", locale)}
//         </div>
//       </div>
// <div
//   // key={index}
//   className="long-card-block"
//   onClick={() => {}}
// >
//   <div className="triangle-top" />
//   <div className="triangle-bottom" />
//   <div className="text-card-block">
//     {translate("Move position", locale)}
//   </div>
// </div>
// <div
//   // key={index}
//   className="card-block"
//   onClick={() => {}}
// >
//   <div className="triangle-right" />
//   <div className="text-card-block">
//     {translate("Move shape", locale)}
//   </div>
// </div>
//     </div>
//   </div>
//   <div className="triangle-left" />
//   {/* <Button onClick={rotateShape}>{t("moveShape")}</Button>
//   <Button onClick={movePosition}>{t("movePosition")}</Button> */}
// </div>
