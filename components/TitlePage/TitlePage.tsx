"use client";
import { ReactNode, useMemo } from "react";
import {
  Logo,
  Primary,
  PrimaryText,
  Secondary,
  Separator,
  TitlePageContainer,
} from "./TitlePageStyles";
import { motion } from "framer-motion";

interface TitlePageProps {
  primary: ReactNode;
  secondary: ReactNode;
  logo: string;
}

const TitlePage = ({ primary, secondary, logo }: TitlePageProps) => {
  return (
    <TitlePageContainer>
      <SlideOutAnimation direction="left">
        <Primary>
          {logo && (
            <Logo src={logo} alt="Firefly Logo" width={50} height={50} />
          )}
          <PrimaryText>{primary}</PrimaryText>
        </Primary>
      </SlideOutAnimation>
      <Separator />
      <SlideOutAnimation direction="right">
        <Secondary>{secondary}</Secondary>
      </SlideOutAnimation>
    </TitlePageContainer>
  );
};

interface SlideOutAnimationProps {
  children: ReactNode;
  direction: string;
}

const SlideOutAnimation = ({ children, direction }: SlideOutAnimationProps) => {
  const directionToValue = useMemo(() => {
    if (direction === "right") {
      return -100;
    }
    return 100;
  }, [direction]);

  return (
    <motion.div
      initial={{ opacity: 0, x: directionToValue }}
      transition={{duration: 0.5}}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default TitlePage;
