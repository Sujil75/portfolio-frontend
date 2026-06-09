import React from 'react'

import { useEffect, useState } from 'react'

function usePortfolio() {
    const [portfolioData, setPortfolioData] = useState({})
    const uri = 'https://portfolio-server-p2uz.onrender.com/api/portfolio'

    useEffect(() => {
        const fetchPortfolio = async () => {
            try {
                const response = await fetch(uri)
                const data = await response.json()

                setPortfolioData(data)
            }catch (err) {
                console.log('Error fetching data: ', err.message)
            }
        }

        fetchPortfolio()
    }, []);

    return portfolioData
}

export default usePortfolio