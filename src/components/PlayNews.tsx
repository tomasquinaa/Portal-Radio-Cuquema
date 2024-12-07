import { useRef, useState } from "react";
import { IoPlayCircle } from "react-icons/io5";
import { MdGridView, MdSchedule } from "react-icons/md";

export const PlayNews = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioUrl = "https://observador.pt/radio/player/"; 

  const toggleAudio = () => {
   
    if (audioRef.current) {
      if (isPlaying) {
        console.log("Toggling audio play/pause...");
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().catch((error) => {
          console.error("Erro ao tentar reproduzir áudio:", error);
        });
        setIsPlaying(true);
      }
    }
  };
  

  return (
    <div className="bg-[#743D77] min-h-screen text-white flex flex-col justify-center items-center p-4">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">RÁDIO</h1>
        <h2 className="text-5xl font-bold">CUQUEMA</h2>
        <p className="text-lg mt-2">A cuquema também é uma rádio. Descubra-nos.</p>
      </header>

      {/* Footer - Buttons */}
      <footer className="mt-12">
        <div className="flex justify-center space-x-8">
          <button
            onClick={toggleAudio}
            className="flex items-center space-x-2 px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg shadow-lg transition"
          >
            <IoPlayCircle size={20} />
            <span>{isPlaying ? "Pausar" : "Ouvir Agora"}</span>
          </button>
          <button className="flex items-center space-x-2 px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg shadow-lg transition">
            <MdSchedule size={20} />
            <span>Programação</span>
          </button>
          <button className="flex items-center space-x-2 px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg shadow-lg transition">
            <MdGridView size={20} />
            <span>Programas</span>
          </button>
        </div>
      </footer>

      {/* Hidden Audio Element */}
      <audio ref={audioRef} src={audioUrl} preload="auto" />
    </div>
  );
};
