import Head from "next/head";
import { Sidebar, Center, Player } from "../components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Spotify Next js</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='bg-black h-screen overflow-hidden'>
        <Sidebar />
        {/* <Center /> */}
      </main>

      <div>{/* <Player /> */}</div>
    </div>
  );
}
