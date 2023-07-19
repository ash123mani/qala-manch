import React, { useMemo } from "react";
import clsx from "clsx";
import classNames from "./index.module.scss";
import { StepProps, Status } from './types';

const Steps = ({ type = 'horizontal', steps }: StepProps): JSX.Element => {
  const stepClassName = clsx(classNames.steps, type && classNames[`steps--${type}`]);

  return (
    <div className={stepClassName}>
      {steps.map((step, index) => {
        const { title, description, status } = step;
        const isLast = index === steps.length - 1
        const isProgress = status === Status.Progress;
        const isFinish = status === Status.Finish;
        const isError = status === Status.Error

        const titleClassName = clsx(
          classNames["steps__content-title"], 
          isLast && classNames["steps__content-title--last"],
          steps[index + 1]?.status === Status.Progress  && classNames["steps__content-title--active"]
        )
        const iconClassName = clsx(
          classNames["steps__item-icon"], 
          isProgress && classNames["steps__item-icon--progress"],
          isFinish && classNames["steps__item-icon--finish"],
          isError && classNames["steps__item-icon--error"]
        )
        const numberClassName = clsx(
          classNames["steps__number"], 
          isProgress && classNames["steps__number--progress"],
          isFinish && classNames["steps__number--finish"],
          isError && classNames["steps__number--error"]
        )

        return (
          <div className={classNames["steps__item-container"]} key={index}>
          <div className={iconClassName}>
            <span className={numberClassName}>{getStepIcon(status, index + 1)}</span>
          </div>
          <div className={classNames["steps__content"]}>
            <div className={titleClassName}>{title}</div>
            <div className={classNames["steps__content-description"]}>{description}</div>
          </div>
        </div>
        )
      })}
    </div>
  );
};

const getStepIcon = (status: string | undefined, count: number) => {
  if (status === Status.Finish) {
    return "✅"
  }
  if (status === Status.Error) {
    return '❌'
  }

  return count
}

export default Steps;
