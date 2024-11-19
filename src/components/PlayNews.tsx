import { useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa"; // Importa os ícones de play e pause
import { exportImg } from "../utils/exportImg";

export const PlayNews = () => {
  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(
    null
  );
  const [currentPlaying, setCurrentPlaying] = useState<string | null>(null); // Armazena o áudio atual sendo tocado

  const handlePlay = (audioUrl: string) => {
    // Pausar o áudio atual, se existir
    if (currentAudio) {
      currentAudio.pause();
      setCurrentAudio(null);
      setCurrentPlaying(null);

      // Se clicou no mesmo áudio, para a execução
      if (currentPlaying === audioUrl) return;
    }

    // Criar e tocar um novo áudio
    const newAudio = new Audio(audioUrl);
    newAudio.play();
    setCurrentAudio(newAudio);
    setCurrentPlaying(audioUrl);
  };

  const playlists = [
    {
      title: "Adrenalina",
      listeners: 16,
      description:
        "Trilha sonora para esportes com o melhor de música eletrônica, pop, rock e hip hop!",
      img: exportImg.play01,
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    },
    {
      title: "Acústico",
      listeners: 32,
      description:
        "Canções originais e versões acústicas de grandes nomes da música.",
      img: exportImg.play06,
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    },
    {
      title: "Natal",
      listeners: 10,
      description:
        "Clássicos natalinos e canções atuais reunidos em uma programação especial.",
      img: exportImg.play05,
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    },
    {
      title: "Taylor Swift",
      listeners: 24,
      description:
        "Ouça os hits e faixas marcantes da premiada cantora Taylor Swift.",
      img: exportImg.play04,
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    },
    {
      title: "Gospel",
      listeners: 280,
      description:
        "Os maiores nomes da música gospel nacional reunidos em uma só estação!",
      img: exportImg.play03,
      audio: "/audio/gospel.mp3",
    },
    {
      title: "Faxina sem Sofrência",
      listeners: 64,
      description:
        "O melhor da música nacional sertaneja com lançamentos e grandes sucessos!",
      img: exportImg.play02,
      audio: "/audio/faxina.mp3",
    },
  ];

  return (
    <>
      <header className="flex items-center justify-between p-4">
        <nav className="flex space-x-4">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Todas
          </h1>
        </nav>
      </header>

      <main className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {playlists.map((playlist, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-lg">
              <img src={playlist.img} alt={playlist.title} className="w-full" />
              <div className="p-4">
                <h3 className="text-lg font-bold">{playlist.title}</h3>
                <p className="text-sm text-gray-400">
                  {playlist.listeners} ouvindo agora
                </p>
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
                      <FaPause /> Tocando
                    </>
                  ) : (
                    <>
                      <FaPlay /> Tocar
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};
