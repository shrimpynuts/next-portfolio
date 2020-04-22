import Sidebar from '../components/Sidebar';
import Head from 'next/head'

export default function Contact() {
    return (
      <div>
        <Head>
            <title>Jonathan Cai</title>
        </Head>

        <div className="main">
          <Sidebar/>

          <div className="rightPanel"> 
                Email: caimjonathan@gmail.com
                <br/>
                GitHub: <a href="https://github.com/jonathancai11/">https://github.com/jonathancai11/</a>
                <br/>
                LinkedIn: <a href="https://www.linkedin.com/in/jonathan-cai/">https://www.linkedin.com/in/jonathan-cai/</a>
                <br/>

          </div>
        </div>
      </div>
    )
  }