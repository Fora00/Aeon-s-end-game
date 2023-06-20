import { Modal } from '../Generator/Modal'
import { XMarkIcon } from '@heroicons/react/20/solid'

type Props = {
    handlingExit: () => void
}

export const ModalHamburger = ({ handlingExit }: Props): JSX.Element => {
    return (
        <Modal handlingExit={handlingExit}>
            <div className="relative flex  w-full flex-col self-center rounded-lg border-0 bg-white shadow-lg outline-none dark:bg-gray-200">
                <div className="border-blueGray-200   flex items-start justify-between self-center rounded-t  border-b border-solid p-5 dark:border-black/30">
                    <h3 className="text-center text-3xl font-semibold dark:text-black_dm">
                        ciao
                    </h3>
                </div>
                <div className="flex h-fit flex-row justify-center ">
                    <div className=" flex flex-col items-center gap-5 overflow-x-auto p-3 ">
                        <p>modale</p>
                    </div>
                </div>
                <div className=" flex items-center justify-end rounded-b border-t border-solid  p-3 ">
                    <XMarkIcon
                        className="icon text-red-500"
                        onClick={handlingExit}
                    />
                </div>
            </div>
        </Modal>
    )
}
