import { useEffect, useState } from 'react'

import { toCapitalize } from '#/Functions/utility'

const COMPANY_NAME = 'AE'
const changePageName = (newName: string): void => {
    document.title = `${toCapitalize(newName)} | ${toCapitalize(COMPANY_NAME)}`
}

export const useChangePageName = (value: string): [string] => {
    const [data] = useState(value)

    useEffect(() => {
        changePageName(data)
    }, [data])

    return [data]
}
