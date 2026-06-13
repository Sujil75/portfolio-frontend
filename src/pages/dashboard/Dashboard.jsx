import React, {useContext} from 'react';

import Navbar from '../../components/navbar/Navbar';
import Home from '../home/Home';
import About from '../about/About';
import Skills from '../skills/Skills';
import Education from '../education/Education';
import Projects from '../projects/Projects';
import ContactMe from '../contactMe/ContactMe';
import Footer from '../../components/footer/Footer';
import Loader from '../../components/loader/Loader'

import { AppContext } from '../../context/AppContext';
import usePortfolio from '../../hooks/usePortfolio';
import './Dashboard.css';

function Dashboard() {
  const {loader} = useContext(AppContext)
  const portfolio = usePortfolio()

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
          <section className='dashboard-container'>
            <header>
                <Navbar />
            </header>

            <main className='main-container'>
                <Home portfolio={portfolio} />

                <About portfolio={portfolio} />

                <Skills portfolio={portfolio} />

                <Education portfolio={portfolio} />

                <Projects portfolio={portfolio} />

                <ContactMe portfolio={portfolio} />
            </main>

            <footer>
              <Footer />
            </footer>
        </section>
      )}
    </>
  )
}

export default Dashboard