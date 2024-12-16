import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/TidbitsJS/Summize", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Al-Powered Summarize Articles with <br className='max-md:hidden' />
        <span className='text-[#243c5a]'>OpenAI GPT-4</span>

      </h1>
      <h2 className='desc'>
      Permudah pengalaman membaca Anda dengan Summize, sebuah alat ringkasan artikel sumber terbuka yang mampu mengubah artikel panjang menjadi ringkasan yang jelas, padat, dan mudah dipahami.
      </h2>
    </header>
  );
};

export default Hero;