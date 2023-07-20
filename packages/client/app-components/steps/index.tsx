import React, { useMemo } from "react";
import clsx from "clsx";
import classNames from "./index.module.scss";
import { StepProps, Status, Type } from "./types";

const Steps = ({ type = "horizontal", steps }: StepProps): JSX.Element => {
  const stepClassName = clsx(classNames.steps, classNames[`steps--${type}`]);

  return (
    <div className={stepClassName}>
      {steps.map((step, index) => {
        const { title, description, status } = step;
        const isLast = index === steps.length - 1;

        const stepsClassName = clsx(classNames["steps__item-container"], classNames[`steps__item-container--${type}`]);
        const titleClassName = clsx(
          classNames["steps__content-title"],
          isLast && classNames["steps__content-title--last"],
          steps[index + 1]?.status === Status.Progress && classNames["steps__content-title--active"],
          classNames[`steps__content-title--${type}`]
        );
        const iconClassName = clsx(classNames["steps__item-icon"], status && classNames[`steps__item-icon--${status}`]);
        const numberClassName = clsx(classNames["steps__number"], status && classNames[`steps__item-icon--${status}`]);

        return (
          <div className={stepsClassName} key={index}>
            <div className={iconClassName}>
              <span className={numberClassName}>{getStepIcon(status, index + 1)}</span>
            </div>
            {type === Type.Vertical && !isLast && <div className={classNames["steps__tail--vertical"]}></div>}
            <div className={classNames["steps__content"]}>
              <div className={titleClassName}>{title}</div>
              <div className={classNames["steps__content-description"]}>{description}</div>
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
