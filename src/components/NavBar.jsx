import React from 'react'

export default function NavBar() {
  return (
    <nav className='bg-white px-2 pb-8 fixed w-full h-52 top-0'>
        <div className='flex justify-between'>
        <div>
            <img className='w-48' src="banlog.png" alt="logo principal" />
        </div>
        <div className='flex justify-between gap-12'>
            <img className='w-6' src="https://www.svgrepo.com/show/58809/bell.svg" alt="campana" />
            <img className='w-6' src="https://www.svgrepo.com/show/509211/question.svg" alt="question" />
            <img  className='w-6' src="https://www.svgrepo.com/show/505085/whatsapp.svg" alt="phone" />
        </div>
        </div>
        <p className='text-xl mb-4'>Buenas tardes</p>
        <div className='flex justify-end '>
        <a className='relative z-20' href=""><button className='bg-gray-900 rounded-full text-white px-6 py-1 font-semibold ' ><p>Iniciar sesion <img  className='w-4 absolute right-2 top-1/2 -translate-y-1/2' src="logim.svg" alt="" /></p></button>
        </a>
        </div>
        <a className='flex justify-between absolute translate-y-1/2 bottom-0' href=""><button className='flex items-center justify-between gap-2 rounded-full border border-black px-2 py-2 bg-white'><div ><img  className='w-12 rounded-full border-2 border-gray-400 px-2 py-2' src="https://www.svgrepo.com/show/522417/lock-closed.svg" alt="" /></div><p className='block'>inscribe a <br /> clave dinamica</p><img className='w-6 ' src="https://www.svgrepo.com/show/521477/arrow-next.svg" alt="" /></button></a>
        <img className='w-40 absolute right-0 -bottom-3 -rotate-12 z-10' src="lines.png" alt="" />
    </nav>
  )
}