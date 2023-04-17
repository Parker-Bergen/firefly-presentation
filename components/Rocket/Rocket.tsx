"use client";
import Image from "next/image";
import { useState } from "react";
import {
  Flame,
  ResetButton,
  RocketContainer,
  RocketWrapper,
} from "./RocketStyles";
import { AnimatePresence } from "framer-motion";

const Rocket = () => {
  const [blasted, setBlasted] = useState(false);
  const [height] = useState(600);

  return (
    <RocketContainer width={height / 4}>
      <RocketWrapper
        onClick={() => setBlasted(true)}
        transition={{ duration: 10 }}
        animate={{ y: blasted ? -3000 : 0 }}
        height={height}
      >
        <Image
          src={"/firefly-alpha.png"}
          alt={"Firefly Alpha"}
          width={height / 4}
          height={height}
        />
        <Flame active={blasted} />
      </RocketWrapper>
      <AnimatePresence>
        {blasted && (
          <ResetButton
            onClick={() => setBlasted(false)}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: -100 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
            exit={{ opacity: 0, y: 0 }}
          >
            Reset
          </ResetButton>
        )}
      </AnimatePresence>
    </RocketContainer>
  );
};

export default Rocket;
