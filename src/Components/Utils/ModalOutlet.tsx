import ModalContext from '#/Context/ModalContext'
import { ModalHamburger } from '@/Modal/Hamburger'
import { ModalReset } from '@/Modal/Reset'
import { findFirstKeyWithTrueValue } from '#/Functions/generic'
import { useContext } from 'react'

export const UtilsModalOutlet = (): JSX.Element => {
    const { closeModal, modalType } = useContext(ModalContext)

    return (
        <>
            {(() => {
                switch (findFirstKeyWithTrueValue(modalType)) {
                    case 'hamburger':
                        return (
                            <ModalHamburger
                                onClose={() => closeModal('hamburger')}
                            />
                        )
                    case 'reset':
                        return (
                            <ModalReset onClose={() => closeModal('reset')} />
                        )
                    default:
                        return null
                }
            })()}
        </>
    )
}
