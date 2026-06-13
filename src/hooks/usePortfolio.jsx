import React, { useEffect, useState, useContext } from 'react'
import { AppContext } from '../context/AppContext';

function usePortfolio() {
    const {setLoader} = useContext(AppContext)
    const [portfolioData, setPortfolioData] = useState({})
    const uri = 'https://portfolio-server-p2uz.onrender.com/api/portfolio'

    useEffect(() => {
        const fetchPortfolio = async () => {
            try {
                setLoader(true)
                const response = await fetch(uri)
                const data = await response.json()

                if (!response.ok) {
                    throw new Error(`HTTP Error: ${response.status}`)
                }

                const updatedData = {
                    name: data.name,
                    email: data.email,
                    role: data.role,
                    desc: data.description,
                    briefDesc: data.brief_description,
                    resume: data.resume,
                    skills: data.skills.map(skill => ({
                        id: skill._id,
                        name: skill.skill_name,
                        img: skill.skill_image,
                        progress: skill.skill_progress,
                    })),
                    educations: data.educations.map(edu => ({
                        id: edu._id,
                        name: edu.education_name,
                        img: edu.education_desc,
                        progress: edu.education_certificate_img,
                    })),
                    projects: data.projects.map(project => ({
                        id: project._id,
                        name: project.project_name,
                        img: project.project_img,
                        publishLink: project.project_publish_link,
                        brief: project.project_brief,
                        desc: project.project_desc,
                        techStacks: project.project_stacks,
                    })),
                    contact: data.contact_me.map(contact => ({
                        id: contact._id,
                        name: contact.contact_name,
                        type: contact.contact_type,
                        link: contact.contact_link,
                        logo: contact.contact_logo,
                    })),
                }

                setPortfolioData(updatedData)
            }catch (err) {
                console.log('Error fetching data: ', err.message)
            } finally {
                setLoader(false)
            }
        }

        fetchPortfolio()
    }, [setLoader]);

    return portfolioData
}

export default usePortfolio