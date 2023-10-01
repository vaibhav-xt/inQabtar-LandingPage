import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../assets/tabler_home.svg'
import session from '../assets/session.svg'
import profile from '../assets/gg_profile.svg'
import message from '../assets/message.svg'
import progress from '../assets/prgoress.svg'
import task from '../assets/clarity_tasks-line.svg'
import gift from '../assets/gift.svg'
import help from '../assets/help.svg'
import copy from '../assets/ci_copy.svg'

export default function Mentors() {
    return (
        <>
            {/* Ellipse Overlay */}
            <div className="fixed -translate-x-1/2 -translate-y-1/2 top-1/3 left-[10%] w-[1113.78px] h-[503.03px] origin-top-left rotate-[-21.29deg] bg-violet-700 rounded-full blur-[300px]" />
            <div className="fixed -translate-x-1/2 -translate-y-1/2 top-[110%] left-[85%] w-[1113.78px] h-[503.03px] origin-top-left rotate-[-21.29deg] bg-violet-700 rounded-full blur-[300px] z-50" />

            {/* Navbar  */}
            <Navbar profile="Mentors" />

            {/* Main  */}
            <main className='w-screen h-min-[calc(100vh-100px)] bg-black text-white'>
                <div className='w-[95%] xl:w-[89%] m-auto flex justify-between relative gap-4 pt-10'>

                    {/* Side Bar  */}
                    <div className='flex-shrink-0 md:w-[200px] relative border-r border-white border-opacity-20 h-[calc(100vh-140px)] z-10'>
                        <ul className='w-full flex flex-col gap-4 justify-center md:justify-start pr-2'>
                            <li className='bg-black px-4 py-3 rounded-xl'><a href="/" className='flex gap-2'> <img src={Home} alt="home" /> <span className='hidden md:block'>Home</span></a></li>
                            <li className='px-4 py-3 rounded-xl'><a href="/" className='flex gap-2'> <img src={session} alt="session" /> <span className='hidden md:block'>Session list</span></a></li>
                            <li className='px-4 py-3 rounded-xl'><a href="/" className='flex gap-2'> <img src={profile} alt="profile" /> <span className='hidden md:block'>My Profile</span></a></li>
                            <li className='px-4 py-3 rounded-xl'><a href="/" className='flex gap-2'> <img src={message} alt="message" /> <span className='hidden md:block'>My Messages</span></a></li>
                            <li className='px-4 py-3 rounded-xl'><a href="/" className='flex gap-2'> <img src={progress} alt="progress" /> <span className='hidden md:block'>Mentees Progress</span></a></li>
                            <li className='px-4 py-3 rounded-xl'><a href="/" className='flex gap-2'> <img src={task} alt="tasks" /> <span className='hidden md:block'>Given Tasks</span></a></li>
                        </ul>
                        <ul className='w-full flex flex-col gap-4 justify-start pr-2 absolute bottom-0 pb-4 border-t border-white border-opacity-20 pt-4'>
                            <li className='p-4 rounded-xl'><a href="/" className='flex gap-2'> <img src={gift} alt="home" /> <span className='hidden md:block'>Invite and earn!</span></a></li>
                            <li className='p-4 rounded-xl'><a href="/" className='flex gap-2'> <img src={help} alt="home" /> <span className='hidden md:block'>Need help ?</span></a></li>
                        </ul>
                    </div>

                    {/* Left Bar  */}
                    <div className='w-[100%] h-ful flex flex-shrink-2 justify-between'>
                        <h1 className='text-[24px] p-8'>Welcome, Jyoti Prasad Mukherjee</h1>
                        <aside className='hidden lg:block w-[300px] flex-shrink-0 border-l border-white border-opacity-20 px-4'>
                            <div className="w-[280px] h-[350px] mt-10 ml-4 p-8 rounded-xl border border-white border-opacity-20 flex-col justify-start items-start gap-3 inline-flex">
                                <div className="flex-col justify-start items-start gap-4 flex">
                                    <div className="flex-col justify-start items-start gap-4 flex">
                                        <div className="text-white text-base font-normal font-['Poppins']">Need Assistance ?</div>
                                        <div className="w-[189px] text-neutral-400 text-xs font-normal font-['Poppins']">Please don't hesitate to contact your designated point of contact (POC) if you require help or have any inquiries.</div>
                                    </div>
                                    <div className="flex-col justify-start items-start gap-3 flex">
                                        <div className="text-white text-xs font-normal font-['Poppins']">Bhavya Kalra</div>
                                        <div className="justify-center items-center gap-2">
                                            <div className="text-neutral-400 text-grayText flex gap-2 cursor-pointer">+918987653489 <img src={copy} alt="copy" /></div>
                                            <div className="w-5 h-5 relative" />
                                        </div>
                                    </div>
                                </div>
                                <p className="text-neutral-400 text-grayText text-center w-full">Or</p>
                                <button className='relative rounded-lg text-grayText w-[220px] h-[80px] overflow-hidden bg-gradient-to-tr from-btn-blue from-70% to-btn-pink'>
                                    <span className='absolute -translate-x-1/2 top-[50%] -translate-y-1/2 left-1/2 rounded-lg z-0 block px-4 py-2 bg-black w-[216px] h-[94%]'>
                                    </span>
                                    <span className='z-30 flex gap-2 relative text-grayText px-8 py-4'>Continue With Google <img src={message} alt="google icon" /></span>
                                </button>
                            </div>
                        </aside>
                    </div>
                </div>
            </main>
        </>
    )
}
