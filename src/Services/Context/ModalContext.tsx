import React from 'react'
import { THandlingState } from 'TS/types'

type ModalContext = {
    modalType: Record<string, boolean>
    openModal: THandlingState
    closeModal: THandlingState
}

const ModalContext = React.createContext<ModalContext>({
    modalType: {},
    openModal: () => {},
    closeModal: () => {},
})

export default ModalContext
