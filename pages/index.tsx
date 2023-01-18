import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import WorkSection from '../components/Work Section';
import FindWorkSection from '../components/Find Work Section';

const NavBar = dynamic(() => import('../components/Navigation Bar'), {ssr: false})
const HomeSection = dynamic(() => import('../components/Home Section'),{ssr: false})

export default function Home() {

  useEffect(() => {
    document.documentElement.style.setProperty('--height', `${window.innerHeight}px`)
    window.addEventListener('resize', (e) => {
      document.documentElement.style.setProperty('--height', `${window.innerHeight}px`)
    })
  }, [])

  return (
    <>
      <Head>
        <title>DevStudio : Freelance</title>
      </Head>
      <NavBar />
      <HomeSection />
      <WorkSection />
      <FindWorkSection />
    </>
  )
}
