/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import PageSection, {
  PageSectionContext,
} from "../components/PageSection/PageSection";
import TitlePage from "../components/TitlePage/TitlePage";
import { RiComputerFill, RiGamepadFill } from "react-icons/ri";
import { GiElectric } from "react-icons/gi";
import { AiFillRobot } from "react-icons/ai";
import { MdWork } from "react-icons/md";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { IoMdSchool } from "react-icons/io";
import { Bubble, PageDescription, PageTitle } from "../styles/styles";
import MediaCollage from "../components/MediaCollage/MediaCollage";
import IconLayout from "../components/IconLayout/IconLayout";
import LinkIcon from "../components/LinkIcon/LinkIcon";
import { ReactNode, useContext, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
        <PageTitle>About Me</PageTitle>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Bubble>
            <Image src="/Me.jpg" alt="Parker Bergen" width="300" height="300" />
          </Bubble>
        </div>
        <PopInAnimation section={1}>
          <IconLayout
            icons={[
              {
                icon: <RiComputerFill key={"Programmer"} />,
                text: (
                  <div>
                    My true passion is programming! I have programmed since I
                    was 8, starting with summer courses. I enjoy learning new
                    languages and concepts by doing little projects and bringing
                    as many concepts as I can to work
                  </div>
                ),
              },
              {
                icon: <GiElectric key={"Electrical"} />,
                text: (
                  <div>
                    I always wonder how things work when I see them, both
                    mechanically and electrically
                  </div>
                ),
              },
              {
                icon: <RiGamepadFill key={"Gamer"} />,
                text: (
                  <div>I play FPS, Sandbox, RPG, Racing and Puzzle Games</div>
                ),
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
              {
                icon: <IoMdSchool key={"Education"} />,
                text: (
                  <>
                    <div>Attended RIT for 1.5 years</div>
                    <div>
                      Working on completing a computer science degree in the
                      background
                    </div>
                  </>
                ),
              },
            ]}
          />
        </PopInAnimation>
      </PageSection>
      <PageSection>
        <PageTitle>Current Work</PageTitle>
        <MediaCollage
          rows={2}
          cols={8}
          mediaLayout={[
            {
              media: {
                name: "LMSC Diagram",
                path: "/lmsc-project/work-servers-diagram.svg",
              },
              rowSpan: 1,
              colSpan: 2,
            },
            {
              media: {
                name: "LMSC Admin Panel",
                path: "/lmsc-project/work-admin-panel.PNG",
              },
              rowSpan: 1,
              colSpan: 3,
            },
            {
              media: {
                name: "LMSC Color Picker",
                path: "/lmsc-project/work-color-picker.PNG",
              },
              rowSpan: 1,
              colSpan: 3,
            },
            {
              media: {
                name: "LMSC Work Analytics",
                path: "/lmsc-project/work-data.PNG",
              },
              rowSpan: 1,
              colSpan: 3,
            },
            {
              media: {
                name: "LMSC Course Library",
                path: "/lmsc-project/work-course-library.PNG",
              },
              rowSpan: 1,
              colSpan: 3,
            },
            {
              media: {
                name: "LMSC Course",
                path: "/lmsc-project/work-course.PNG",
              },
              rowSpan: 1,
              colSpan: 2,
            },
          ]}
        />
      </PageSection>
      <PageSection>
        <PageTitle>National Driver Training</PageTitle>
        <MediaCollage
          rows={2}
          cols={6}
          mediaLayout={[
            {
              media: {
                name: "NDT Analytics",
                path: "/ndt-project/web/analytics.png",
              },
              rowSpan: 1,
              colSpan: 2,
            },
            {
              media: {
                name: "NDT Ticket System",
                path: "/ndt-project/web/ticket-system.png",
              },
              rowSpan: 1,
              colSpan: 2,
            },
            {
              media: {
                name: "NDT User Search",
                path: "/ndt-project/web/user-search.png",
              },
              rowSpan: 1,
              colSpan: 2,
            },
            {
              media: {
                name: "NDT User Course",
                path: "/ndt-project/web/course.png",
              },
              rowSpan: 1,
              colSpan: 2,
            },
            {
              media: {
                name: "NDT App",
                path: "/ndt-project/app/app-store.PNG",
              },
              rowSpan: 1,
              colSpan: 1,
            },
          ]}
        />
        <PopInAnimation section={3}>
          <PageDescription>
            <ul>
              <li>
                Migrated from dedicated server to cloud hosted server cluster
              </li>
              <li>Replicated then improved app from native to flutter</li>
            </ul>
          </PageDescription>
        </PopInAnimation>
      </PageSection>
      <PageSection>
        <PageTitle>NXP Semiconductor</PageTitle>
        <div style={{ width: "50%" }}>
          <MediaCollage
            rows={1}
            cols={6}
            mediaLayout={[
              {
                media: {
                  name: "NXP Engine",
                  path: "/nxp-project/engine-motor.jpeg",
                },
                rowSpan: 1,
                colSpan: 3,
              },
              {
                media: {
                  name: "NXP Presentation",
                  path: "/nxp-project/presentation.jpeg",
                },
                rowSpan: 1,
                colSpan: 3,
              },
            ]}
          />
        </div>
        <PopInAnimation section={4}>
          <PageDescription>
            <ul>
              <li>Predictive engine maintanence</li>
              <li>Ran android on a NXP I.MX8 microcontroller</li>
              <li>Communicated with a sensor array using BLE</li>
              <li>Programmed a dashboard that showed warnings</li>
              <li>
                Used machine learning trained on negative sounds to determine
                issues
              </li>
              <li>Used a camera to detect fire</li>
              <li>
                Was a proof of concept to hopefully implement into trucks and
                boats
              </li>
            </ul>
          </PageDescription>
        </PopInAnimation>
      </PageSection>
      <PageSection>
        <PageTitle>Other Projects I Have Done</PageTitle>
        <div style={{ width: "75%" }}>
          <MediaCollage
            rows={1}
            cols={9}
            mediaLayout={[
              {
                media: {
                  name: "Drone Website",
                  path: "/other-projects/drone-site.PNG",
                  link: "https://dronedev.parkerbergen.dev",
                },
                rowSpan: 1,
                colSpan: 3,
              },
              {
                media: {
                  name: "Esp8266 Websocket Camera",
                  path: "/other-projects/vision-cam.PNG",
                  link: "https://vision.parkerbergen.dev",
                },
                rowSpan: 1,
                colSpan: 3,
              },
              {
                media: {
                  name: "Infinia Studios",
                  path: "/other-projects/infinia-studios.PNG",
                  link: "http://www.infiniastudios.com",
                },
                rowSpan: 1,
                colSpan: 3,
              },
            ]}
          />
        </div>
        <PopInAnimation section={5}>
          <PageDescription>
            <ul>
              <li>Confidential Robotics Product (WICET) - Patent In Process</li>
              <li>ESP8266 Smart Light Switch</li>
              <li>Infinia Studios Website</li>
              <li>Atlas MC Website</li>
              <li>SACOT Website</li>
              <li>CROMA Website</li>
            </ul>
          </PageDescription>
        </PopInAnimation>
      </PageSection>
      <PageSection>
        <PageTitle>Why am I interested in Firefly?</PageTitle>
        <PopInAnimation section={6}>
          <PageDescription>
            <ul>
              <li>
                I have always been interested in space companies and what they
                develop
              </li>
              <li>
                The usage of carbon composite tank is impressive due to the
                sealing and molding problems that need to be overcome
              </li>
              <li>
                I always strive for perfection and there is nothing that need to
                be more perfect than conditions for launch
              </li>
              <li>I thrive in a fast pace innovated enviroment</li>
              <li>I want to work for a company that creates cutting edge technology</li>
              <li>There is so much room for my own growth and development in the company</li>
            </ul>
          </PageDescription>
        </PopInAnimation>
      </PageSection>
      <PageSection>
        <PageTitle>
          Thank you for the taking the time to listen to me talk about myself.
        </PageTitle>
        <PageTitle>
          Any questions? I love to talk more about the projects I have done!
        </PageTitle>
        <PageDescription>
          <LinkIcon href={"https://github.com/Parker-Bergen"}>
            <BsGithub />
          </LinkIcon>
          <LinkIcon href={"https://www.linkedin.com/in/parker-bergen/"}>
            <BsLinkedin />
          </LinkIcon>
        </PageDescription>
      </PageSection>
    </main>
  );
}

interface PopInAnimationProps {
  children: ReactNode;
  section: number;
}

const PopInAnimation = ({ children, section }: PopInAnimationProps) => {
  const { section: currentSection } = useContext(PageSectionContext);

  const isCurrentSection = useMemo(() => {
    return section === currentSection;
  }, [currentSection, section]);

  return (
    <AnimatePresence>
      {isCurrentSection && (
        <motion.div
          initial={{ opacity: 0, y: -500 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
          exit={{ opacity: 0, y: -500 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
