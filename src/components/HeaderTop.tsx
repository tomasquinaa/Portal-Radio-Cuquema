import { useEffect, useState } from "react";
import { exportImg } from "../utils/exportImg";

export const HeaderTop = () => {
  const slides = [
    { id: 1, image: "premio01", text: "" },
    { id: 2, image: "premio022", text: "" },
    { id: 3, image: "slider01", text: "" },
    // { id: 4, image: "slider03", text: "Healthy Eating Made Easy" },
  ] as const;

  const [currentIndex, setCurrentIndex] = useState(0);

  // Função para avançar para o próximo slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Função para voltar para o slide anterior
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  // useEffect para troca automática de slides
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Troca a cada 5 segundos
    return () => clearInterval(interval); // Limpa o intervalo ao desmontar
  }, []);

  return (
    <div className="relative w-full h-24 overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={exportImg[slide.image]}
            alt={slide.text}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white">
            <h2 className="text-4xl font-bold">{slide.text}</h2>
          </div>
        </div>
      ))}

      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 text-white"
      >
        &#8249;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 text-white"
      >
        &#8250;
      </button>
    </div>
  );
};




// import { Link } from "react-router-dom";
// import { exportImg } from "../utils/exportImg";
// import { routes } from "../utils/menu";

// export const HeaderTop = () => {
//   return (
//     <header className="bg-white shadow-md p-4 flex justify-between items-center">
//       <div className="flex items-center space-x-4">
//         {/* Logotipo com melhorias */}
//         <Link to={routes.MENU_INICIO}>
//           <img
//             src={exportImg.slider01}
//             alt="Logo"
//             className="w-36 h-auto object-contain transition-transform transform hover:scale-105 duration-300"
//           />
//         </Link>
//       </div>
//     </header>
//   );
// };
