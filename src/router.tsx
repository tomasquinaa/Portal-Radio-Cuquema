import { Route, Routes } from "react-router-dom"
import { routes } from "./utils/menu"
import { Programacao } from "./pages/Programacao"
import { Home } from "./pages/Home"


export const RouteComponent = () => {
    return (
        <>
            <Routes>
                <Route path={routes.MENU_INICIO} element={<Home/>} />
                <Route path={routes.MENU_PROGRAMACAO} element={<Programacao/>} />
                <Route path={routes.MENU_PROGRAMA_GRAVADO} element={<Programacao/>} />
            </Routes>
        </>
    )
}