import React from "react";
import Title from '../contact/Title';

import { BallCanvas } from "./index.js";
import { technologies } from "./index.js";

const Tech = () => {
  return (
    <div id="service">
      <div className="w-full h-auto bg-slate-950 text-lightText px-4">
        <div className="max-w-screen-xl py-12 lgl:py-24 border-b-[1px] border-b-white mx-auto">
          <div className="flex justify-center items-center text-center">
            <Title title="EMPLOYEE" des="OUR SERVICES" />
          </div>
          <div className='flex flex-row flex-wrap justify-center gap-10'>
            {technologies.map((technology) => (
              <div className='w-28 h-28' key={technology.name}>
                <BallCanvas icon={technology.icon} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
