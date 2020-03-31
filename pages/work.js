import Sidebar from '../components/Sidebar';
import Head from 'next/head'

export default function About() {
    return (
      <div>
        <Head>
            <title>Jonathan Cai</title>
        </Head>

        <div className="main">
          <Sidebar/>

          <div className="rightPanel"> 
                I've worked as a software engineering intern at facebook and jpmorgan.
          </div>
        </div>
      </div>
    )
  }