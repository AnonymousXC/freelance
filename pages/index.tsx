import { useEffect, useState } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

const NavBar = dynamic(() => import('@/components/Navigation Bar'), { ssr: false})
const HomeSection = dynamic(() => import('@/components/Home Section'), {ssr: false})
const WorkSection = dynamic(() => import('@/components/Work Section'), {ssr: false})
const AboutSection = dynamic(() => import('@/components/About Section'), {ssr: false})
const ContactSection = dynamic(() => import('@/components/Contact Section'), {ssr: false})
const Footer = dynamic(() => import('@/components/Footer'), {ssr: false})



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
      <Footer />
    </>
  )
}
