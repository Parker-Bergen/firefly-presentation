"use client";

import { Inter } from "next/font/google";
import PageSection from "../components/PageSection/PageSection";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <main>
      <PageSection>
        Parker Bergen
      </PageSection>
      <PageSection>
        Section 2
      </PageSection>
      <PageSection>
        Section 3
      </PageSection>
    </main>
  );
}
