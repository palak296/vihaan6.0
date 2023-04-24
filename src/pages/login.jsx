import { useEffect } from 'react'

export default function Login() {

    useEffect(function () {
        window.location = `https://lastmile.up.railway.app/auth/login/`
    })

    return null
}
