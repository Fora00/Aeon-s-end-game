import { useChangeNavbar } from '#/Hooks/useChangeNavbar'
import { useChangePageName } from '#/Hooks/useChangePageName'

export const PagesSettingsWave = (): JSX.Element => {
    useChangePageName('wave setting')
    useChangeNavbar('wave setting')
    return (
        <div>
            <h1>PagesSettingsWave</h1>
        </div>
    )
}
