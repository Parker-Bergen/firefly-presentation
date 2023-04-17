import {
  ReactNode,
  useContext,
  useMemo,
  useRef,
  useEffect,
  useState,
  useCallback,
} from "react";
import {
  Bubble,
  BubbleText,
  IconBubbleWrapper,
  IconContainer,
} from "./IconWebStyles";
import { PageSectionContext } from "../PageSection/PageSection";

type IconElement = {
  icon: ReactNode;
  text: ReactNode;
};

interface IconWebProps {
  icons: IconElement[];
  children: ReactNode;
  angle?: number;
}

const IconWeb = ({ icons, children, angle = 180 }: IconWebProps) => {
  const [ref, setRef] = useState<HTMLDivElement>();

  const {clientHeight, clientWidth} = useContext(PageSectionContext);

  // On first page load the center is not properly calculated.
  const center = useMemo(() => {
    if (ref && clientHeight && clientWidth) {
      console.log(ref.getBoundingClientRect());
      const bound = ref.getBoundingClientRect();
      console.log(bound.y, bound.height / 2);
      return {
        x: bound.x + bound.width / 2,
        y: bound.bottom + bound.height / 2, // This should be negative but the first page load F's it
        radius: bound.height,
      };
    }
    return { x: 0, y: 0, radius: 0 };
  }, [clientHeight, clientWidth, ref]);

  const rot = useMemo(() => {
    return angle / (icons.length - 1);
  }, [angle, icons]);

  const onRefChange = useCallback((node: HTMLDivElement) => {
    setRef(node);
  }, []);

  return (
    <IconContainer center={angle > 180}>
      {icons.map((icon, index) => {
        const point = getPointOnCircle(
          center.x,
          center.y,
          center.radius + 50,
          rot * index
        );
        return (
          <IconBubble key={index} top={point.y} left={point.x} icon={icon} />
        );
      })}
      <Bubble ref={onRefChange}>{children}</Bubble>
    </IconContainer>
  );
};

interface IconBubbleProps {
  top: number;
  left: number;
  icon: IconElement;
}

const IconBubble = ({ top, left, icon }: IconBubbleProps) => {
  const [hover, setHover] = useState(false);

  return (
    <IconBubbleWrapper
      top={top}
      left={left}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      {icon.icon}
      {hover && <BubbleText>{icon.text}</BubbleText>}
    </IconBubbleWrapper>
  );
};

const getPointOnCircle = (
  centerX: number,
  centerY: number,
  radius: number,
  angle: number
) => {
  const newAngle = (angle * Math.PI) / 180;
  const x = centerX + radius * Math.cos(newAngle);
  const y = centerY - radius * Math.sin(newAngle);

  return { x, y };
};

export default IconWeb;
