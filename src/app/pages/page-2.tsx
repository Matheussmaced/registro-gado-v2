'use client'

import { useState } from "react"
import { animalsMock } from "@/_data/animalsMock"
import SearchBar from "@/components/ui/searchBar"
import AnimalTable from "@/components/ui/animalTable"
import AddAnimalModal from "@/components/ui/addAnimalModal/AddAnimalModal"


export default function Home() {
  const [search, setSearch] = useState('')
  const [showAddModal, setShowAddModal] = useState(false)

  const openAddModal = () => setShowAddModal(true)
  const closeAddModal = () => setShowAddModal(false)


  const filteredData = animalsMock.filter((item) =>
    Object.values(item).some((value) =>
      typeof value === 'string' && value.toLowerCase().includes(search.toLowerCase())
    )
  )

  return (
    <>
      <main className="p-6 bg-gray-100 min-h-screen">
        <div className="mb-6 mt-14">
          <h1 className="text-3xl font-bold">Animais</h1>
          <span>Crie, gerencie e visualize os animais</span>
        </div>

        <div className="flex flex-row align-center gap-6 mb-4">
        <SearchBar search={search} setSearch={setSearch} />
        <button  onClick={openAddModal} className="bg-green-600 text-white p-2 rounded-sm cursor-pointer hover:bg-green-700">
          Cadastrar animal +
        </button>
        </div>

        <AnimalTable animals={filteredData} />
      </main>
      <AddAnimalModal isOpen={showAddModal} onClose={closeAddModal} />
    </>
  )
}
