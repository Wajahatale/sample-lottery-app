import React, { useState } from "react";
import styles from "../../styles/components/CosmicLottery.module.css";
import Image from "next/image";
import cosmic from "../../../public/Logo_Cosmic.png";
import magnifier from "../../../public/Magnifier_Plus.png";
import time from "../../../public/timeIcon.png";
import polygon from "../../../public/Polygon.png";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { GoogleSignInButton } from "../authButton";

const CosmicLottery: React.FC<{ data: any }> = ({ data }) => {
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
    <div className={styles.cosmicCard}>
      <div className={styles.topBar}>
        <div className={styles.leftBar}>
          <Image src={cosmic} alt={"Cosmic logo"} height={16} width={96} />
          <p className={styles.purpletext}>No. {data.roundNumber}</p>
        </div>
        <Image src={magnifier} alt={"magnifier icon"} width={24} height={24} />
      </div>

      <div className={styles.winningNumber}>
        <div className={styles.numberBall}>{data.previousWinningticket[0]}</div>
        <div className={styles.numberBall}>{data.previousWinningticket[1]}</div>
        <div className={styles.numberBall}>{data.previousWinningticket[2]}</div>
        <div className={styles.numberBall}>{data.previousWinningticket[3]}</div>
        <div className={styles.numberBall}>{data.previousWinningticket[4]}</div>
        <div className={styles.colorBall}>{data.previousWinningticket[5]}</div>
      </div>
      <div className={styles.winningPot}>
        <p className={styles.plaintext}>Winning Pot</p>
        <div className={styles.amount}>
          <h2 className={styles.prizeAmount}>{data.winningPot}</h2>Lucki
        </div>
      </div>
      <div className={styles.footerStrip}>
        <div className={styles.nextDraw}>
          <p>Next Draw</p>
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

export default CosmicLottery;
