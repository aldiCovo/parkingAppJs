import React from "react";
import { Stage, Layer, Rect, Text } from "react-konva";
import useWindowSize from "../hooks/useWindowSize";

const ParkingMap = ({ parkingSlots, onSlotClick }) => {
  const { width } = useWindowSize();
  const mapWidth = Math.min(width * 0.9, 500);
  const mapHeight = mapWidth * 0.6;

  return (
    <Stage width={mapWidth} height={mapHeight}>
      <Layer>
        {parkingSlots.map((slot) => (
          <React.Fragment key={slot.id}>
            <Rect
              x={(slot.x / 500) * mapWidth}
              y={(slot.y / 300) * mapHeight}
              width={50 * (mapWidth / 500)}
              height={50 * (mapHeight / 300)}
              fill={slot.isAvailable ? "green" : "red"}
              onClick={() => onSlotClick(slot)}
              stroke="black"
            />
            <Text
              x={(slot.x / 500) * mapWidth + 5}
              y={(slot.y / 300) * mapHeight + 15}
              text={slot.id}
              fontSize={14 * (mapWidth / 500)}
              fill="white"
            />
          </React.Fragment>
        ))}
      </Layer>
    </Stage>
  );
};

export default ParkingMap;
