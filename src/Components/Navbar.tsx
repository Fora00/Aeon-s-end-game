import {
    Bars3CenterLeftIcon,
    HomeModernIcon,
    TrashIcon,
} from '@heroicons/react/20/solid'

import ModalContext from '#/Context/ModalContext'
import { isUrlIncluding } from '#/Functions/utility'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

export const Navbar = (): JSX.Element => {
    const { openModal } = useContext(ModalContext)
    const navigate = useNavigate()

    const handleNavigation = () => {
        navigate('/')
    }

    return (
        <>
            {' '}
            <nav className="p-2 w-full bg-blue-600 flex flex-1 justify-between">
                <div className="flex flex-row justify-between gap-1  w-20% ">
                    <Bars3CenterLeftIcon
                        className="icon-black "
                        onClick={() => {
                            openModal('hamburger')
                        }}
                    />
                    <HomeModernIcon
                        className={`icon-black ${
                            isUrlIncluding('home') ? 'hidden' : ''
                        } `}
                        onClick={() => handleNavigation()}
                    />
                </div>
                <h1
                    className=" uppercase text-white font-bold  text-center mr-5 w-70%"
                    id="navbar-title"
                >
                    Aeon's End
                </h1>{' '}
                <div className="flex flex-row justify-between gap-1  w-10% ">
                    <TrashIcon
                        className="icon-red"
                        onClick={() => {
                            openModal('reset')
                        }}
                    />
                </div>
            </nav>
        </>
    )
}
