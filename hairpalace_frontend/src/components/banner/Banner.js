import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const Banner = () => {
    const [text] = useTypewriter({
      words: ["Smoothening.","Keratin.","Highlights.","Global Colour.", "Stylish Hair Cutting.", "Body Treatments.", "Multi Hair Colors.", "Nail Art.", "Beauty & Spa."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="sml:w-5/12 flex flex-col gap-10 xl:gap-20 mx-6 xl:mx-52">
      <div className="flex flex-col gap-1 lgl:gap-5 font-lib" >
        <h4 className="text-xs lgl:text-sm text-white">WELCOME TO OUR WORLD</h4>
        <p className="text-2xl mdl:text-4xl lgl:text-5xl font-bold text-white">
          Our Services <span className="text-designColor capitalize">Includes-</span>
        </p>
        <h2 className="text-gol text-2xl lgl:text-4xl font-bold">
          <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-xs pt-4 lgl:p-0 mdl:text-base font-bodyFont leading-6 tracking-wide text-white">
            Welcome to The Hair Palace London -- <span className='text-gol'>Luxary Salon</span><br/>
            At Hair Palace, we believe that every hairstyle tells a unique story. Our skilled and experienced barbers are dedicated to providing you with top-notch haircuts and grooming services that leave you looking and feeling your best.
        </p>
      </div>
      <Media />
    </div>
  );
}

export default Banner;