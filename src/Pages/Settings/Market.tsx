import { useChangeNavbar } from '#/Hooks/useChangeNavbar'
import { useChangePageName } from '#/Hooks/useChangePageName'

export const PagesSettingsMarket = (): JSX.Element => {
    useChangePageName('market setting')
    useChangeNavbar('market setting')
    return (
        <div>
            <h1>PagesSettingsMarket</h1>
        </div>
    )
}
