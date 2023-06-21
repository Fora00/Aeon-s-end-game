import { Body } from './Components/Body'
import { Navbar } from './Components/Navbar'
import { UtilsModalOutlet } from './Components/Utils/ModalOutlet'

export const App = (): JSX.Element => {
    return (
        <>
            <Navbar />
            <Body />
            <UtilsModalOutlet />
        </>
    )
}
