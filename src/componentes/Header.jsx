import React from 'react'
import logo from '../assets/img/logo6.jpg'
import { useLocation } from 'react-router-dom'


function Header() {
  const location=useLocation()
  const actual =location.pathname
  console.log(actual)
  const listTitle = {
    '/':"Wellcome..!!",
    '/my-portfolio':"Wellcome..!!",
    '/biography':"Page Biography",
    '/knowledge':"Page Knowledge",
    '/aplications':"Page Aplications",
    '/contact':"Page Contact",
  }

  return (
    <div className='m-4 px-4 drop-shadow-lg backdrop-brightness-50 rounded-md grid grid-cols-3'>
        <div className='self-center py-3'>
          <img src={logo} className='h-12 w-16 md:h-16 md:w-20 rounded-xl'/>
        </div>
        <div className='col-span-2 text-center self-center'>
          <h1 className='text-yellow-400 text-4xl font-bold italic font-serif md:text-6xl'>
            {listTitle[actual]}
          </h1>
        </div>

    </div>
  )
}

export default Header