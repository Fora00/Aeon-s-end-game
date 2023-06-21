import React from 'react'

interface ModalContextProps {
    modalType: Record<string, boolean>
    openModal: (modalName: string) => void
    closeModal: (modalName: string) => void
}

const ModalContext = React.createContext<ModalContextProps>({
    modalType: {},
    openModal: () => {},
    closeModal: () => {},
})

export default ModalContext
