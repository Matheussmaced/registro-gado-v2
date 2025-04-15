'use client'

import { useState } from "react"

type Animal = {
  rgd: string
  nome: string
  sexo: string
  nascimento: string
  pai: string
  mae: string
  ultimoParto: string
  status: string
}

type AnimalTableProps = {
  animals: Animal[]
}

export default function AnimalTable({ animals }: AnimalTableProps) {


  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-md shadow">
        <thead>
          <tr className="bg-blue-600 text-white text-sm uppercase tracking-wider text-left">
            <th className="px-3 py-3 w-8">#</th>
            <th className="px-3 py-3 max-w-[120px] truncate">RGD</th>
            <th className="px-3 py-3 max-w-[150px] truncate">Nome</th>
            <th className="px-3 py-3 w-16">Sexo</th>
            <th className="px-3 py-3 w-28">Dt. Nasc.</th>
            <th className="px-3 py-3 max-w-[150px] truncate">Pai</th>
            <th className="px-3 py-3 max-w-[150px] truncate">Mãe</th>
            <th className="px-3 py-3 w-28">Últ. Parto</th>
            <th className="px-3 py-3 w-28">Status</th>
          </tr>
        </thead>
        <tbody className="text-sm text-gray-700">
          {animals.map((animal, idx) => (
            <tr
              key={idx}
              className={`border-b hover:bg-gray-50 transition ${
                animal.status === 'Pendente' ? 'bg-yellow-50' : 'bg-green-50'
              }`}
            >
              <td className="px-3 py-2">{idx + 1}</td>
              <td className="px-3 py-2 max-w-[120px] truncate">{animal.rgd}</td>
              <td className="px-3 py-2 max-w-[150px] truncate">{animal.nome}</td>
              <td className="px-3 py-2">{animal.sexo}</td>
              <td className="px-3 py-2">{animal.nascimento}</td>
              <td className="px-3 py-2 max-w-[150px] truncate">{animal.pai}</td>
              <td className="px-3 py-2 max-w-[150px] truncate">{animal.mae}</td>
              <td className="px-3 py-2">{animal.ultimoParto}</td>
              <td className="px-3 py-2">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    animal.status === 'Pendente'
                      ? 'bg-yellow-400 text-white'
                      : 'bg-green-600 text-white'
                  }`}
                >
                  {animal.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
