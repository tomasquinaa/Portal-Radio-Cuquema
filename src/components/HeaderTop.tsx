import { exportImg } from "../utils/exportImg";


export const HeaderTop = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        {/* Logotipo com melhorias */}
        <img 
          src={exportImg.logotipo} 
          alt="Logo" 
          className="w-36 h-auto object-contain transition-transform transform hover:scale-105 duration-300" 
        />
      </div>
    </header>
  );
};
