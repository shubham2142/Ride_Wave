import React, { useContext } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'

export const CaptainLogout = () => {
    const { setCaptain } = useContext(CaptainDataContext)
    const navigate = useNavigate()

    const token = localStorage.getItem('token')

    axios.get(`${import.meta.env.VITE_BASE_URL}/captains/logout`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((response) => {
        if (response.status === 200) {
            localStorage.removeItem('token')
            setCaptain(null) // Reset captain state
            navigate('/captain-login')
        }
    }).catch(() => {
        localStorage.removeItem('token')
        setCaptain(null)
        navigate('/captain-login')
    })

    return <div>Logging out...</div>
}

export default CaptainLogout
