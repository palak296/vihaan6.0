import { useEffect } from 'react'
import { setCookie, deleteCookie } from '../cookies'

export default function Handler() {

    useEffect(function () {
        if (window.location.href.includes('token')) {
            setCookie('token', window.location.href.split('token=')[1], 30)
            window.location.href = '/'
        } else if (window.location.href.includes('logout')) {
            deleteCookie('token')
            window.location.href = '/'
        }
    })

    return null
}