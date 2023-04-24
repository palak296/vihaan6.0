import { useEffect } from 'react'
import serverurl from '../backend'

export default function Login() {

    useEffect(function () {
        window.location = `${serverurl}/auth/login/`
    })

    return null
}
