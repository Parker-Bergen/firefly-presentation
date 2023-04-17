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
import { Bubble, PageTitle } from "../styles/styles";
import { ExpandableImage } from "../components/ExpandableImage/ExpandableImage";
import MediaCollage from "../components/MediaCollage/MediaCollage";
import IconLayout from "../components/IconLayout/IconLayout";

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
        <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
          <Bubble>
            <Image src="/Me.jpg" alt="Parker Bergen" width="300" height="300" />
          </Bubble>
        </div>
        <IconLayout
          icons={[
            {
              icon: <RiComputerFill key={"Programmer"} />,
              text: (
                <div>
                  My true passion is programming. I enjoy learning new languages
                  and concepts by doing little projects and bringing as many
                  concepts as I can to work
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
        />
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
                name: "LMSC Diagram",
                path: "/ndt-project/analytics.png",
              },
              rowSpan: 1,
              colSpan: 2,
            },
            {
              media: {
                name: "LMSC Admin Panel",
                path: "/ndt-project/ticket-system.png",
              },
              rowSpan: 1,
              colSpan: 2,
            },
            {
              media: {
                name: "LMSC Color Picker",
                path: "/ndt-project/user-search.png",
              },
              rowSpan: 1,
              colSpan: 2,
            },
            {
              media: {
                name: "LMSC Work Analytics",
                path: "/ndt-project/course.png",
              },
              rowSpan: 1,
              colSpan: 2,
            }
          ]}
        />
      </PageSection>
      <PageSection>
        <PageTitle>NXP Semiconductor</PageTitle>
        <MediaCollage
          rows={2}
          cols={6}
          mediaLayout={[
            {
              media: {
                name: "LMSC Diagram",
                path: "/ndt-project/analytics.png",
              },
              rowSpan: 1,
              colSpan: 2,
            },
            {
              media: {
                name: "LMSC Admin Panel",
                path: "/ndt-project/ticket-system.png",
              },
              rowSpan: 1,
              colSpan: 2,
            },
            {
              media: {
                name: "LMSC Color Picker",
                path: "/ndt-project/user-search.png",
              },
              rowSpan: 1,
              colSpan: 2,
            },
            {
              media: {
                name: "LMSC Work Analytics",
                path: "/ndt-project/course.png",
              },
              rowSpan: 1,
              colSpan: 2,
            }
          ]}
        />
      </PageSection>
      <PageSection>
        <PageTitle>Other Projects I Have Done</PageTitle>
      </PageSection>
      <PageSection>
        <PageTitle>Why am I interested in Firefly?</PageTitle>
      </PageSection>
      <PageSection>
        <PageTitle>Why am I interested in Firefly?</PageTitle>
        Thanks Thank you for the time to listen to me talk about myself. Any
        questions?
      </PageSection>
    </main>
  );
}
