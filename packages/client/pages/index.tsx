import Head from "next/head";
import { Labrada } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Input, Button, DropDown } from "@/components";

const inter = Labrada({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Qala Manch</title>
        <meta name="description" content="Know the Artists around you" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Input size="small"placeholder="User Name" onChange={() => {}}/>
        <DropDown
          options={[
            { name: "Mango", id: "mango" },
            { name: "Banana", id: "banana" },
            { name: "Kiwi", id: "kiwi" },
            { name: "Apple is", id: "Apple" },
            { name: "Lichi is Lichi", id: "Lichi" },
            { name: "Angoor is Grape", id: "angoor" },
            { name: "Aam is raza", id: "aam" },
            { name: "Gajar is Carrot", id: "carrot" },
          ]}
          onOptionChange={() => {}}
        />
      </main>
    </>
  );
}
