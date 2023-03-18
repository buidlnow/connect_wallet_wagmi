import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { ConnectKitButton } from "connectkit";
import { useState } from 'react';
import { useAccount, useConnect, useEnsName } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

export default function Home() {

    const { address, isConnected } = useAccount()
    const { data: ensName } = useEnsName({ address })
    const { connect } = useConnect({
      connector: new InjectedConnector(),
    })


    
    if (isConnected) return <div>Connected to {ensName ?? address}</div>
    return <ConnectKitButton />
}
