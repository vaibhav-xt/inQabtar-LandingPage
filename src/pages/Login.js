import React from 'react'
import arrowLeft from '../assets/carbon_previous-filled.svg'
import rocket from '../assets/rocket.svg'
import inQbator from '../assets/inQbator.svg'
import google from '../assets/google.svg'
import play from '../assets/play.svg'

export default function Login() {

    return (
        <div className='bg-black font-poppins text-white w-screen h-screen flex'>

            <div className="w-[1273px] h-[350px] origin-top-left rotate-[-13.66deg] fixed z-40 -translate-x-1/2 left-1/2 -translate-y-1/2 top-[40%] bg-gradient-to-r from-zinc-400 to-indigo-500 rounded-full blur-[854px]" />

            {/* Container Left  */}
            <div className='hidden  tablet:block w-full h-screen bgGradient relative'>
                <button className='flex gap-2 bg-transparent border-[1px] py-1 px-4 rounded-xl absolute top-[10%] left-[15%] z-10'>
                    <img src={arrowLeft} alt="arrow" /> Home
                </button>

                {/* Background Overlays  */}
                <div className='circle-gradient left-[15%] top-[10%]'></div>
                <div className='circle-gradient left-[55%] top-[15%]'></div>
                <div className='circle-gradient left-[15%] top-[55%]'></div>
                <div className='circle-gradient left-[15%] top-[55%]'></div>
                <div className='circle-gradient left-[55%] top-[65%]'></div>

                {/* Background Card  */}
                <div className='border w-[518px] h-[509px] rounded-xl absolute cardGradient opacity-40 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 border-opacity-25 blur-[.8px]'>

                </div>
                <h1 className='text-4xl blur-0 leading-relaxed absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-50'>Welcome to a <br /> community of <br /> learning, <br /> growing, and <br /> succeeding <br /> together.  <img src={play} alt="play" className='absolute -left-12 top-2 z-50' /></h1>
            </div>

            {/* Container Right  */}
            <div className='w-full h-screen flex justify-center items-center relative'>

                {/* Logo  */}
                <div className='flex items-center absolute z-50 -translate-x-1/2 top-[10%] left-1/2'>
                    <img src={rocket} alt="rocket" className='w-[50px] relative left-2 top-2' />
                    <img src={inQbator} alt="inQbator" className='w-[117.089px]' />
                </div>

                {/* Signup Form  */}
                <div className='flex flex-col justify-center items-center w-full md:w-auto'>
                    <h2 className='text-[30px] my-8 relative z-50'>Signup</h2>
                    <p className='text-gray pb-2 text-[12px]'>We'd love to know you are</p>
                    <div className='flex flex-col md:flex-row items-center gap-4 mt-4 md:mt-4  md:gap-8'>

                        <button name="mentor" className='relative rounded-lg text-grayText w-[175px] overflow-hidden bg-gradient-to-t from-btn-blue to-btn-pink'>
                            <span className='absolute -translate-x-1/2 top-[50%] -translate-y-1/2 left-1/2 rounded-lg z-0 block px-4 py-2 bg-black w-[171px] h-[94%]'>
                            </span>
                            <span className='z-30 block relative px-4 py-2'>Mentor</span>
                        </button>

                        <span className='text-gray'>OR</span>

                        <button name="mentee" className='relative rounded-lg text-grayText w-[175px] overflow-hidden bg-gradient-to-t from-btn-blue to-btn-pink'>
                            <span className='absolute -translate-x-1/2 top-[50%] -translate-y-1/2 left-1/2 rounded-lg z-0 block px-4 py-2 bg-black w-[171px] h-[94%]'>
                            </span>
                            <span className='z-30 block relative px-4 py-2'>Mentee</span>
                        </button>
                    </div>


                    <hr className='border-gray border-1 blur-[.8px] opacity-50  my-10 w-[238px] m-auto md:w-auto' />

                    <button className='relative rounded-lg text-[16px] w-[337px] overflow-hidden bg-gradient-to-t from-btn-blue to-btn-pink flex justify-center m-auto'>
                        <span className='absolute -translate-x-1/2 top-[50%] -translate-y-1/2 left-1/2 rounded-lg z-0 block px-4 py-2 bg-black w-[333px] h-[94%]'>
                        </span>
                        <span className='z-30 flex gap-2 relative px-4 py-2'><img src={google} alt="google icon" /> Continue With Google</span>
                    </button>
                </div>

                {/* Term & Services  */}
                <p className='text-center p-4 text-[12px] absolute bottom-[10%] -translate-x-1/2 left-1/2 w-full'><span className='text-gray'>By signing up, you agree to the</span> terms of service <span className='text-gray'>&</span> privacy  <br /> policy,<span className='text-gray'> including</span> cookie use. </p>
            </div>
        </div>
    )
}
