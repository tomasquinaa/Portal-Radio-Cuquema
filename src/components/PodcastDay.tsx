import { SlArrowRight } from "react-icons/sl";
import { exportImg } from "../utils/exportImg";

export const PodCastDay = () => {
  return (
    <div className=" text-white p-8">
      <section className="mb-8">
        <div className="relative bg-gradient-to-r from-orange-800 via-purple-900 to-gray-800 rounded-lg overflow-hidden">
          <img
            src={exportImg.podcast1}
            alt="Featured Podcast"
            className="object-cover w-full h-64 opacity-40"
          />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center p-8 space-y-4">
            <span className="text-white font-semibold text-sm">PODCAST+</span>
            <h2 className="text-4xl font-bold">A Grande Provocadora</h2>
            <p className="text-gray-300 text-sm max-w-md">
              Esta é a história de Vera Lagoa, a mulher mais temida pelos
              poderosos de todos os regimes. Afrontou Salazar, desafiou os
              militares de Abril e ridicularizou os que se achavam d...
            </p>
            <span className="text-white font-semibold text-xs">
              Com o apoio de <span className="underline">KIA</span>
            </span>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-bold mb-4 text-black flex items-center">
          Novos episódios
          <SlArrowRight className="ml-2" />
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <img
              src={exportImg.podcast2}
              alt="Episode 1"
              className="object-cover w-full h-40"
            />
            <div className="p-4">
              <span className="text-yellow-400 font-semibold text-sm">
                Podcast
              </span>
              <h4 className="text-lg font-bold mt-1">As notícias das 15h</h4>
              <p className="text-gray-400 text-sm">15 nov. 2024</p>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <img
              src={exportImg.podcast3}
              alt="Episode 2"
              className="object-cover w-full h-40"
            />
            <div className="p-4">
              <span className="text-yellow-400 font-semibold text-sm">
                Podcast
              </span>
              <h4 className="text-lg font-bold mt-1">
                14h. PS apresenta propostas de alterações para OE
              </h4>
              <p className="text-gray-400 text-sm">15 nov. 2024</p>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <img
              src={exportImg.podcast2}
              alt="Episode 3"
              className="object-cover w-full h-40"
            />
            <div className="p-4">
              <span className="text-orange-500 font-semibold text-sm">
                Podcast
              </span>
              <h4 className="text-lg font-bold mt-1">
                O canto dos Mártiros do Senhor na Várzea (Calde)
              </h4>
              <p className="text-gray-400 text-sm">15 nov. 2024</p>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <img
              src={exportImg.podcast3}
              alt="Episode 4"
              className="object-cover w-full h-40"
            />
            <div className="p-4">
              <span className="text-green-400 font-semibold text-sm">
                Podcast
              </span>
              <h4 className="text-lg font-bold mt-1">E o Carnaval é...</h4>
              <p className="text-gray-400 text-sm">15 nov. 2024</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-6">
        <h3 className="text-2xl font-bold mb-4 text-black flex items-center">
          Podcast de topo
          <SlArrowRight className="ml-2" />
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <img
              src={exportImg.podcast2}
              alt="Episode 1"
              className="object-cover w-full h-40"
            />
            <div className="p-4">
              <span className="text-yellow-400 font-semibold text-sm">
                Podcast
              </span>
              <h4 className="text-lg font-bold mt-1">As notícias das 15h</h4>
              <p className="text-gray-400 text-sm">15 nov. 2024</p>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <img
              src={exportImg.podcast3}
              alt="Episode 2"
              className="object-cover w-full h-40"
            />
            <div className="p-4">
              <span className="text-yellow-400 font-semibold text-sm">
                Podcast
              </span>
              <h4 className="text-lg font-bold mt-1">
                14h. PS apresenta propostas de alterações para OE
              </h4>
              <p className="text-gray-400 text-sm">15 nov. 2024</p>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <img
              src={exportImg.podcast2}
              alt="Episode 3"
              className="object-cover w-full h-40"
            />
            <div className="p-4">
              <span className="text-orange-500 font-semibold text-sm">
                Podcast
              </span>
              <h4 className="text-lg font-bold mt-1">
                O canto dos Mártiros do Senhor na Várzea (Calde)
              </h4>
              <p className="text-gray-400 text-sm">15 nov. 2024</p>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <img
              src={exportImg.podcast3}
              alt="Episode 4"
              className="object-cover w-full h-40"
            />
            <div className="p-4">
              <span className="text-green-400 font-semibold text-sm">
                Podcast
              </span>
              <h4 className="text-lg font-bold mt-1">E o Carnaval é...</h4>
              <p className="text-gray-400 text-sm">15 nov. 2024</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
