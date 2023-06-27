import { Navigate, Route, Routes } from 'react-router-dom'

import { Navbar } from '@/Navbar'
import { PagesHome } from '§/Home'
import { PagesSettingsMarket } from './Settings/Market'
import { PagesSettingsWave } from './Settings/Wave'

export const PagesRouter = (): JSX.Element => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/home" element={<PagesHome />} />
                <Route path="/" element={<Navigate to="/home" replace />} />
                <Route
                    path="/settings/*"
                    element={
                        <Routes>
                            <Route
                                path="/wave"
                                element={<PagesSettingsWave />}
                            />
                            <Route
                                path="/market"
                                element={<PagesSettingsMarket />}
                            />
                        </Routes>
                    }
                />
            </Routes>
        </>
    )
}
