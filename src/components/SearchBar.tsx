export const SearchBar = () => {
  return (
    <div className="bg-white shadow p-6 mb-8">
      <h3 className="text-xl font-semibold mb-4">Pesquisar</h3>
      <div className="flex">
        <input
          type="text"
          placeholder="Pesquisar..."
          className="border border-gray-300 p-2 w-full rounded-l-md"
        />
        <button className="bg-primaryPurple text-white px-4 rounded-r-md hover:bg-purple-700">
          Pesquisar
        </button>
      </div>
    </div>
  );
};
