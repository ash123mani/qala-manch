import React from 'react';
import classNames from "./index.module.scss";
import { Button } from "@/app-components";
import { WelcomeScreenProps } from './types';

const WelcomeScreen = ({ onRegister, onExplore }: WelcomeScreenProps): JSX.Element => {
  return (
      <div className={classNames['welcome-screen']}>
        <h1 className={classNames["welcome-screen__title"]}>Qala Manch for Artists</h1>
        <h2 className={classNames["welcome-screen__sub-title"]}>Connect with artists in various regions</h2>
        <div className={classNames["welcome-screen__actions"]}>
          <Button variant="outline" size="large" className={classNames["welcome-screen__explore-btn"]} onClick={onExplore}>
            Explore the Artists
          </Button>
          <Button size="large" className={classNames["welcome-screen__register-btn"]} onClick={onRegister}>Register as Artist</Button>
        </div>
      </div>
  );
};

export default WelcomeScreen;
