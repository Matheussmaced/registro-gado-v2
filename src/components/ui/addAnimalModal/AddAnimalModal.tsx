'use client'

import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

type AddAnimalModalProps = {
  isOpen: boolean
  onClose: () => void
}

export default function AddAnimalModal({ isOpen, onClose }: AddAnimalModalProps) {
  const [form, setForm] = useState({
    rgd: '',
    nome: '',
    sexo: '',
    nascimento: null as Date | null,
    pai: '',
    mae: '',
    ultimoParto: null as Date | null,
    status: 'Pendente',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const animalData = {
      ...form,
      nascimento: form.nascimento?.toLocaleDateString('pt-BR') || '',
      ultimoParto: form.ultimoParto?.toLocaleDateString('pt-BR') || '',
    }
    console.log('Novo animal:', animalData)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-xl rounded-md shadow-lg p-6 relative">
        <h2 className="text-2xl font-semibold mb-4 text-center">Adicionar Animal</h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            ['rgd', 'RGD'],
            ['nome', 'Nome'],
            ['sexo', 'Sexo'],
            ['pai', 'Pai'],
            ['mae', 'Mãe'],
          ].map(([name, label]) => (
            <div key={name} className="flex flex-col">
              <label className="font-medium mb-1">{label}</label>
              <input
                type="text"
                name={name}
                value={(form as any)[name]}
                onChange={handleInputChange}
                className="p-2 border rounded"
                required
              />
            </div>
          ))}

          <div className="flex flex-col">
            <label className="font-medium mb-1">Data de Nascimento</label>
            <DatePicker
              selected={form.nascimento}
              onChange={(date: Date | null) => setForm({ ...form, nascimento: date })}
              dateFormat="dd/MM/yyyy"
              className="p-2 border rounded w-full"
              placeholderText="Selecionar data"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium mb-1">Último Parto</label>
            <DatePicker
              selected={form.ultimoParto}
              onChange={(date: Date | null) => setForm({ ...form, ultimoParto: date })}
              dateFormat="dd/MM/yyyy"
              className="p-2 border rounded w-full"
              placeholderText="Selecionar data"
            />
          </div>

          <div className="col-span-1 sm:col-span-2">
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full"
            >
              Salvar
            </button>
          </div>
        </form>

        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl"
        >
          ×
        </button>
      </div>
    </div>
  )
}
