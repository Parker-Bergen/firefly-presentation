"use client";
import { ReactNode, useEffect } from "react";
import getIp from "./getIp";
import { browserName, deviceType, osName } from "react-device-detect";

interface TrackerProps {
  children: ReactNode;
  apiKey: String | null;
}

const Tracker = ({ children, apiKey }: TrackerProps) => {
  useEffect(() => {
    const tracked = localStorage.getItem("tracked");
    if (apiKey && !tracked) {
      localStorage.setItem("tracked", "true");
      getIp().then((ip) => {
        const visitData = {
          os: osName,
          broswer: browserName,
          device: deviceType,
          ip: ip,
          key: apiKey,
        };
        fetch("api/logging", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(visitData),
        })
      });
    }
  }, [apiKey]);

  return <>{children}</>;
};

export default Tracker;
