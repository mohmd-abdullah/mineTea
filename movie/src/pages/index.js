import Image from 'next/image'
import { Inter } from 'next/font/google'
import Movies from './movies'
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <br></br>      
      <br></br>
      <h1 style={{marginLeft:"30px"}}>TOP MOVIES</h1>
      <Movies/>
    </div>
 );
}
