import { Bars3CenterLeftIcon } from '@heroicons/react/20/solid'
import ModalContext from '../Services/Context/ModalContext'
import { useContext } from 'react'

export const Navbar = (): JSX.Element => {
    const { openModal } = useContext(ModalContext)

    return (
        <>
            {' '}
            <nav className="p-2 w-full bg-blue-600 flex flex-row justify-between">
                <Bars3CenterLeftIcon
                    className="icon text-white"
                    onClick={() => {
                        openModal('hamburger')
                    }}
                />
                <h1 className=" uppercase text-white w-full text-center">
                    Aeon's End
                </h1>{' '}
            </nav>
        </>
    )
}
