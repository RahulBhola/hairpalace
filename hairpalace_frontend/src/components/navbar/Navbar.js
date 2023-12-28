import React, { useState } from 'react';
import { IoMdCall } from "react-icons/io";
import { LuClock3 } from "react-icons/lu";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
// import { Link } from "react-scroll";
import {Link } from "react-router-dom";
import Banner from "../banner/Banner";
import { bannerImg } from "../../assets/index";
import { MdOutlineMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import Contact from "../contact/Contact";
import Tech from "../balls/Tech";

const Navbar = () => {
    const [showMenu,setShowMenu] = useState(false);
    console.log(showMenu);
  return (
    <div>
    <div style={{ backgroundImage: `url(${bannerImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} >
    <div className=' bg-stone-900 bg-opacity-50'>
        {/*<img src={bannerImg} alt="bannerImg" className='w-full h-full absolute mix-blend-overlay' />*/}
        <div className="flex flex-col items-center">
            <div className="mdl:hidden flex w-full p-2 justify-center bg-bodyColor">
                <ul>
                    <li className="flex flex-row items-center gap-6 cursor-pointer">
                        <FaFacebook className='text-gol text-xl hover:text-red-500 duration-300' onClick={()=> window.open("https://www.facebook.com/hairpalaceludhiana","_blank","noopener noreferrer")}/>
                        <FaInstagram className='text-gol text-xl hover:text-red-500 duration-300' onClick={()=> window.open("https://www.instagram.com/thehairpalaceludhiana/","_blank","noopener noreferrer")} />
                        <FaLocationDot className='text-gol text-xl hover:text-red-500 duration-300' onClick={()=> window.open("https://www.google.com/maps/dir/30.8559344,75.8392408/The+Hair+Palace+Salon,+Ludhiana+location/@30.8656168,75.8328008,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x391a83ebea0dccc9:0x2b4ab1ac4f38a521!2m2!1d75.8398072!2d30.8750877?hl=en_GB&entry=ttu","_blank","noopener noreferrer")}/>
                    </li>
                </ul>
            </div>
            <div className="hidden mdl:inline-flex p-1 lgl:p-3 gap-2 flex flex-col lgl:flex-row items-center xl:space-x-96 rounded-b-3xl bg-white">
                <ul className="flex  flex-col mdl:flex-row mdl:px-8 items-center mdl:gap-3 lgl:gap-0">
                    <li className="flex flex-row items-center gap-3">
                        <IoMdCall className='text-gol text-xl'/>
                        <p className='font-cor'>Call Us:</p>
                        <a href="tel:9803922728" className="text-sm font-lib">98039-22728</a>
                    </li>
                    <li className="flex flex-row items-center gap-1 mdl:gap-3 mx-1 lgl:mx-9">
                        <LuClock3 className='text-gol text-xl'/>
                        <p className='font-cor '>Opening Hour :</p>
                        <p className='font-lib text-sm'>EveryDay, 10 AM - 10 PM</p>
                    </li>
                </ul>
                <ul className='flex flex-row lgl:pr-8'>
                    <li className="flex flex-row items-center gap-6 cursor-pointer">
                        <FaFacebook className='text-gol text-xl hover:text-red-500 duration-300' onClick={()=> window.open("https://www.facebook.com/hairpalaceludhiana","_blank","noopener noreferrer")}/>
                        <FaInstagram className='text-gol text-xl hover:text-red-500 duration-300' onClick={()=> window.open("https://www.instagram.com/thehairpalaceludhiana/","_blank","noopener noreferrer")} />
                        <FaLocationDot className='text-gol text-xl hover:text-red-500 duration-300' onClick={()=> window.open("https://www.google.com/maps/dir/30.8559344,75.8392408/The+Hair+Palace+Salon,+Ludhiana+location/@30.8656168,75.8328008,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x391a83ebea0dccc9:0x2b4ab1ac4f38a521!2m2!1d75.8398072!2d30.8750877?hl=en_GB&entry=ttu","_blank","noopener noreferrer")}/>
                    </li>
                </ul>
            </div>
        </div>
        <div>
            <span onClick={() =>  setShowMenu(!showMenu)} className="text-gol bg-bodyColor absolute top-12 right-1 text-xl lg:hidden bg-black w-12 h-12 flex items-center justify-center rounded-full cursor-pointer hover:text-designColor duration-300"> <MdOutlineMenu /> </span>
            {
            showMenu && (
                <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
                    <div >
                        <div className='font-bold flex flex-col gap-8 pt-8 items-center justify-between bg-black-700 relative'>
                            <div className='font-cor xl:mx-48 p-4'>
                                <p className="text-2xl text-gol">THE HAIR PALACE</p>
                                <span className='text-white'> LONDON</span>
                            </div>
                            <div >
                                <ul className="font-mon uppercase text-center flex flex-col gap-14 text-white cursor-pointer">
                                <li className='cursor-pointer hover:text-gol duration-300'> Home</li>
                                <li className='cursor-pointer hover:text-gol duration-300'><Link to="contact">Contact</Link></li>
                                <li className='cursor-pointer hover:text-gol duration-300'><Link to="service">Services</Link></li>
                                <li className='cursor-pointer hover:text-gol duration-300'><Link to="signup">SignIn</Link></li>
                                <li className='cursor-pointer hover:text-gol duration-300'>
                                <Link to="login">LogIn</Link>
                                </li>
                                </ul>
                            </div>
                            <span onClick={()=> setShowMenu(false)} className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cuursor-pointer">
                                <IoCloseSharp />
                            </span>
                        </div>
                    </div>
                </div>
                )
            }
            <div className='font-cor lgl:hidden xl:mx-48 p-5'>
                <p className="text-3xl text-gol">THE HAIR PALACE</p>
                <span className='text-white'> LONDON</span>
            </div>
            <div className='hidden lgl:inline-flex items-center'>
                <div className='font-cor xl:mx-48 p-5'>
                    <p className="text-gol text-3xl text-gol">THE HAIR PALACE</p>
                    <span className='text-white'> LONDON</span>
                </div>
                <div>
                    <ul className="font-bold flex font-mon uppercase cursor-pointer gap-4 xl:gap-16 text-white">
                        <li className='cursor-pointer hover:text-gol duration-300'> Home</li>
                        <li className='cursor-pointer hover:text-gol duration-300'><Link to="contact">Contact</Link></li>
                        <li className='cursor-pointer hover:text-gol duration-300'><Link to="service">Services</Link></li>
                        <li className='cursor-pointer hover:text-gol duration-300'><Link to="/signup">SignIn</Link></li>
                        <li className='cursor-pointer hover:text-gol duration-300'>
                        <Link to="/login">LogIn</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='h-max pt-10 xl:pt-24 pb-24'>
           <Banner/>
        </div> 
    </div>
    </div>
    <Tech />
    <Contact />

    </div>
    );
}
    
export default Navbar;
