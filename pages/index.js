import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { ConnectKitButton } from "connectkit";

export default function Home() {
  return (
    <>
      <Head>
        <title>Connect Wallet with Wagmi</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
      <ConnectKitButton />
      </main>
    </>
  )
}
