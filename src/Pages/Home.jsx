import React from 'react'
import Hero from '../components/Hero';
import About from '../components/About';
import Contact from '../components/Contact';
import Projects from '../components/Projects'

export default function Home() {
 
  return (
    <div>
      <Hero/>
      <About/>
      <Contact/>
      <Projects/>
    </div>
  )
}
