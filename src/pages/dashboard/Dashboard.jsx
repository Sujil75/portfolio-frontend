import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Home from '../home/Home';

import './Style.css';

function Dashboard() {
  return (
    <section className='dashboard-container'>
        <header>
            <Navbar />
        </header>

        <main>
            <Home />
        </main>

        <footer></footer>
    </section>
  )
}

export default Dashboard