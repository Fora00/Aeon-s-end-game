import { useEffect, useState } from 'react'

import { toCapitalize } from '#/Functions/utility'

const changeNavbar = (newName: string): void => {
    const navbarTitle = document.getElementById('navbar-title')

    if (navbarTitle) {
        navbarTitle.innerHTML = toCapitalize(newName)
    }
}

export const useChangeNavbar = (value: string): [string] => {
    const [data] = useState(value)

    useEffect(() => {
        changeNavbar(data)
    }, [data])

    return [data]
}
