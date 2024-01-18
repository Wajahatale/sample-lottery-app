import React from "react";
import CosmicLottery from "./LotteryTypes/CosmicLottery";
import ClassicLottery from "./LotteryTypes/ClassicLottery";
import AtomicLottery from "./LotteryTypes/AtomicLottery";

const LotteryCard: React.FC<{ lottery: any }> = ({ lottery }) => {
  // Use the appropriate component based on the lottery name
  const getLotteryComponent = (lotteryName: string) => {
    switch (lotteryName) {
      case "COSMIC":
        return <CosmicLottery data={lottery} />;
      case "CLASSIC":
        return <ClassicLottery data={lottery} />;
      case "ATOMIC":
        return <AtomicLottery data={lottery} />;
      default:
        return null;
    }
  };

  return (
    <div className="lottery-card">
      {getLotteryComponent(lottery.lotteryName)}
    </div>
  );
};

export default LotteryCard;
