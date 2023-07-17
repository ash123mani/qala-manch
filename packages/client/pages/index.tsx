import Head from "next/head";
import styles from "@/styles/home.module.scss";
import { Input, Button } from "@/app-components";
import React, { useState, useEffect } from "react";
import { gql } from "@apollo/client/core";
import { useAppDispatch } from "@/store";
import { createUser } from "@/store/slices/user/create-user";

type UserPayload = {
  userName: string;
};

const CREATE_USER = gql`
  mutation createUser($userName: String!) {
    createUser(userName: $userName) {
      userName
    }
  }
`;

export default function Home() {
  const dispatch = useAppDispatch();
  const [userName, setUserName] = useState("");

  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setUserName(value);
  };

  const handleUserNameSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const resp = await dispatch(createUser({ userName }));

    console.log("resp", resp);
  };

  return (
    <>
      <Head>
        <title>Qala Manch</title>
        <meta name="description" content="Know the Artists around you" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={`${styles.home}`}>
        <form className={styles["home__form"]} onSubmit={handleUserNameSubmit}>
          <Input
            size="large"
            placeholder="Enter your username"
            onChange={handleUserNameChange}
            className={styles["home__input"]}
          />
          <Button type="submit" className={styles["home__submit"]}>
            Submit
          </Button>
        </form>
      </main>
    </>
  );
}
