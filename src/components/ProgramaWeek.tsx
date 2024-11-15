export const ProgramaWeek = () => {
  return (
    <>
      <div className="text-white p-6">
        <h1 className="text-4xl font-bold mb-6 text-black">Programação</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h2 className="text-blue-500 text-lg font-semibold mb-4 pb-2 border-b border-gray-500">
              Segunda a Sexta
            </h2>
          

            <div className="space-y-6 text-black">
              <div>
                <h3 className="text-2xl font-semibold mb-2 ">6h</h3>
                <p className=" text-sm pb-2 border-b border-gray-500">
                  06h35 <span className="font-bold">A História do Dia</span> Um
                  tema a cada dia tratado em profundidade
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-2">07h</h3>
                <p className="text-black text-sm">
                  07h10{" "}
                  <span className="font-bold">
                    Ainda Bem que Faz Essa Pergunta
                  </span>{" "}
                  as questões que lançam o dia
                </p>
                <p className="text-black text-sm">
                  07h15 <span className="font-bold">Boa Moeda, Má Moeda</span> o
                  que mexe com as suas finanças. Por Paulo Ferreira
                </p>
                <p className="text-black text-sm">
                  07h35 <span className="font-bold">América Dividida</span> quem
                  vai vencer as presidenciais? Com Bruno Cardoso Reis
                </p>
                <p className="text-black text-sm pb-2 border-b border-gray-500">
                  07h46{" "}
                  <span className="font-bold">Conferência de Imprensa</span>{" "}
                  detalhes surpreendentes de notícias especiais
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-blue-500 text-lg font-semibold mb-4 pb-2 border-b border-gray-500">Sábado</h2>
        
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-black">08h</h3>
                <p className="text-black text-sm pb-2 border-b border-gray-500">
                  08h10 <span className="font-bold">Vichyssoise</span> com a
                  secção de Política do Observador (repetição)
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-2 text-black">09h</h3>
                <p className="text-black text-sm pb-2 border-b border-gray-500">
                  09h10 <span className="font-bold">Fora do Baralho</span> com
                  João Marques de Almeida...
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-blue-500 text-lg font-semibold mb-4 pb-2 border-b border-gray-500">
              Domingo
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-black">08h</h3>
                <p className="text-black text-sm pb-2 border-b border-gray-500">
                  08h10 <span className="font-bold">Operação Stop</span> com
                  Alfredo Lavrador
                </p>
                <p className="text-black text-sm pb-2 border-b border-gray-500">
                  08h40 <span className="font-bold">Aprender a Comer</span> com
                  Mariana Chaves (repetição)
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-2 text-black">10h</h3>
                <p className="text-black text-sm pb-2 border-b border-gray-500">
                  10h15 <span className="font-bold">Encontro com a Beleza</span>{" "}
                  com Martim Sousa Tavares
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
