import { useState } from "react";
import { exportImg } from "../utils/exportImg";

// Definindo os tipos
type Dia = "seg" | "ter" | "qua" | "qui" | "sex" | "sab" | "dom";

type Programa = {
  titulo: string;
  horario: string;
  descricao: string;
};

const programacoes: Record<Dia, Programa[]> = {
  seg: [
    {
      titulo: "Onda Informativa",
      horario: "05:00h - 06:00h",
      descricao: "🌙 Acompanhando as ondas informativas! 🎶",
    },
    {
      titulo: "Cuito em Movimento",
      horario: "06:00h - 10:30h",
      descricao: "🌹 Acompanhado Cuito em Movimento! ❤️",
    },
    {
      titulo: "A Outra Conversa",
      horario: "10:30h - 10:40h",
      descricao: "🎵 Acompanhado a outra conversa! 🌅",
    },
    {
      titulo: "Jornal do Dia",
      horario: "12:00h - 10:40h",
      descricao: "🎵 Acompanhado o Jornal do Dia! 🌅",
    },
    {
      titulo: "Tchá Fica só",
      horario: "12:00h - 10:40h",
      descricao: "🎵 Acompanhado o Tchá Fica só! 🌅",
    },
    {
      titulo: "Jornal da Noite",
      horario: "12:00h - 10:40h",
      descricao: "🎵 Acompanhado o Jornal da Noite! 🌅",
    },
  ],
  ter: [
    {
      titulo: "Terça Relax",
      horario: "08:00h - 10:00h",
      descricao: "🎶 Relaxe com músicas calmas para começar o dia.",
    },
  ],
  qua: [
    {
      titulo: "Terça Relax",
      horario: "08:00h - 10:00h",
      descricao: "🎶 Relaxe com músicas calmas para começar o dia.",
    },
  ],
  qui: [],
  sex: [],
  sab: [
    {
      titulo: "Ondiango",
      horario: "10:00h - 12:00h",
      descricao: "🎵 Acompanhado o Ondiango! 🌅",
    },
    {
      titulo: "Bié na Lupa",
      horario: "12:30h - 12:30h",
      descricao: "🎵 Acompanhado o bié na lupa! 🌅",
    },
    {
      titulo: "Palco do kuduro",
      horario: "16:00h - 16:30h",
      descricao: "🎵 Acompanhado o palco do kuduro! 🌅",
    },
  ],
  dom: [
    {
      titulo: "Manhãs Religiosas",
      horario: "08:10h - 10:00h",
      descricao: "🎵 Acompanhado o Manhãs religiosas! 🌅",
    },
    {
      titulo: "Domingos de Todos",
      horario: "10:10h - 13:00h",
      descricao: "🎵 Acompanhado o Domingos de todos! 🌅",
    },
    {
      titulo: "Debate em Umbundu",
      horario: "13h30:10h - 14:00h",
      descricao: "🎵 Acompanhado o debate em Umbundu! 🌅",
    },
    {
      titulo: "Canal Hip Hop",
      horario: "14:30h - 15:00h",
      descricao: "🎵 Acompanhado o Hip Hop! 🌅",
    },
  ],
};

export default function ProgramaWeek() {
  const [diaSelecionado, setDiaSelecionado] = useState<Dia>("seg"); 

  return (
    <div className="p-6 bg-gradient-to-r min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Lista das Nossas Programações
        </h1>

        {/* Botões para selecionar o dia */}
        <div className="flex space-x-2 mb-6">
          {Object.keys(programacoes).map((dia) => (
            <button
              key={dia}
              onClick={() => setDiaSelecionado(dia as Dia)}
              className={`px-3 py-1 rounded-full font-medium ${
                dia === diaSelecionado
                  ? "bg-cyan-500 text-white"
                  : "bg-gray-300 text-gray-600"
              }`}
            >
              {dia.charAt(0).toUpperCase() + dia.slice(1)}{" "}
              {programacoes[dia as Dia].length}
            </button>
          ))}
        </div>

        {/* Exibição da programação */}
        <div className="space-y-6">
          {programacoes[diaSelecionado].length > 0 ? (
            programacoes[diaSelecionado].map((programa, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 bg-gray-50 rounded-lg p-4 shadow-md"
              >
                <img
                  src={exportImg.logotipo}
                  alt={`Imagem de ${programa.titulo}`}
                  className="w-32 h-32 object-contain"
                />
                
                <div>
                  <h2 className="text-lg font-bold text-gray-800">
                    {programa.titulo}
                  </h2>
                  <p className="text-sm text-gray-500">{programa.horario}</p>
                  <p className="mt-2 text-gray-700 text-sm">
                    {programa.descricao}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">Nenhuma programação disponível.</p>
          )}
        </div>
      </div>
    </div>
  );
}
