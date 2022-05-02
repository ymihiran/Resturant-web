import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Featured from "../components/Featured";
import BurgerList from "../components/BurgerList";
import styles from "../styles/Home.module.css";


export default function Home({ burgerList, admin }) {
  const [close, setClose] = useState(true);
  return (
    <div className={styles.container}>
      <Head>
        <title>BurgerMart - shop</title>
        <meta name="description" content="Best burger shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />

      <BurgerList burgerList={burgerList} />

    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }

  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      burgerList: res.data,
      admin,
    },
  };
};
