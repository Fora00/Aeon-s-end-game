import { Bars3CenterLeftIcon, TrashIcon } from '@heroicons/react/20/solid'

import ModalContext from '#/Context/ModalContext'
import { useContext } from 'react'

export const Navbar = (): JSX.Element => {
    const { openModal } = useContext(ModalContext)

    return (
        <>
            {' '}
            <nav className="p-2 w-full bg-blue-600 flex flex-row justify-between">
                <Bars3CenterLeftIcon
                    className="icon-black "
                    onClick={() => {
                        openModal('hamburger')
                    }}
                />
                <h1 className=" uppercase text-white w-full text-center">
                    Aeon's End
                </h1>{' '}
                <TrashIcon
                    className="icon-red"
                    onClick={() => {
                        openModal('reset')
                    }}
                />
            </nav>
        </>
    )
}
