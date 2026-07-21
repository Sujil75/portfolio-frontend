import React, { useEffect, useState, useContext } from 'react'
import { AppContext } from '../context/AppContext';
import { API_BASE_URL } from '../config/api';

function usePortfolio() {
    const {setLoader} = useContext(AppContext)
    const [portfolioData, setPortfolioData] = useState({})
    const uri = API_BASE_URL

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
                    userImgHome: data.user_image_home,
                    userImgAbt: data.user_image_about,
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
                        name: edu.name,
                        institute: edu.institute_name,
                        brief: edu.brief_description,
                        img: edu.certificate_img,
                        issuedOn: edu.issued_on,
                        drive: edu.drive_link,
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
                throw new Error("No Data Fetched, ", err.message)
            } finally {
                setLoader(false)
            }
        }

        fetchPortfolio()
    }, [setLoader, uri]);

    return portfolioData
}

export default usePortfolio