"use client";
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { PageSectionWrapper } from "./PageSectionStyles";

interface PageSectionProps {
  children: ReactNode;
}

const PageSection = ({ children }: PageSectionProps) => {
  const { clientHeight } = useContext(PageSectionContext);
  return (
    <PageSectionWrapper height={`${clientHeight}px`}>
      {children}
    </PageSectionWrapper>
  );
};

interface PageSectionProviderProps {
  children: ReactNode;
}

const PageSectionProvider = ({ children }: PageSectionProviderProps) => {
  const [clientHeight, setClientHeight] = useState<number | null>(null);
  const [section, setCurrentSection] = useState(0);

  const setSection = useCallback((increment: number) => {
    const sections = document.getElementsByTagName("section");
    setCurrentSection((state) => {
      return Math.max(Math.min(sections.length - 1, state + increment), 0);
    });
  }, []);

  const scrollToCurrentSection = useCallback(
    (smooth = true) => {
      const sections = document.getElementsByTagName("section");
      sections[section].scrollIntoView({ behavior: smooth ? "smooth" : undefined });
    },
    [section]
  );

  const resize = useCallback(
    (e: any) => {
      setClientHeight(e.target.innerHeight);
      scrollToCurrentSection(false);
    },
    [scrollToCurrentSection]
  );

  useEffect(() => {
    scrollToCurrentSection();
  }, [scrollToCurrentSection]);

  const keyDown = useCallback(
    (e: any) => {
      e.preventDefault();
      switch (e.key) {
        case "ArrowUp":
          setSection(-1);
          break; 
        case "ArrowDown":
          setSection(1);
          break; 
        default:
          break;
      }
    },
    [setSection]
  );

  const scrollWheel = useCallback(
    (e: any) => {
      e.preventDefault();
      if (e.deltaY < 0) {
        setSection(-1);
      } else {
        setSection(1);
      }
    },
    [setSection]
  );

  useEffect(() => {
    setClientHeight(window.innerHeight);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [resize]);

  useEffect(() => {
    window.addEventListener("keydown", keyDown);
    return () => {
      window.removeEventListener("keydown", keyDown);
    };
  }, [keyDown]);

  useEffect(() => {
    window.addEventListener("wheel", scrollWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", scrollWheel);
    };
  }, [scrollWheel]);

  return (
    <PageSectionContext.Provider value={{ clientHeight: clientHeight }}>
      {children}
    </PageSectionContext.Provider>
  );
};

type PageSectionContextProps = {
  clientHeight: null | number;
};

const PageSectionContext = createContext<PageSectionContextProps>({
  clientHeight: null,
});

export { PageSectionContext, PageSectionProvider };
export default PageSection;
