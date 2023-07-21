import Head from "next/head";
import { useRouter } from 'next/router'
import React, { useState } from "react";

import clsn from "@/styles/pages/home.module.scss";
import { Input, Button } from "@/app-components";
import { useAppDispatch } from "@/store";
import { createUser } from "@/store/slices/user/create-user";

export default function Home() {
  const router = useRouter()
  const dispatch = useAppDispatch();
  const [userName, setUserName] = useState("");

  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setUserName(value);
  };

  const handleUserNameSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const resp = await dispatch(createUser({ userName }));
    router.replace("/onboard")
  };

  return (
    <>
      <Head>
        <title>Qala Manch</title>
        <meta name="description" content="Know the Artists around you" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={`${clsn.home}`}>
        <form className={clsn["home__form"]} onSubmit={handleUserNameSubmit}>
          <Input
            size="large"
            placeholder="Enter your username"
            onChange={handleUserNameChange}
            className={clsn["home__input"]}
          />
          <Button type="submit" className={clsn["home__submit"]}>
            Submit
          </Button>
        </form>
      </div>
    </>
  );
}
