import React, { useState } from 'react'

import ModalContext from '../Context/ModalContext'

type Props = {
    children: React.ReactNode
}

const ModalProvider = ({ children }: Props) => {
    const [modalType, setModalType] = useState<Record<string, boolean>>({})

    const openModal = (modalName: string) => {
        helperFunction(modalName, true)
    }

    const closeModal = (modalName: string) => {
        helperFunction(modalName, false)
    }

    const helperFunction = (modalName: string, action: boolean) => {
        setModalType((prev) => ({ ...prev, [modalName]: action }))
    }

    return (
        <ModalContext.Provider value={{ modalType, openModal, closeModal }}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalProvider
