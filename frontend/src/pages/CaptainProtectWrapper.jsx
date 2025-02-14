import React, { useContext, useEffect, useState } from 'react'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CaptainProtectWrapper = ({ children }) => {
    const { captain, setCaptain } = useContext(CaptainDataContext)
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (!token) {
            navigate('/captain-login')
            return
        }

        axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            if (response.status === 200) {
                setCaptain(response.data.captain)
                setIsLoading(false)
            }
        }).catch(() => {
            localStorage.removeItem('token')
            setCaptain(null)
            navigate('/captain-login')
        })
    }, [])

    if (isLoading) {
        return <div>Loading...</div>
    }

    return <>{children}</>
}

export default CaptainProtectWrapper
