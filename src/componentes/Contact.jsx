import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {service, template, userid} from "../assets/datas/emailjs";
import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";

function Contact() {

  const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(service, template, form.current, userid)
        .then((result) => {
            console.log(result.text);
            //form.current.reset()
            formul.reset()
        }, (error) => {
            console.log(error.text);
        });
    };

    const insta="https://www.instagram.com/edwin_cori/"
    const face="https://www.facebook.com/edy.coriquispe"
    const linke="https://www.linkedin.com/in/edwin-cori-2a7421213/"

  return (
  <>
    <div className='text-center mt-5'>
      <h1 className='text-5xl font-bold italic font-sans '>Contact Me..!!</h1>
      <h1 className='text-xl font-bold italic font-sans mt-3'>Do you need a developer to help you? Send me an email to discuss it in more detail.</h1>
      <div className='mt-6 mx-8 bg-white h-52 rounded-t-xl'>
        <form ref={form} onSubmit={sendEmail} id='formul'>
            <div className='grid grid-cols-2 gap-3 py-5'>
              <div className='flex flex-col items-center'>
                <label className='text-gray-500'>Name</label>
                <input type="text" name="user_name" autoComplete='off' className='pl-2 w-4/5 h-7 border-2 border-b-slate-500' placeholder=' Your Name'/>
              </div>
              <div className='flex flex-col items-center'>
                <label className='text-gray-500'>Email Address</label>
                <input type="email" name="user_email" className='pl-2 w-4/5 h-7 border-2 border-b-slate-500' placeholder=' Your email'/>
              </div>
            </div>

            <div className='mt-6 grid grid-cols-1 px-5'>
              <label className='text-gray-500'>Message</label>
              <div className='flex place-content-center'>
                <textarea name="message" rows="2" cols="60" className='p-2 border-2 border-b-slate-500'/>
                <button type="submit" className='ml-5 text-white bg-zinc-500 hover:bg-black shadow-lg shadow-slate-800 w-20 h-9 self-center rounded-md'> Send </button>
              </div>
            </div>
        </form>
      </div>
    </div>

    <div className='flex gap-4 h-14 mx-8 rounded-b-xl bg-white justify-center items-center'>
        <div className='p-1 rounded-lg bg-gradient-to-br from-fuchsia-500 via-red-600 to-orange-400'>
          <a href={insta} target="_blank">
            <GrInstagram className='text-4xl text-white'/>
          </a>
        </div>
        <div className='p-1 rounded-lg bg-blue-900 text-center'>
          <a href={face} target="_blank">
            <FaFacebookF className='text-4xl text-white'/>
          </a>
        </div>
        <div className='p-1 rounded-lg bg-blue-500 text-center'>
          <a href={linke} target="_blank">
            <FaLinkedinIn className='text-4xl text-white'/>
          </a>
        </div>
        <div className='p-1 rounded-lg bg-black text-center'>
          <a href="#" target="_blank">
            <TbBrandGithubFilled className='text-4xl text-white'/>
          </a>
        </div>
      </div>
    </>
  )
}

export default Contact