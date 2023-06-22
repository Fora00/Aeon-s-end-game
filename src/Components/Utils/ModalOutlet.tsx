import ModalContext from '#/Context/ModalContext'
import { ModalHamburger } from '@/Modal/Hamburger'
import { findKeyWithTrueValue } from '#/Functions/generic'
import { useContext } from 'react'

export const UtilsModalOutlet = (): JSX.Element => {
    const { closeModal, modalType } = useContext(ModalContext)

    return (
        <>
            {(() => {
                switch (findKeyWithTrueValue(modalType)) {
                    case 'hamburger':
                        return (
                            <ModalHamburger
                                onClose={() => closeModal('hamburger')}
                            />
                        )
                    default:
                        return null
                }
            })()}
        </>
    )
}
