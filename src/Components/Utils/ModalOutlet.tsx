import { useContext } from 'react'
import { ModalHamburger } from '../../Modal/Hamburger'
import ModalContext from '../../Services/Context/ModalContext'
import { findKeyWithTrueValue } from '../../Services/functions'

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
