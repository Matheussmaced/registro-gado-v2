'use client'

type SearchBarProps = {
  search: string
  setSearch: (value: string) => void
}

export default function SearchBar({ search, setSearch }: SearchBarProps) {
  
  return (
  
      <input
        type="text"
        placeholder="Buscar por qualquer campo..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="flex-1 p-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    

  )
}
