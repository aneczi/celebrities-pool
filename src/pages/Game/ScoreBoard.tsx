import React from "react";
import { useTranslation } from "react-i18next";

import { useGetTimeLeft, useGetTeamPoints } from "store/game/selectors";

import BaseText from "components/BaseText/BaseText";

import styles from "./Game.module.scss";

const ScoreBoard: React.FC = () => {
  const { t } = useTranslation("game");
  const secondsLeft = useGetTimeLeft();
  const points = useGetTeamPoints();

  return (
    <div className={styles.scoreboard}>
      <div>
        <BaseText tag="p" size={6}>
          {t("TEAM A")} : <span>{points.A}</span>
        </BaseText>
      </div>
      <div>
        <BaseText tag="p" size={8} isBold>
          {secondsLeft}
        </BaseText>
      </div>
      <div>
        <BaseText tag="p" size={6}>
          {t("TEAM B")} : <span>{points.B}</span>
        </BaseText>
      </div>
    </div>
  );
};

export default ScoreBoard;