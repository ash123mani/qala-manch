import Head from "next/head";
import { useRouter } from 'next/router'
import { useSearchParams } from 'next/navigation'
import WelcomeScreen from "@/components/onboard/welcome-screen";
import { UserTypes } from '@qala-manch/shared'
import { explorerSteps, artistSteps } from '@qala-manch/shared'
import { Steps } from '@/app-components'
 
const ArtistOnboard = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const userType = searchParams.get('type')
  const stepsConfig = userType === UserTypes.Artist ? artistSteps : explorerSteps;

  const handleRegister = () => {
    router.push(`/onboard?type=${UserTypes.Artist}`)
  };

  const handleExplore = () => {
    router.push(`/onboard?type=${UserTypes.Explorer}`)
  }

  return (
    <>
      <Head>
        <title>Artist Onbard</title>
        <meta name="description" content="Artist Details for onboarding" />
      </Head>
      {!userType ? <WelcomeScreen onRegister={handleRegister} onExplore={handleExplore} /> : <Steps steps={stepsConfig} type='vertical' />}
    </>
  );
};

export default ArtistOnboard;
