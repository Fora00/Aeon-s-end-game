import { ReactNode, useEffect, useRef } from 'react'

import { THandlingState } from 'TS/types'
import { createPortal } from 'react-dom'
import { deciderPosition } from '#/Functions/generic'

type Props = {
    position?: 'top' | 'left' | 'bottom' | 'right' | 'default'
    children: ReactNode
    onClose?: THandlingState
}

const modalRoot: HTMLElement = document.getElementById('portal') as HTMLElement
const body: HTMLBodyElement = document.getElementsByTagName('body')[0]

export const Modal = ({
    position = 'default',
    children,
    onClose,
}: Props): React.ReactPortal => {
    const elRef = useRef<HTMLDivElement | null>(null)
    if (!elRef.current) {
        elRef.current = document.createElement('div')
        body.classList.add('fixed')
    }

    useEffect(() => {
        const el: HTMLDivElement = elRef.current as HTMLDivElement
        modalRoot.appendChild(el)
        return () => {
            body.classList.remove('fixed')
            modalRoot.removeChild(el)
        }
    }, [])

    return createPortal(
        <div>
            <div
                onClick={onClose}
                className="fixed inset-0 modal flex items-center justify-center overflow-y-auto overflow-x-hidden bg-gray-500/70 outline-none "
            >
                <div className={deciderPosition(position)}>{children}</div>
            </div>

            <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </div>,
        elRef.current
    )
}
