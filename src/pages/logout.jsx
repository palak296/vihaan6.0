import { useEffect } from 'react'
import serverurl from '../backend'

export default function Logout() {

    useEffect(function () {
        window.location = `${serverurl}/auth/logout/`
    })

    return null
}
