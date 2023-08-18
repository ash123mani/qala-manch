import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import WelcomeScreen from '@/components/onboard/welcome-screen';
import { UserTypes, Status, Step } from '@qala-manch/shared';
import { explorerSteps, artistSteps } from '@qala-manch/shared';
import { Steps, Button } from '@/app-components';

const ArtistOnboard = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const userType = searchParams.get('type');
  const [steps, setSteps] = useState<Step[]>([]);
  const [progressIndex, setProgressIndex] = useState<number>(0);

  useEffect(() => {
    const newSteps = userType === UserTypes.Artist ? artistSteps : explorerSteps;
    newSteps[progressIndex].status = Status.Progress;
    setSteps(newSteps);
  }, [userType, progressIndex]);

  const handleRegister = () => {
    router.push(`/onboard?type=${UserTypes.Artist}`);
  };

  const handleExplore = () => {
    router.push(`/onboard?type=${UserTypes.Explorer}`);
  };

  const handleNext = () => {
    setProgressIndex(progressIndex + 1);
  };

  return (
    <>
      <Head>
        <title>Artist Onbard</title>
        <meta name="description" content="Artist Details for onboarding" />
      </Head>
      {!userType ? (
        <WelcomeScreen onRegister={handleRegister} onExplore={handleExplore} />
      ) : (
        <>
          <Steps steps={steps} /> <Button onClick={handleNext}>NextStep</Button>
        </>
      )}
    </>
  );
};

export default ArtistOnboard;
