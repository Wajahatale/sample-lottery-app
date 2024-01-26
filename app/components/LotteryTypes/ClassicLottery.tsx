import React, { useState } from "react";
import styles from "../../styles/components/ClassicLottery.module.css";
import Image from "next/image";
import classic from "../../../public/Logo_Classic.png";
import magnifier from "../../../public/Magnifier_Minus.png";
import time from "../../../public/timeIcon.png";
import polygon from "../../../public/Polygon.png";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { GoogleSignInButton } from "../authButton";

const ClassicLottery: React.FC<{ data: any }> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const session = useSession();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handlePlayButtonClick = () => {
    // Check if the user is authenticated before navigating to the play page
    if (session.status === "loading") {
      // Session status is still loading, do nothing or show a loading indicator
      return;
    }

    if (!session || status === "unauthenticated") {
      // Use Link for client-side navigation to the login page
      // return (
      //   <div>
      //     <GoogleSignInButton />
      //   </div>
      // );
      return (
        <Link href="/login">
          <a>Login</a>
        </Link>
      );
    } else {
      // Implement the logic to handle the play button click for authenticated users
      console.log("User is authenticated. Implement play logic here.");
    }
  };

  return (
    <div className={styles.classicCard}>
      <div className={styles.topBar}>
        <div className={styles.leftBar}>
          <Image src={classic} alt={"Classic logo"} height={16} width={96} />
          <p className={styles.bluetext}>Past 5 Results</p>
        </div>
        <Image src={magnifier} alt={"magnifier icon"} width={24} height={24} />
      </div>

      <div className={styles.winningNumber}>
        <div className={styles.numberRow}>
          <div>{data.roundNumber}</div>
          <div>{data.previousWinningticket[0]}</div>
          <div>{data.winningPot}</div>
        </div>
        <div className={styles.numberRow}>
          <div>{data.roundNumber}</div>
          <div>{data.previousWinningticket[1]}</div>
          <div>{data.winningPot}</div>
        </div>
        <div className={styles.numberRow}>
          <div>{data.roundNumber}</div>
          <div>{data.previousWinningticket[2]}</div>
          <div>{data.winningPot}</div>
        </div>
        <div className={styles.numberRow}>
          <div>{data.roundNumber}</div>
          <div>{data.previousWinningticket[3]}</div>
          <div>{data.winningPot}</div>
        </div>
        <div className={styles.numberRow}>
          <div>{data.roundNumber}</div>
          <div>{data.previousWinningticket[4]}</div>
          <div>{data.winningPot}</div>
        </div>
      </div>
      <div className={styles.footerStrip}>
        <div className={styles.nextDraw}>
          <span>Next Draw</span>
          <Image src={time} alt={"remaining time"} width={18} height={18} />
          {/* shall use a timeFormat functon to display this value more accurately */}
          {data.nextDraw}:00:00
        </div>
        <button className={styles.play} onClick={handlePlayButtonClick}>
          Play
        </button>
      </div>
      <div
        className={`${styles.status} ${isOpen ? styles.open : ""}`}
        onClick={toggleDropdown}
      >
        {isOpen && (
          <div className={styles.dropdownContent}>
            <p>Current Pool: {data.currentPool}</p>
            <p>Ticket count: {data.ticketCount}</p>
          </div>
        )}
        <div className={styles.drop}>
          <Image className={styles.iconPoly} src={polygon} alt="polygon icon" />
          <span>{isOpen ? "Close" : "Current Pool Status"}</span>
        </div>
      </div>
    </div>
  );
};

export default ClassicLottery;
