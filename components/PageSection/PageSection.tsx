"use client";
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
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

const PageSectionProvider = ({ children }: PageSectionProps) => {
  const [clientHeight, setClientHeight] = useState<number | null>(null);

  const resize = useCallback((e: any) => {
    //console.log(e.target.innerHeight);
    setClientHeight(e.target.innerHeight);
  }, []);

  useEffect(() => {
    setClientHeight(window.innerHeight);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", (e) => resize(e));
    return window.removeEventListener("resize", (e) => resize(e));
  }, [resize]);

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
