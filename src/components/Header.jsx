import React from 'react'

export default function Header() {
  return (
    <div className='bg-gray-100  py-12 px-6 font-light'>
        <p className='py-4'>Transacciones principales</p>
        <div className='flex justify-between'>
        <div className='flex flex-col items-center  w-[23%] h-26 bg-white px-2 py-6'><img className='w-8 ' src="https://www.svgrepo.com/show/384668/document-file-page-paper-quality.svg" alt="" /><p className='text-xs  text-center'>ver saldos y <br />movimientos</p></div>
        <div className='flex flex-col items-center  w-[23%] h-26 bg-white px-2 py-6'><img className='w-8' src="https://www.svgrepo.com/show/522614/money-send.svg" alt="" /><p className='text-xs  text-center'>transferir  <br />dinero</p></div>
        <div className='flex flex-col items-center  w-[23%] h-26 bg-white px-2 py-6'><img className='w-8' src="https://www.svgrepo.com/show/483165/credit-card.svg" alt="" /><p className='text-xs  text-center'>pagar tarjetas <br />de credito </p></div>
        <div className='flex flex-col items-center  w-[23%] h-26 bg-white px-2 py-6'><img className='w-8'  src="https://www.svgrepo.com/show/529387/bill-list.svg" alt="" /><p className='text-xs  text-center'>pagar y <br />administrar <br />facturas</p></div>
        </div>
        <p className='py-4'>Explora nuestras categorias</p>
        <div className='grid grid-cols-3 gap-10 bg-white px-6 py-6'>
            <a href=""><div className='flex flex-col items-center'><div className='w-16 h-16 p-4 rounded-full bg-violet-100 grid place-items-center'><img className='w-10' src="https://www.svgrepo.com/show/108064/shooting-target.svg" alt="" /></div>
            <p className='text-center'>Gestionar <br />dia a dia</p></div></a>
            <a href=""><div className='flex flex-col items-center'><div className='w-16 h-16 p-4 rounded-full bg-green-100 grid place-items-center '><img className='w-10' src="https://www.svgrepo.com/show/529027/home-1.svg" alt="" /></div>
            <p className='text-center'>Hogar y <br />servicios</p></div></a>
            <a href=""><div className='flex flex-col items-center'><div className='w-16 h-16 p-4 rounded-full bg-yellow-100 grid place-items-center '><img className='w-10' src="https://www.svgrepo.com/show/519848/transport.svg" alt="" /></div>
            <p className='text-center'>Transporte</p></div></a>
            <a href=""><div className='flex flex-col items-center'><div className='w-16 h-16 p-4 rounded-full bg-orange-100 grid place-items-center '><img className='w-10' src="https://www.svgrepo.com/show/529236/star.svg" alt="" /></div>
            <p className='text-center'>Para ti</p></div></a>
            <a href=""><div className='flex flex-col items-center'><div className='w-16 h-16 p-4 rounded-full bg-blue-200 grid place-items-center '><img className='w-10' src="https://www.svgrepo.com/show/308431/bills-check-bill-invoice.svg" alt="" /></div>
            <p className='text-center'>Tramites y <br />solicitudes</p></div></a>
        </div>
        </div>
  )  
}
