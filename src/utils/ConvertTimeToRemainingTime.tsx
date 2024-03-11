"use client";
import { useEffect, useState } from "react";

const ConvertBidEndTimeToRemainingTime = ({
  bidEndTime,
}: {
  bidEndTime: string;
}) => {
  const [remainingTime, setRemainingTime] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const endTime = new Date(bidEndTime);

      // Check if bidding has ended
      if (now > endTime) {
        setRemainingTime("Bidding ended");
        clearInterval(intervalId);
        return;
      }

      const timeDifference = endTime.getTime() - now.getTime();

      const hours = Math.floor(timeDifference / (1000 * 60 * 60));
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setRemainingTime(`${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [bidEndTime]);

  return <p className="text-xl font-bold">{remainingTime}</p>;
};

export default ConvertBidEndTimeToRemainingTime;
