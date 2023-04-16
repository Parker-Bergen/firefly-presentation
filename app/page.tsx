"use client";
import PageSection from "../components/PageSection/PageSection";
import TitlePage from "../components/TitlePage/TitlePage";


export default function Home() {

  return (
    <main>
      <PageSection>
        <TitlePage primary={"Parker Bergen"} secondary={"Firefly Full Stack Developer Panel Interview"} logo={"/firefly-logo-small.svg"}/>
      </PageSection>
      <PageSection>
        Who Am I?
      </PageSection>
      <PageSection>
        Project 1 - Work
      </PageSection>
      <PageSection>
        Project 2 - This Webpage
      </PageSection>
      <PageSection>
        Why am I interested in Firefly?
      </PageSection>
      <PageSection>
        Thanks
        Thank you for the time to listen to me talk about myself. 
        Any questions?
      </PageSection>
    </main>
  );
}
