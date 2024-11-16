import { Route, Routes } from "react-router-dom"
import { routes } from "./utils/menu"
import { Programacao } from "./pages/Programacao"
import { Home } from "./pages/Home"
import { PodCast } from "./pages/Podcast"
import { Publicidades } from "./pages/Publicidades"


export const RouteComponent = () => {
    return (
        <>
            <Routes>
                <Route path={routes.MENU_INICIO} element={<Home/>} />
                <Route path={routes.MENU_PROGRAMACAO} element={<Programacao/>} />
                <Route path={routes.MENU_PODCAST} element={<PodCast/>} />
                <Route path={routes.MENU_PUBLICIDADE} element={<Publicidades/>} />
            </Routes>
        </>
    )
}