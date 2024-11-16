import { exportImg } from "../utils/exportImg";

export const Article = () => {
  return (
    <>
      <article className="bg-white shadow p-4 mb-8 border-gray-200 rounded">
        <div className="flex items-center space-x-2 mb-4">
          <span className="bg-red-600 text-white px-3 py-1 text-xs font-semibold rounded-full flex items-center">
            <span className="mr-1">📰</span> NOTÍCIAS
          </span>
          <span className="bg-red-600 text-white px-3 py-1 text-xs font-semibold rounded-full flex items-center">
            <span className="mr-1">🌍</span> SOCIEDADE
          </span>
        </div>
        <h2 className="text-2xl font-bold mb-2">
          Angola: Comunicação Social no cafrique?
        </h2>
        <div className="text-gray-500 flex items-center space-x-4 mb-4">
          <span>Sandro</span>
          <span>19 de Abril, 2021</span>
        </div>
        <p className="text-gray-700 mb-4">
          O Ministério das Telecomunicações anunciou a suspensão da Record TV
          África e a...
        </p>
      </article>

      <article className="bg-white shadow-md p-4 mb-8 mx-auto border border-gray-200 rounded">
        <div className="flex">
          {/* Imagem à Esquerda */}
          <div className="relative mr-6">
            <img
              src={exportImg.sinprof}
              alt="Notícia SINPROF"
              className="w-32 h-32 object-contain"
            />
          </div>

          {/* Conteúdo à Direita */}
          <div className="flex-1">
            {/* Header com Categorias */}
            <div className="flex space-x-2 mb-4">
              <span className="bg-red-600 text-white px-2 py-1 text-xs font-semibold rounded">
                NOTÍCIAS
              </span>
              <span className="bg-red-600 text-white px-2 py-1 text-xs font-semibold rounded">
                SOCIEDADE
              </span>
            </div>

            {/* Título e Autor */}
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              Silêncio do MED leva SINPROF à greve a partir de 26 de Abril
            </h1>
            <div className="flex items-center text-gray-500 text-sm mb-4">
              <span className="mr-4">👤 SANDRO</span>
              <span>📅 18 DE ABRIL, 2021</span>
            </div>
            <hr />
            <br />
            {/* Conteúdo com Áudio */}
            <div className="text-gray-700">
              <audio controls className="w-full mb-4">
                <source
                  src="https://radiocuquema.com/wp-content/uploads/2021/04/GREVE-1.mp3"
                  type="audio/mpeg"
                />
                Seu navegador não suporta o elemento de áudio.
              </audio>
              <p>
                O Sindicato Nacional dos Professores decretou, no sábado
                (17.04.2021), greve em todo território nacional a partir do dia
                26 de Abril do corrente.
              </p>
            </div>
          </div>
        </div>
      </article>

      <article className="bg-white shadow-md p-6 mb-8 mx-auto border border-gray-200 rounded">
        <div className="flex">
          {/* Imagem à Esquerda */}
          <div className="relative mr-6">
            <img
              src={exportImg.not3}
              alt="Notícia SINPROF"
              className="w-32 h-32 object-contain"
            />
          </div>

          {/* Conteúdo à Direita */}
          <div className="flex-1">
            {/* Header com Categorias */}
            <div className="flex space-x-2 mb-4">
              <span className="bg-red-600 text-white px-2 py-1 text-xs font-semibold rounded">
                NOTÍCIAS
              </span>
              <span className="bg-red-600 text-white px-2 py-1 text-xs font-semibold rounded">
                SOCIEDADE
              </span>
            </div>

            {/* Título e Autor */}
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              IURD: Capítulo negro em Angola continua
            </h1>
            <div className="flex items-center text-gray-500 text-sm mb-4">
              <span className="mr-4">👤 SANDRO</span>
              <span>📅 18 DE ABRIL, 2021</span>
            </div>
            <hr />
            <br />
            {/* Conteúdo com Áudio */}
            <div className="text-gray-700">
              <p>
                O Bispo Alberto Segunda, porta-voz da Igreja Universal do Reino
                de Deus em Angola classificou no Sábado (17.04.2021), em Luanda,
                em conferência de imprensa, que...
              </p>
            </div>
          </div>
        </div>
      </article>

      <article className="bg-white shadow-md p-6 mb-8 mx-auto border border-gray-200 rounded">
        <div className="flex">
          {/* Imagem à Esquerda */}
          <div className="relative mr-6">
            <img
              src={exportImg.not4}
              alt="Notícia SINPROF"
              className="w-32 h-32 object-contain"
            />
          </div>

          {/* Conteúdo à Direita */}
          <div className="flex-1">
            {/* Header com Categorias */}
            <div className="flex space-x-2 mb-4">
              <span className="bg-red-600 text-white px-2 py-1 text-xs font-semibold rounded">
                SEM CATEGORIA
              </span>
            </div>

            {/* Título e Autor */}
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              Efetivo das Forças Armadas Angolanas lamenta falta de salário há 4
              meses
            </h1>
            <div className="flex items-center text-gray-500 text-sm mb-4">
              <span className="mr-4">👤 SANDRO</span>
              <span>📅 18 DE ABRIL, 2021</span>
            </div>
            <hr />
            <br />
            {/* Conteúdo com Áudio */}
            <div className="text-gray-700">
              <p>
                Mendes Virgílio é primeiro sargento das FAA encontra-se doente
                desde o mês de Setembro, altura em que os seus ordenados também
                deixaram cair, por razões...
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};
