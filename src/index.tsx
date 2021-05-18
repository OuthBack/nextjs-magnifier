import React, { useState, MouseEvent } from "react";
import Image from "next/image";
import ImageProps from "./NextImageMagnify";
import Container, { Lens, ImageZoom } from "./styles";

export default function NextImageMagnify({
  src,
  width,
  height,
  lensWidth,
  lensHeight,
}: ImageProps) {
  const [position, setPosition] = useState(`-${width}px ${lensHeight}px`);
  const [showLens, setShowLens] = useState(false);
  const ratio = 3;
  const [zoomPosition, setZoomPosition] = useState({
    positionLeft: 0,
    positionTop: 0,
  });

  const getCursor = (event: MouseEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = event.pageX - bounds.left;
    const y = event.pageY - bounds.top;

    console.log("x: ", x);
    console.log("y: ", y);
    return { x, y };
  };

  const MoveLens = (event: MouseEvent<HTMLDivElement>) => {
    if (!showLens) setShowLens(true);
    const cursor = getCursor(event);
    const maxWidth = width - lensWidth;
    const maxHeight = height - lensWidth;
    let positionLeft = cursor.x - lensWidth / 2;
    if (positionLeft >= maxWidth) {
      positionLeft = maxWidth;
    } else if (positionLeft <= 0) {
      positionLeft = 0;
    }

    let positionTop = cursor.y - lensHeight / 2;
    if (positionTop >= maxHeight) {
      positionTop = maxHeight;
    } else if (positionTop <= 0) {
      positionTop = 0;
    }

    setZoomPosition({ positionLeft, positionTop });
    setPosition(`-${positionLeft}px -${positionTop}px`);
  };

  return (
    <Container style={{ position: "relative" }}>
      <div
        className="main-image"
        onMouseMove={MoveLens}
        onMouseEnter={MoveLens}
        onMouseLeave={() => setShowLens(false)}
      >
        <Image src={src} width={width} height={height} />
        {showLens && (
          <ImageZoom
            style={{
              top: `${zoomPosition.positionTop}px`,
              left: `${zoomPosition.positionLeft}px`,
            }}
            className={"image-zoom"}
            width={lensWidth}
            height={lensHeight}
          />
        )}
      </div>
      <Lens
        showLens={showLens}
        width={width}
        height={height}
        lensWidth={lensWidth}
        lensHeight={lensHeight}
        ratio={ratio}
      >
        <Image
          src={src}
          width={width}
          height={height}
          objectPosition={position}
        />
      </Lens>
    </Container>
  );
}
