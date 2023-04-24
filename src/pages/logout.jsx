import { useEffect } from 'react'

export default function Logout() {

    useEffect(function () {
        window.location = `https://lastmile.up.railway.app/auth/logout/`
    })

    return null
}
