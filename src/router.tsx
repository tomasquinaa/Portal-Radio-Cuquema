import { Route, Routes } from "react-router-dom"
import { routes } from "./utils/menu"
import { Programacao } from "./pages/Programacao"
import { Home } from "./pages/Home"
import { PodCast } from "./pages/Podcast"
import { Publicidades } from "./pages/Publicidades"
import { Play } from "./pages/Play"


export const RouteComponent = () => {
    return (
        <>
            <Routes>
                <Route path={routes.MENU_INICIO} element={<Home/>} />
                <Route path={routes.MENU_PROGRAMACAO} element={<Programacao/>} />
            </Routes>
        </>
    )
}