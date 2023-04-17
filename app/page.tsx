/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import IconWeb from "../components/IconWeb/IconWeb";
import PageSection from "../components/PageSection/PageSection";
import TitlePage from "../components/TitlePage/TitlePage";
import { RiComputerFill, RiGamepadFill } from "react-icons/ri";
import { GiElectric } from "react-icons/gi";
import { AiFillRobot } from "react-icons/ai";
import { MdWork } from "react-icons/md";

export default function Home() {
  return (
    <main>
      <PageSection>
        <TitlePage
          primary={"Parker Bergen"}
          secondary={"Firefly Full Stack Developer Panel Interview"}
          logo={"/firefly-logo-small.svg"}
        />
      </PageSection>
      <PageSection>
        <IconWeb
          icons={[
            {
              icon: <RiComputerFill key={"Programmer"} />,
              text: (
                <>
                  <div>My true passion is programming.</div>
                  <div>I enjoy learning new languages
                  and concepts by</div>
                  <div>doing little projects and bringing as many
                  concepts as I can to work</div>
                </>
              ),
            },
            {
              icon: <GiElectric key={"Electrical"} />,
              text: (
                <>
                  <div>I always wonder how things work when I see them,</div>
                  <div>both mechanically and electrically</div>
                </>
              ),
            },
            {
              icon: <RiGamepadFill key={"Gamer"} />,
              text: <div>I play FPS, Sandbox, RPG and Puzzle Games</div>,
            },
            {
              icon: <AiFillRobot key={"Robot"} />,
              text: (
                <div>
                  I have a hobby to design and build IOT and robotic systems
                </div>
              ),
            },
            {
              icon: <MdWork key={"Work Experience"} />,
              text: (
                <>
                  <div>NXP Semiconductor - Intern</div>
                  <div>
                    National Driver Training - Mobile & Full Stack Devleoper
                  </div>
                  <div>Driver's Alert - Full Stack Developer</div>
                </>
              ),
            },
          ]}
        >
          <Image src="/Me.jpg" alt="Parker Bergen" width="300" height="300" />
        </IconWeb>
      </PageSection>
      <PageSection>Project 1 - Work</PageSection>
      <PageSection>Project 2 - This Webpage</PageSection>
      <PageSection>Why am I interested in Firefly?</PageSection>
      <PageSection>
        Thanks Thank you for the time to listen to me talk about myself. Any
        questions?
      </PageSection>
    </main>
  );
}
