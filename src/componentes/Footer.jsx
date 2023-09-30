import React from 'react'
import { DiReact } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandVite } from "react-icons/tb";
import { IoLogoCss3 } from "react-icons/io5";

function Footer() {
  return (
      <div className="row-end-7 mt-2">
          <footer class="bg-neutral-700 text-white ">
            <div class="flex flex-row items-center text-white h-16">
              <div className=' text-end basis-1/2'><span class=" mr-5 ">© 2023 Copyright: Tools used for this project</span></div>
              <div className='basis-1/2 flex text-center items-center'>
                <div className='group/div pt-3 w-20 flex flex-col items-center'>
                <DiReact className='text-blue-400 inline-block text-4xl rounded-full ring-2 ring-white hover:text-5xl hover:duration-300 hover:ease-in hover:bg-white'/>
                <samp className='group-hover/div:invisible text-xs'>React Js</samp>
                </div>

                <div className='group/div pt-3 w-20 flex flex-col items-center'>
                <SiTailwindcss className='text-cyan-600 inline-block text-4xl rounded-full ring-2 ring-white hover:bg-sky-950 hover:text-5xl hover:duration-300 hover:ease-in' />
                <samp className='group-hover/div:invisible text-xs'>Tailwind</samp>
                </div>

                <div className='group/div pt-3 w-20 flex flex-col items-center'>
                <TbBrandVite className='hover:bg-black hover:text-pink-500 inline-block text-4xl hover:text-5xl hover:duration-300 hover:ease-in rounded-full ring-2 ring-white'/>
                <samp className='group-hover/div:invisible text-xs'>Vite</samp>
                </div>

                <div className='group/div w-20 flex flex-col items-center pt-3'>
                <IoLogoCss3 className='text-blue-500 hover:bg-white hover:text-orange-500 inline-block text-4xl hover:text-5xl hover:duration-300 hover:ease-in rounded-full ring-2 ring-white group-hover/leter:invisible'/>
                <samp className='group-hover/div:invisible text-xs'>Css</samp>
                </div>
              </div>
            </div>
          </footer>
        </div>
  )
}

export default Footer