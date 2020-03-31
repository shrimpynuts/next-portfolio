import Head from 'next/head'
import Sidebar from '../components/Sidebar';
import '../styles/styles.css';

export default function Index() {
    return (
      <div>
        <Head>
            <title>Jonathan Cai</title>
        </Head>
        <Sidebar/>
      </div>
    )
  }