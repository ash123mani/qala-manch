import React from 'react';
import clsn from "./index.module.scss";
import { Button } from "@/app-components";
import { WelcomeScreenProps } from './types';

const WelcomeScreen = ({ onRegister, onExplore }: WelcomeScreenProps): JSX.Element => {
  return (
      <div className={clsn['welcome-screen']}>
        <h1 className={clsn["welcome-screen__title"]}>Qala Manch for Artists</h1>
        <h2 className={clsn["welcome-screen__sub-title"]}>Connect with artists in various regions</h2>
        <div className={clsn["welcome-screen__actions"]}>
          <Button variant="outline" size="large" className={clsn["welcome-screen__explore-btn"]} onClick={onExplore}>
            Explore the Artists
          </Button>
          <Button size="large" className={clsn["welcome-screen__register-btn"]} onClick={onRegister}>Register as Artist</Button>
        </div>
      </div>
  );
};

export default WelcomeScreen;
