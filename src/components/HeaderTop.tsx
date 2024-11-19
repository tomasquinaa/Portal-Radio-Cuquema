import { Link } from "react-router-dom";
import { exportImg } from "../utils/exportImg";
import { routes } from "../utils/menu";

export const HeaderTop = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        {/* Logotipo com melhorias */}
        <Link to={routes.MENU_INICIO}>
          <img
            src={exportImg.logotipo}
            alt="Logo"
            className="w-36 h-auto object-contain transition-transform transform hover:scale-105 duration-300"
          />
        </Link>
      </div>
    </header>
  );
};
