import { useState } from "react";
import { FaPlay, FaPause, FaVolumeUp, FaTimes } from "react-icons/fa";
import { exportImg } from "../utils/exportImg";

export const PlayNews = () => {
  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(null);
  const [currentPlaying, setCurrentPlaying] = useState<string | null>(null);
  const [volume, setVolume] = useState<number>(0.5);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

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

  const closePlayer = () => {
    if (currentAudio) {
      currentAudio.pause(); // Pausar o áudio
      setCurrentAudio(null); // Remover o áudio atual
    }
    setCurrentPlaying(null); // Limpar a referência ao áudio atual
    setIsModalOpen(false); // Fechar o modal, se estiver aberto
  };

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
    if (currentAudio) {
      currentAudio.volume = newVolume;
    }
  };

  const closeModal = () => setIsModalOpen(false);

  const playlists = [
    {
      title: "Adrenalina",
      listeners: 16,
      description: "Trilha sonora para esportes com o melhor de música eletrônica, pop, rock e hip hop!",
      img: exportImg.play01,
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    },
    // Adicione mais playlists aqui...
  ];

  return (
    <div className="relative">
      {/* Header */}
      <header className="flex items-center justify-between p-4">
        <h1 className="text-2xl font-bold text-gray-800">Todas</h1>
      </header>

      {/* Playlist Grid */}
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

      {/* Modal (Opcional) */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-80">
            <button onClick={closeModal} className="absolute top-2 right-2 text-gray-400 hover:text-white">
              <FaTimes size={20} />
            </button>
            <div className="flex flex-col items-center">
              <button onClick={togglePlayPause} className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center">
                {currentAudio?.paused ? <FaPlay size={32} /> : <FaPause size={32} />}
              </button>
              <div className="flex items-center w-full gap-4 mt-4">
                <FaVolumeUp />
                <input type="range" min="0" max="1" step="0.01" value={volume} onChange={handleVolumeChange} className="w-full" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mini Player */}
      {currentPlaying && (
        <div className="fixed bottom-4 left-4 bg-gray-900 text-white p-4 rounded-lg shadow-lg flex items-center gap-4">
          <button onClick={togglePlayPause} className="flex items-center justify-center">
            {currentAudio?.paused ? <FaPlay size={24} /> : <FaPause size={24} />}
          </button>
          <div className="flex items-center gap-2">
            <FaVolumeUp />
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className="w-24"
            />
          </div>
          <button onClick={closePlayer} className="text-sm bg-red-500 hover:bg-red-600 px-2 py-1 rounded">
  Fechar
</button>
        </div>
      )}
    </div>
  );
};
