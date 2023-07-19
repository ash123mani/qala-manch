import Head from "next/head";
import { useState } from "react";
import WelcomeScreen from "@/components/onboard/welcome-screen";
import DetailsForm from "@/components/onboard/details-form";

const ArtistOnboard = () => {
  const [show, setShow] = useState(false);

  const handleContinue = () => {
    setShow(!show);
  };

  return (
    <>
      <Head>
        <title>Artist Onbard</title>
        <meta name="description" content="Artist Details for onboarding" />
      </Head>
      {!show ? <WelcomeScreen onRegister={handleContinue} onExplore={handleContinue} /> : <DetailsForm />}
    </>
  );
};

export default ArtistOnboard;
