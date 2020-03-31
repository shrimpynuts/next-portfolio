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
              I'm a student at rice university studying computer science. 
          </div>
        </div>
      </div>
    )
  }