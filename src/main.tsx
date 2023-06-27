import './index.css'

import { BrowserRouter } from 'react-router-dom'
import ModalProvider from '#/Provider/ModalProvider'
import { PagesRouter } from '§/Router'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { UtilsModalOutlet } from '@/Utils/ModalOutlet'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ModalProvider>
            <BrowserRouter>
                <PagesRouter />
                <UtilsModalOutlet />
            </BrowserRouter>
        </ModalProvider>
    </React.StrictMode>
)
