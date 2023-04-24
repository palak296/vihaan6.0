import { useEffect } from 'react'

export default function Handler() {

    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    function deleteCookie(name) {
        document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }

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