import Link from 'next/link';
import '../styles/styles.css'

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

        </div>
    )
}