import { env } from "process";
import Tracker from "./Tracker";

const PageTracker = ({ children }: { children: React.ReactNode }) => {
    const key = env.APIKEY?? null;
  return <Tracker apiKey={key}>{children}</Tracker>;
};


export default PageTracker;