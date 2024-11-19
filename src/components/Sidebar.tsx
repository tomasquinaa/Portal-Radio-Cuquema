import { SearchBar } from "./SearchBar";

export const Sidebar = () => {
  return (
    <aside className="w-1/4 py-6">
      <SearchBar />
      <div className="bg-white shadow p-6">
        <h3 className="text-xl font-semibold mb-4">Últimas Notícias</h3>
        <ul className="space-y-2">
          <li>
            <a href="#" className="text-black hover:underline">
              Angola: Comunicação Social no cafrique?
            </a>
          </li>
          <hr />
          <li>
            <a href="#" className="text-black hover:underline">
              Silêncio do MED leva SINPROF à greve a partir de 26 de Abril
            </a>
          </li>
          <hr />
          <li>
            <a href="#" className="text-black hover:underline">
              IURD: Capítulo negro em Angola continua
            </a>
          </li>
          <hr />
          <li>
            <a href="#" className="text-black hover:underline">
              Efetivo das Forças Armadas Angolanas lamenta falta de salário há 4
              meses
            </a>
          </li>
          <hr />
          <li>
            <a href="#" className="text-black hover:underline">
              Jovem morre após ter sido queimada por indivíduo não identificado
            </a>
          </li>
        </ul>
      </div>
      <br />
      <div className="bg-white shadow p-6">
        <h3 className="text-xl font-semibold mb-4">Arquivo</h3>
        <ul className="space-y-2">
          <li>
            <a href="#" className="text-black hover:underline">
              Angola: Comunicação Social no cafrique?
            </a>
          </li>
          <hr />
          <li>
            <a href="#" className="text-black hover:underline">
              Silêncio do MED leva SINPROF à greve a partir de 26 de Abril
            </a>
          </li>
          <hr />
          <li>
            <a href="#" className="text-black hover:underline">
              IURD: Capítulo negro em Angola continua
            </a>
          </li>
          <hr />
          <li>
            <a href="#" className="text-black hover:underline">
              Efetivo das Forças Armadas Angolanas lamenta falta de salário há 4
              meses
            </a>
          </li>
          <hr />
          <li>
            <a href="#" className="text-black hover:underline">
              Jovem morre após ter sido queimada por indivíduo não identificado
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};
