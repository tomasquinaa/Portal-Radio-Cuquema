export const ProgramaWeek = () => {
  return (
    <>
      <div className="text-white p-6">
        <h1 className="text-4xl font-bold mb-6 text-black">Programação</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h2 className="text-blue-500 text-lg font-semibold mb-4 pb-2 border-b border-gray-500">
              Segunda à Sexta
            </h2>

            <div className="space-y-6 text-black">
              <div className="pb-2 border-b border-gray-500">
                <h3 className="text-2xl font-semibold mb-2 ">5h</h3>
                <p className=" text-sm">
                  05h00 <span className="font-bold">Onda</span> Informativa
                </p>
              </div>

              <div className="pb-2 border-b border-gray-500">
                <h3 className="text-2xl font-semibold mb-2 ">6h</h3>
                <p className=" text-sm">
                  06h às 10:30 <span className="font-bold">Cuito</span> em Movimento
                </p>
              </div>

              <div className="pb-2 border-b border-gray-500">
                <h3 className="text-2xl font-semibold mb-2 ">10h</h3>
                <p className=" text-sm">
                  10:30h às 10:40 <span className="font-bold">A outra</span> conversa
                </p>
              </div>

              <div className="pb-2 border-b border-gray-500">
                <h3 className="text-2xl font-semibold mb-2 ">12h</h3>
                <p className=" text-sm">
                  12h00 <span className="font-bold">Jornal</span> do dia
                </p>
              </div>

              <div className="pb-2 border-b border-gray-500">
                <h3 className="text-2xl font-semibold mb-2 ">14h</h3>
                <p className=" text-sm">
                  14h00 <span className="font-bold">Tchá</span> Fica só
                </p>
              </div>

              <div className="pb-2 border-b border-gray-500">
                <h3 className="text-2xl font-semibold mb-2 ">17h</h3>
                <p className=" text-sm">
                  17h00 <span className="font-bold">Yayulako</span>
                </p>
              </div>

              <div className="pb-2 border-b border-gray-500">
                <h3 className="text-2xl font-semibold mb-2 ">19h</h3>
                <p className=" text-sm">
                  19h00 <span className="font-bold">Jornal</span> da Noite
                </p>
              </div>

            </div>
          </div>

          <div>
            <h2 className="text-blue-500 text-lg font-semibold mb-4 pb-2 border-b border-gray-500">Sábado</h2>
        
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-black">10h</h3>
                <p className="text-black text-sm pb-2 border-b border-gray-500">
                  10h às 12h <span className="font-bold">Ondiango</span> 
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-2 text-black">12h</h3>
                <p className="text-black text-sm pb-2 border-b border-gray-500">
                  12h30 <span className="font-bold">Bié</span> na lupa
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-2 text-black">16h</h3>
                <p className="text-black text-sm pb-2 border-b border-gray-500">
                  12h30 <span className="font-bold">Palco</span> do kuduro
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
                  08h10 <span className="font-bold">Manhãs</span> Religiosas
                </p>
                <p className="text-black text-sm pb-2 border-b border-gray-500">
                  10h <span className="font-bold">Domingos</span> de Todos 
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-2 text-black">13h</h3>
                <p className="text-black text-sm pb-2 border-b border-gray-500">
                  13h30 <span className="font-bold">Debate </span>em Umbundu
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-2 text-black">17h</h3>
                <p className="text-black text-sm pb-2 border-b border-gray-500">
                  13h30 <span className="font-bold">Canal </span>Hip hop
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};
