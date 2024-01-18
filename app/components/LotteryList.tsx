import React, { useEffect, useState } from "react";
import { getLotteryData } from "../api/lotteryApi";
import LotteryCard from "./LotteryCard";
import styles from "../styles/components/LotteryList.module.css";

const LotteryList: React.FC = () => {
  const [lotteryData, setLotteryData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cosmicData = await getLotteryData("COSMIC");
        const classicData = await getLotteryData("CLASSIC");
        const atomicData = await getLotteryData("ATOMIC");
        console.log("cosmicData");
        console.log(cosmicData);
        setLotteryData([cosmicData, classicData, atomicData]);
      } catch (error) {
        console.error("Error fetching lottery data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={`lottery-list ${styles["lottery-list"]}`}>
      {lotteryData.map((lottery, index) => (
        <LotteryCard key={index} lottery={lottery} />
      ))}
    </div>
  );
};

export default LotteryList;
