import React from 'react';
import { aboutArray } from './AboutArray';
import { Button } from '../button/Button';

export const AboutView = () => {
  return (
    <div className="bg-slate-500 rounded-lg p-16 max-w-[90rem] mx-auto">
      <div className="text-white text-[20px] font-bold">
        Get In Touch With Us
      </div>
      <div className="text-gray-300">
        For More Information About Our Product & Services. Please Feel Free To
        Drop Us<br></br> An Email. Our Staff Always Be There To Help You Out. Do
        Not Hesitate!
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 pt-16">
        <div className="flex flex-col items-start gap-8 text-white justify-center">
          {aboutArray.map((item) => (
            <div className="flex flex-col gap-2">
              <div className="w-10">
                <img src={item.icon} alt="" />
              </div>
              <div className="flex flex-col text-left gap-2">
                <div>{item.title}</div>
                {item.description.map((item) => (
                  <div>{item}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col text-left mx-auto gap-5 text-white">
          <div className="flex flex-col gap-3">
            <div>Your name</div>
            <div>
              <input
                placeholder="Your name"
                className="rounded-xl p-3 bg-gray-400 text-white placeholder:text-white"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div>Email address</div>
            <div>
              <input
                placeholder="Email address"
                className="rounded-xl p-3 bg-gray-400 text-white placeholder:text-white"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div>Subject</div>
            <input
              placeholder="Subject"
              className="rounded-xl p-3 bg-gray-400 text-white placeholder:text-white"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div>Message</div>
            <div>
              <input
                placeholder="Message"
                className="rounded-xl p-3 bg-gray-400 text-white placeholder:text-white"
              />
            </div>
          </div>
          <div className="flex items-start">
            <Button text="Submit" className="!bg-blue-500" />
          </div>
        </div>
      </div>
    </div>
  );
};
