import React from 'react';

import Navbar from '../../components/navbar/Navbar';
import Home from '../home/Home';
import About from '../about/About'
import Skills from '../skills/Skills';

import './Style.css';

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
        </main>

        <footer></footer>
    </section>
  )
}

export default Dashboard