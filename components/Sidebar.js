import Link from 'next/link';
// import '../styles/styles.css';
import pdf from '../files/resume.pdf'


export default function Sidebar(props) {
    return (
        <div style={{paddingRight: 20, whiteSpace: "nowrap"}}>
            <p>Jonathan Cai</p>

            <Link href="/about">
                <a>About</a>
            </Link>
            <br/>
            
            <Link href="/work">
                <a>Work</a>
            </Link>
            <br/>
            
            <a href={pdf}>Resume</a>
            {/* <PDFDownloadLink document={<MyDoc />} fileName='../files/resume.pdf'>
                {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
            </PDFDownloadLink> */}
            <br/>

            <Link href="/contact">
                <a>Contact</a>
            </Link>

        </div>
    );
}