import React from 'react';

import Navbar from '../../components/navbar/Navbar';
import Home from '../home/Home';
import About from '../about/About';
import Skills from '../skills/Skills';
import Education from '../education/Education';
import Projects from '../projects/Projects';

import './Dashboard.css';

function Dashboard() {
  return (
    <section className='dashboard-container'>
        <header>
            <Navbar />
        </header>

        <main className='main-container'>
            <Home />

            <About />

            <Skills />

            <Education />

            <Projects />
        </main>

        <footer></footer>
    </section>
  )
}

export default Dashboard