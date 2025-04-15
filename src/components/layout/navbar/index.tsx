'use client'

import Image from 'next/image'
import Link from 'next/link'
import logo from '@/../public/logo.png'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-3 flex items-center justify-between fixed mb-6 w-screen">
      <div className="flex items-center gap-4">
        <Link href="/" className="w-10 h-10 relative block">
          <Image
            src={logo}
            alt="Logo"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </Link>
        <span className="text-xl font-bold text-gray-800">Sistema de Animais</span>
      </div>
    </nav>
  )
}
