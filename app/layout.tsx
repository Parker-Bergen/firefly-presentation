import PageTracker from "../components/PageTracker/PageTracker";
import "./globals.css";
import StyledComponentsRegistry from "../lib/registry";
import { PageSectionProvider } from "../components/PageSection/PageSection";

export const metadata = {
  title: "Parker Firefly",
  description: "Parker Firefly Panel Interview Presentation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StyledComponentsRegistry>
      <PageTracker>
        <PageSectionProvider>
          <html lang="en">
            <body>{children}</body>
          </html>
        </PageSectionProvider>
      </PageTracker>
    </StyledComponentsRegistry>
  );
}
