import { ArrowRightCircleIcon, XMarkIcon } from '@heroicons/react/20/solid'

import { CONSTANTS } from '#/Constants/generic'
import { Modal } from '+/Modal'
import { THandlingState } from 'TS/types'
import { toCapitalize } from '#/Functions/utility'
import { useNavigate } from 'react-router-dom'

type Props = {
    onClose?: THandlingState
}

export const ModalHamburger = ({ onClose }: Props): JSX.Element => {
    const navigate = useNavigate()

    const handleNavigation = (setting: string) => {
        navigate(`/settings/${setting}`)
    }

    return (
        <Modal onClose={onClose}>
            <div className="relative flex  w-full flex-col self-center rounded-lg border-0 bg-white shadow-lg outline-none dark:bg-gray-200">
                <div className="border-blueGray-200   flex items-start justify-between self-center rounded-t  border-b border-solid p-5 dark:border-black/30">
                    <h3 className="text-center text-3xl font-semibold dark:text-black_dm">
                        Impostazioni
                    </h3>
                </div>
                <div className="flex h-fit flex-row justify-center ">
                    <div className=" flex flex-col items-center gap-5 overflow-x-auto p-3 ">
                        {CONSTANTS.SETTINGS.map((setting) => {
                            return (
                                <div
                                    className="bg-white  gap-1 rounded-md  p-1 flex flex-row justify-between w-full"
                                    key={crypto.randomUUID()}
                                    onClick={() => handleNavigation(setting)}
                                >
                                    <p className="font-bold">
                                        {toCapitalize(setting)}
                                    </p>
                                    <ArrowRightCircleIcon className="icon-blue" />
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className=" flex items-center justify-end rounded-b border-t border-solid  p-3 ">
                    <XMarkIcon className="icon-red" onClick={onClose} />
                </div>
            </div>
        </Modal>
    )
}
