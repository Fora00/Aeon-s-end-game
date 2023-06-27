import { useChangeNavbar } from '#/Hooks/useChangeNavbar'
import { useChangePageName } from '#/Hooks/useChangePageName'

export const PagesHome = (): JSX.Element => {
    useChangePageName('home')
    useChangeNavbar("Aeon's End")

    return <>PagesHome</>
}
