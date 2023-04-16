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

  const keyDown = useCallback((e: any) => {
    e.preventDefault();
    const scrollVal = clientHeight?? 0;
    //console.log(scrollVal);
    switch(e.key){
        case "ArrowUp": scrollBy({top: -scrollVal, behavior: "smooth"}); break;
        case "ArrowDown": scrollBy({top: scrollVal, behavior: "smooth"}); break;
        default: break;
    }
  }, [clientHeight]);

  const scrollWheel = useCallback((e: any) => {
    e.preventDefault();
    const scrollVal = clientHeight?? 0;
    console.log(e);
    if(e.deltaY < 0){
        scrollBy({top: -scrollVal, behavior: "smooth"});
    } else {
        scrollBy({top: scrollVal, behavior: "smooth"});
    }
  }, [clientHeight]);

  useEffect(() => {
    setClientHeight(window.innerHeight);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", (e) => resize(e));
    return window.removeEventListener("resize", (e) => resize(e));
  }, [resize]);

  useEffect(()=> {
    window.addEventListener("keydown", (e)=> {keyDown(e)});
    return window.removeEventListener("keydown", (e)=> {keyDown(e)});
  }, [keyDown])

  useEffect(()=> {
    window.addEventListener("wheel", (e)=> {scrollWheel(e)}, {passive: false});
    return window.removeEventListener("wheel", (e)=> {scrollWheel(e)});
  }, [scrollWheel])

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
