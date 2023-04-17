"use client";
import {
  ReactNode,
  useContext,
  useMemo,
  useRef,
  useEffect,
  useState,
  useCallback,
} from "react";
import { IconGridItem, IconBubbleWrapper, IconGrid, TextBlock } from "./IconLayoutStyles";

type IconElement = {
  icon: ReactNode;
  text: ReactNode;
};

interface IconWebProps {
  icons: IconElement[];
}

const IconLayout = ({ icons }: IconWebProps) => {
  return (
    <IconGrid cols={icons.length}>
      {icons.map((icon, index) => (
        <IconGridItem key={index}>
          <IconBubbleWrapper>{icon.icon}</IconBubbleWrapper>
          <TextBlock>{icon.text}</TextBlock>
        </IconGridItem>
      ))}
    </IconGrid>
  );
};

export default IconLayout;
