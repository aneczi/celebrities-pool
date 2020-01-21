import React from "react";
import { useTranslation } from "react-i18next";
import cn from "classnames";

import BaseText from "components/BaseText/BaseText";

import styles from "./Game.module.scss";

const Start: React.FC = () => {
  const { t } = useTranslation("game");

  return (
    <section className={styles.wrapper}>
      <div>
        <BaseText tag="h1" size={6} isBold className={styles.header}>
          {t("ROUND 1 - TEAM A")}
        </BaseText>
        <div className={styles.scoreboard}>
          <div>
            <BaseText tag="p" size={6}>
              {t("TEAM A")} : <span>6</span>
            </BaseText>
          </div>
          <div>
            <BaseText tag="p" size={8} isBold>
              1:00
            </BaseText>
          </div>
          <div>
            <BaseText tag="p" size={6}>
              {t("TEAM B")} : <span>4</span>
            </BaseText>
          </div>
        </div>
        <div className={styles.progressBar}>
          <span className={styles.progressBarMeter}></span>
        </div>
      </div>
      <div className={styles.card}>
        <BaseText tag="p" size={8} className={styles.cardText}>
          Batman
        </BaseText>
      </div>
      <div className={styles.controls}>
        <button
          className={cn(styles.controlsButton, styles["controlsButton--no"])}
        >
          <span
            role="img"
            aria-label="thumbs down"
            className={styles["controlsThumb--no"]}
          >
            👎
          </span>
        </button>
        <button
          className={cn(styles.controlsButton, styles["controlsButton--yes"])}
        >
          <span
            role="img"
            aria-label="thumbs up"
            className={styles["controlsThumb--yes"]}
          >
            👍
          </span>
        </button>
      </div>
    </section>
  );
};

export default Start;
