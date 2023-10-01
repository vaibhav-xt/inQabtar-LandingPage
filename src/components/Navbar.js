import React from 'react'
import rocket from '../assets/rocket.svg'
import inQbatar from '../assets/inQbator.svg'
import goal from '../assets/goal.svg'
import toggle from '../assets/toggle.svg'

export default function Navbar(props) {
    return (
        <header className='bg-black text-white font-poppins h-[100px] flex items-center justify-between'>
            <nav className='w-[90%] m-auto flex items-center justify-between'>
                <a className='flex z-50' href='/'>
                    <img src={rocket} alt="rocket" className='w-[45px]' />
                    <img src={inQbatar} alt="inQbatar" className='w-[105] -ml-2' />
                </a>
                <div className='flex md:gap-8'>
                    <div className='flex items-center gap-1 text-[16px] relative md:top-2'>
                        <img src={goal} alt="goal" />
                        <span>{props.profile}</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p className='hidden md:block w-[40px] h-[40px] bg-gray opacity-50 rounded-full'>
                            <img src="w-full h-full" alt="" />
                        </p>
                        <p className='hidden md:block'>Jyoti Prasad Mukherjee</p>
                        <img src={toggle} alt="drop-down" className='cursor-pointer' />
                    </div>
                </div>
            </nav>
        </header>
    )
}
