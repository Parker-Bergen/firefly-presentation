import "./globals.css";
import StyledComponentsRegistry from "../lib/registry";
import { PageSectionProvider } from "../components/PageSection/PageSection";
import { Roboto_Mono } from "next/font/google";

export const metadata = {
  title: "Parker Firefly",
  description: "Parker Firefly Panel Interview Presentation",
};

const roboto = Roboto_Mono({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StyledComponentsRegistry>
      <html lang="en" className={roboto.className}>
        <head/>
        <body>
          <PageSectionProvider>{children} </PageSectionProvider>
        </body>
      </html>
    </StyledComponentsRegistry>
  );
}
