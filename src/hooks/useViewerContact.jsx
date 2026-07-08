import React, {useCallback, useState} from 'react'
import { API_BASE_URL } from '../config/api'

function useViewerContact() {
    const [msg, setMsg] = useState("")

    const contactData = useCallback(async data => {
        const uri = `${API_BASE_URL}/viewercontact`

        try {
            // console.log("Preparing to send data: ", data)
            const response = await fetch(uri, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            })

            const result = await response.json()
            // console.log("Final data sent: ", result)
            // setMsg(result.message || "Message send successfully")

            return result
        } catch(err) {
            setMsg(err.message)
            // throw new Error("Error found: ", err.message)
        }
    }, [setMsg])

    return { contactData, msg }
}

export default useViewerContact