import { useState } from "react";
import { FaPlay, FaPause, FaVolumeUp } from "react-icons/fa";
import { exportImg } from "../utils/exportImg";

export const PlayNews = () => {
  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(null);
  const [currentPlaying, setCurrentPlaying] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.5);

  const handlePlay = (audioUrl: string) => {
    if (currentAudio) {
      currentAudio.pause();
      setCurrentAudio(null);
      setCurrentPlaying(null);

      if (currentPlaying === audioUrl) return;
    }

    const newAudio = new Audio(audioUrl);
    newAudio.volume = volume;
    newAudio.play();
    setCurrentAudio(newAudio);
    setCurrentPlaying(audioUrl);

    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    setCurrentAudio(null);
    setCurrentPlaying(null);
  };

  const togglePlayPause = () => {
    if (currentAudio) {
      if (currentAudio.paused) {
        currentAudio.play();
      } else {
        currentAudio.pause();
      }
    }
  };

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
    if (currentAudio) {
      currentAudio.volume = newVolume;
    }
  };

  const playlists = [
    {
      title: "Adrenalina",
      listeners: 16,
      description: "Trilha sonora para esportes com o melhor de música eletrônica, pop, rock e hip hop!",
      img: exportImg.play01,
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    },
    // Adicione outras playlists...
  ];

  return (
    <>
      <header className="flex items-center justify-between p-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Todas</h1>
      </header>

      <main className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {playlists.map((playlist, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-lg">
              <img src={playlist.img} alt={playlist.title} className="w-full" />
              <div className="p-4">
                <h3 className="text-lg font-bold">{playlist.title}</h3>
                <p className="text-sm text-gray-400">{playlist.listeners} ouvindo agora</p>
                <p className="text-sm mt-2">{playlist.description}</p>
                <button
                  className={`mt-4 px-4 py-2 flex items-center justify-center gap-2 text-sm font-medium rounded ${
                    currentPlaying === playlist.audio
                      ? "bg-secundaryPurple hover:bg-secundaryPurple text-white"
                      : "bg-primaryPurple hover:bg-primaryPurple text-white"
                  }`}
                  onClick={() => handlePlay(playlist.audio)}
                >
                  {currentPlaying === playlist.audio ? (
                    <>
                      <FaPause /> Pausar
                    </>
                  ) : (
                    <>
                      <FaPlay /> Ouvir agora
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-80">
            <div className="flex flex-col items-center">
              <span className="bg-blue-500 text-xs px-2 py-1 rounded">DIRETO</span>
              <div className="my-4">
                <button
                  onClick={togglePlayPause}
                  className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center"
                >
                  {currentAudio?.paused ? <FaPlay size={32} /> : <FaPause size={32} />}
                </button>
              </div>
              <div className="flex items-center w-full gap-4">
                <FaVolumeUp />
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="w-full"
                />
              </div>
            </div>
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
};





// import { useState } from "react";
// import { FaPlay, FaPause } from "react-icons/fa"; // Importa os ícones de play e pause
// import { exportImg } from "../utils/exportImg";

// export const PlayNews = () => {
//   const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(
//     null
//   );
//   const [currentPlaying, setCurrentPlaying] = useState<string | null>(null); // Armazena o áudio atual sendo tocado

//   const handlePlay = (audioUrl: string) => {
//     // Pausar o áudio atual, se existir
//     if (currentAudio) {
//       currentAudio.pause();
//       setCurrentAudio(null);
//       setCurrentPlaying(null);

//       // Se clicou no mesmo áudio, para a execução
//       if (currentPlaying === audioUrl) return;
//     }

//     // Criar e tocar um novo áudio
//     const newAudio = new Audio(audioUrl);
//     newAudio.play();
//     setCurrentAudio(newAudio);
//     setCurrentPlaying(audioUrl);
//   };

//   const playlists = [
//     {
//       title: "Adrenalina",
//       listeners: 16,
//       description:
//         "Trilha sonora para esportes com o melhor de música eletrônica, pop, rock e hip hop!",
//       img: exportImg.play01,
//       audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
//     },
//     {
//       title: "Acústico",
//       listeners: 32,
//       description:
//         "Canções originais e versões acústicas de grandes nomes da música.",
//       img: exportImg.play06,
//       audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
//     },
//     {
//       title: "Natal",
//       listeners: 10,
//       description:
//         "Clássicos natalinos e canções atuais reunidos em uma programação especial.",
//       img: exportImg.play05,
//       audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
//     },
//     {
//       title: "Taylor Swift",
//       listeners: 24,
//       description:
//         "Ouça os hits e faixas marcantes da premiada cantora Taylor Swift.",
//       img: exportImg.play04,
//       audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
//     },
//     {
//       title: "Gospel",
//       listeners: 280,
//       description:
//         "Os maiores nomes da música gospel nacional reunidos em uma só estação!",
//       img: exportImg.play03,
//       audio: "/audio/gospel.mp3",
//     },
//     {
//       title: "Faxina sem Sofrência",
//       listeners: 64,
//       description:
//         "O melhor da música nacional sertaneja com lançamentos e grandes sucessos!",
//       img: exportImg.play02,
//       audio: "/audio/faxina.mp3",
//     },
//   ];

//   return (
//     <>
//       <header className="flex items-center justify-between p-4">
//         <nav className="flex space-x-4">
//           <h1 className="text-2xl font-bold text-gray-800 mb-4">
//             Todas
//           </h1>
//         </nav>
//       </header>

//       <main className="p-6">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {playlists.map((playlist, index) => (
//             <div key={index} className="rounded-lg overflow-hidden shadow-lg">
//               <img src={playlist.img} alt={playlist.title} className="w-full" />
//               <div className="p-4">
//                 <h3 className="text-lg font-bold">{playlist.title}</h3>
//                 <p className="text-sm text-gray-400">
//                   {playlist.listeners} ouvindo agora
//                 </p>
//                 <p className="text-sm mt-2">{playlist.description}</p>
//                 <button
//                   className={`mt-4 px-4 py-2 flex items-center justify-center gap-2 text-sm font-medium rounded ${
//                     currentPlaying === playlist.audio
//                       ? "bg-secundaryPurple hover:bg-secundaryPurple text-white"
//                       : "bg-primaryPurple hover:bg-primaryPurple text-white"
//                   }`}
//                   onClick={() => handlePlay(playlist.audio)}
//                 >
//                   {currentPlaying === playlist.audio ? (
//                     <>
//                       <FaPause /> Tocando
//                     </>
//                   ) : (
//                     <>
//                       <FaPlay /> Ouvir agora
//                     </>
//                   )}
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </main>
//     </>
//   );
// };
