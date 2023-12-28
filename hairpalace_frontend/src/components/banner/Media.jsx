import React from 'react'
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Media = () => {

  return (
    <div className="flex flex-col xl:flex-row gap-8 lgl:gap-5 justify-between">
        <div>
          <h2 className="uppercase font-cor mb-4 text-white">
            Find US ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon bg-stone-800 text-gol" onClick={()=> window.open("https://www.facebook.com/hairpalaceludhiana","_blank","noopener noreferrer")} >
              <FaFacebook />
            </span>
            <span className="bannerIcon bg-stone-800 text-gol" onClick={()=> window.open("https://www.instagram.com/thehairpalaceludhiana/","_blank","noopener noreferrer")}>
            <FaInstagram />
            </span>
            <span className="bannerIcon bg-stone-800 text-gol" onClick={()=> window.open("https://www.google.com/maps/dir/30.8559344,75.8392408/The+Hair+Palace+Salon,+Ludhiana+location/@30.8656168,75.8328008,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x391a83ebea0dccc9:0x2b4ab1ac4f38a521!2m2!1d75.8398072!2d30.8750877?hl=en_GB&entry=ttu","_blank","noopener noreferrer")}>
            <FaLocationDot />
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-cor mb-4 text-white">
            DOWNLOAD OUR BROCHURE
          </h2>
          <div className="flex gap-4">
            <a className="bannerDownload bg-stone-800 font-mon text-gol" href="brochure.pdf" download=".pdf">
              Download
            </a>
          </div>
        </div>
      </div>
  )
}

export default Media;