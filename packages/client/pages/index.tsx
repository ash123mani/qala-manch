import Head from 'next/head'
import { Labrada } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Input from '@/common/components/input'

const inter = Labrada({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Qala Manch</title>
        <meta name="description" content="Know the Artists around you" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Input type="input" placeholder="Enter Your username" size="large"  />
      </main>
    </>
  )
}
