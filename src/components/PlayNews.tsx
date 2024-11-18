

export const PlayNews = () => {
    return (
        <div className="min-h-screen py-6 px-4">
            <div className="max-w-8xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden"> 
                <div className="bg-primaryPurple text-white p-4">
                    <h2 className="text-2xl font-bold">Playlist de Hoje</h2>
                    <p className="text-sm">Confira as músicas mais tocadas!</p>
                </div>
        
                <div className="p-4">
                    <div className="flex items-center justify-between p-2 border-b hover:bg-gray-100">
                        <div className="flex items-center space-x-4">
                            <button className="text-indigo-600 hover:text-indigo-800">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-5.197 3.02A1 1 0 018 13.305V6.695a1 1 0 011.555-.832l5.197 3.02a1 1 0 010 1.664z" />
                                </svg>
                            </button>
                            <div>
                                <p className="text-lg font-semibold">Título da Música 1</p>
                                <p className="text-sm text-gray-500">Artista 1</p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-500">3:45</p>
                    </div>
            
                    <div className="flex items-center justify-between p-2 border-b hover:bg-gray-100">
                        <div className="flex items-center space-x-4">
                            <button className="text-indigo-600 hover:text-indigo-800">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-5.197 3.02A1 1 0 018 13.305V6.695a1 1 0 011.555-.832l5.197 3.02a1 1 0 010 1.664z" />
                                </svg>
                            </button>
                            <div>
                                <p className="text-lg font-semibold">Título da Música 2</p>
                                <p className="text-sm text-gray-500">Artista 2</p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-500">4:10</p>
                    </div>
            
                    <div className="flex items-center justify-between p-2 border-b hover:bg-gray-100">
                        <div className="flex items-center space-x-4">
                            <button className="text-indigo-600 hover:text-indigo-800">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-5.197 3.02A1 1 0 018 13.305V6.695a1 1 0 011.555-.832l5.197 3.02a1 1 0 010 1.664z" />
                                </svg>
                            </button>
                            <div>
                                <p className="text-lg font-semibold">Título da Música 3</p>
                                <p className="text-sm text-gray-500">Artista 3</p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-500">2:30</p>
                    </div>
                </div>
        
                <div className="bg-gray-200 p-4 flex items-center justify-between">
                    <button className="flex items-center space-x-2 px-4 py-2 bg-primaryPurple text-white rounded-lg hover:bg-indigo-800">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m5-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Pausar Tudo</span>
                    </button>
                    <p className="text-gray-600">3 músicas - Duração Total: 10:25</p>
                </div>
            </div>
        </div>   
    )
}