import { TrashIcon, XMarkIcon } from '@heroicons/react/20/solid'

import { Modal } from '+/Modal'
import { THandlingState } from 'TS/types'
import { resetDatabase } from '#/Dexie/db'

type Props = {
    onClose?: THandlingState
}

export const ModalReset = ({ onClose }: Props): JSX.Element => {
    const deleteDB = () => {
        resetDatabase()
    }

    return (
        <Modal onClose={onClose}>
            <div className="relative flex  w-full flex-col self-center rounded-lg border-0 bg-white shadow-lg outline-none dark:bg-gray-200">
                <div className="border-blueGray-200   flex items-start justify-between self-center rounded-t  border-b border-solid p-5 dark:border-black/30">
                    <h3 className="text-center text-3xl font-semibold dark:text-black_dm">
                        Reset Data
                    </h3>
                </div>
                <div className="flex h-fit flex-row justify-center ">
                    <div className=" flex flex-col items-center gap-5 overflow-x-auto p-3 ">
                        <p>Elimina i dati contenuti nel database</p>
                    </div>
                </div>
                <div className=" flex items-center justify-end rounded-b border-t border-solid  p-3 ">
                    <XMarkIcon className="icon-red " onClick={onClose} />
                    <TrashIcon
                        className="icon-blue "
                        onClick={() => deleteDB()}
                    />
                </div>
            </div>
        </Modal>
    )
}
