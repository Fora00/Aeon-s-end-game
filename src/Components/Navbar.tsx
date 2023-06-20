import { Bars3CenterLeftIcon } from '@heroicons/react/20/solid'
import { ModalHamburger } from '../Modal/Hamburger'
import { useState } from 'react'

export const Navbar = (): JSX.Element => {
    const [whatModalVisibile, setWhatModalVisibile] = useState('-')

    return (
        <>
            {' '}
            <nav className="p-2 w-full bg-blue-600 flex flex-row justify-between">
                <Bars3CenterLeftIcon
                    className="icon text-white"
                    onClick={() => setWhatModalVisibile('hamburger')}
                />
                <h1 className=" uppercase text-white w-full text-center">
                    Aeon's End
                </h1>{' '}
            </nav>
            {(() => {
                switch (whatModalVisibile) {
                    case 'hamburger':
                        return (
                            <ModalHamburger
                                handlingExit={() => setWhatModalVisibile('-')}
                            />
                        )
                    default:
                        return null
                }
            })()}
        </>
    )
}
