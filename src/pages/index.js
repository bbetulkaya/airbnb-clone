import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Airbnb Clone by Betul</title>
      </Head>

      <Header />
      <Banner />
    </div>
  );
}
