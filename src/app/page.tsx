import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-24'>
      <div className='flex items-center justify-center mb-4'>
        <h1 className='text-3xl font-bold mr-2'>SocialPilot</h1>
        <div className='text-sm bg-cyan-800 px-4 py-1 rounded-full'>beta</div>
      </div>

      <p>
      SocialCopilot es una herramienta de administración de múltiples redes sociales diseñada para ayudar a los usuarios a administrar y hacer un seguimiento de sus cuentas de redes sociales desde una sola plataforma. Con SocialCopilot, los usuarios pueden conectarse a varias cuentas de redes sociales, incluidas Facebook, Twitter, Instagram, LinkedIn, y administrarlas de manera centralizada.
      </p>

      <div className='mt-4'>
        <Link href="/login" className='flex px-4 py-2 bg-green-600 rounded'>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
            </svg>
          </div>
          <div className='ml-2'>
            Iniciar sesión
          </div>
          </Link>
      </div>
    </main>
  )
}
