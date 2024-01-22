"use client";
import LotteryList from "./components/LotteryList";
import menu from "../public/menu.png";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <header className="header">
        <div className="menu-icon">
          <Image src={menu} alt={"menu icon"} height={40} width={40} />
        </div>
        <div className="heading">
          <h1 className="main-heading">Lottery</h1>
        </div>
      </header>
      {/* <h2>Welcome to Sample Lottery</h2> */}
      <div className="main-content">
        <h3>Latest Results</h3>
      </div>
      <LotteryList />
    </div>
  );
}
