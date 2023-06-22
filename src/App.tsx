import { Body } from '@/Body'
import { Navbar } from '@/Navbar'
import { UtilsModalOutlet } from '@/Utils/ModalOutlet'

export const App = (): JSX.Element => {
    return (
        <>
            <Navbar />
            <Body />
            <UtilsModalOutlet />
        </>
    )
}
