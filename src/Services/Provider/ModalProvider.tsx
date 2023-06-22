import ModalContext from '#/Context/ModalContext'
import { useState } from 'react'

type Props = {
    children: React.ReactNode
}

const ModalProvider = ({ children }: Props) => {
    const [modalType, setModalType] = useState<Record<string, boolean>>({})

    const openModal = (val: unknown) => {
        helperFunction(val as string, true)
    }

    const closeModal = (val: unknown) => {
        helperFunction(val as string, false)
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
