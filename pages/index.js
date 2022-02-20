import Head from 'next/head'
import { excerpt } from '../components';
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const writing = [
  { title: 'test title 1', excerpt: 'test excerpt 1'},
  { title: 'test title 2', excerpt: 'test excerpt 2'},
];

export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Writer Review</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {writing.map((e) => (
            <div>
              <excerpt e={e} key={e.title}/>
            </div>
          ))}
        </div>
      </div>
      </div>
  )
}
