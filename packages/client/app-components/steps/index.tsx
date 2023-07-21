import React, { useMemo } from "react";
import clsx from "clsx";
import clsn from "./index.module.scss";
import { StepProps, Status, Type } from "./types";

const Steps = ({ type = "horizontal", steps }: StepProps): JSX.Element => {
  const stepClassName = clsx(clsn.steps, clsn[`steps--${type}`]);

  return (
    <div className={stepClassName}>
      {steps.map((step, index) => {
        const { title, description, status } = step;
        const isLast = index === steps.length - 1;

        const stepsClassName = clsx(clsn["steps__item-container"], clsn[`steps__item-container--${type}`]);
        const titleClassName = clsx(
          clsn["steps__content-title"],
          isLast && clsn["steps__content-title--last"],
          steps[index + 1]?.status === Status.Progress && clsn["steps__content-title--active"],
          clsn[`steps__content-title--${type}`]
        );
        const iconClassName = clsx(clsn["steps__item-icon"], status && clsn[`steps__item-icon--${status}`]);
        const numberClassName = clsx(clsn["steps__number"], status && clsn[`steps__item-icon--${status}`]);

        return (
          <div className={stepsClassName} key={index}>
            <div className={iconClassName}>
              <span className={numberClassName}>{getStepIcon(status, index + 1)}</span>
            </div>
            {type === Type.Vertical && !isLast && <div className={clsn["steps__tail--vertical"]}></div>}
            <div className={clsn["steps__content"]}>
              <div className={titleClassName}>{title}</div>
              <div className={clsn["steps__content-description"]}>{description}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const getStepIcon = (status: string | undefined, count: number) => {
  if (status === Status.Finish) {
    return "✅";
  }
  if (status === Status.Error) {
    return "❌";
  }

  return count;
};

export default Steps;
