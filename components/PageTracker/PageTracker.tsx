import { env } from "process";
import Tracker from "./Tracker";
import { ReactNode } from "react";

interface PageTrackerProps {
  children: ReactNode
}

const PageTracker = ({ children }: PageTrackerProps) => {
    const key = env.APIKEY?? null;
    console.log("Key", key);
  return <Tracker apiKey={key}>{children}</Tracker>;
};


export default PageTracker;