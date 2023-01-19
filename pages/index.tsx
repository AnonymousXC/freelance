import { useEffect, useState } from 'react';
import Head from 'next/head';
import NavBar from '@/components/Navigation Bar';
import HomeSection from '@/components/Home Section';
import WorkSection from '@/components/Work Section';
import AboutSection from '@/components/About Section';
import ContactSection from '@/components/Contact Section';
import FindWorkSection from '../components/Find Work Section';


export default function Home() {

  useEffect(() => {
    document.documentElement.style.setProperty('--height', `${window.innerHeight}px`)
    window.addEventListener('resize', (e) => {
      document.documentElement.style.setProperty('--height', `${window.innerHeight}px`)
    });
    
  }, [])

  return (
    <>
      <Head>
        <title>DevStudio : Freelance</title>
      </Head>
      <NavBar />
      <HomeSection />
      <WorkSection />
      <AboutSection />
      <ContactSection />
    </>
  )
}
