import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import HomeSection from '../components/Home Section';

const NavBar = dynamic(() => import('../components/Navigation Bar'), {ssr: false})

export default function Home() {

  useEffect(() => {
    document.documentElement.style.setProperty('--height', `${window.innerHeight}px`)
    window.addEventListener('resize', (e) => {
      document.documentElement.style.setProperty('--height', `${window.innerHeight}px`)
    })
  }, [])

  return (
    <>
      <NavBar />
      <HomeSection />
    </>
  )
}
