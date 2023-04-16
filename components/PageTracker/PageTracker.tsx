import { env } from "process";
import Tracker from "./Tracker";
import { ReactNode } from "react";

interface PageTrackerProps {
  children: ReactNode
}

const PageTracker = ({ children }: PageTrackerProps) => {
    const key = env.NEXT_PUBLIC_APIKEY?? null;
  return <Tracker apiKey={key}>{children}</Tracker>;
};


export default PageTracker;