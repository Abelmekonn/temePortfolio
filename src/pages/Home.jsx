import React from 'react'
import { styles } from '../style/style'

function Home() {
    return (
        <div id='home' className='text-white py-10 relative w-[90%] mx-auto'>
            <div className='md:w-[60%] flex-col mb-3'>
                <p className='font-Poppins text-5xl font-bold text-slate-500'>I'm a</p>
                <h1 className='font-playfair text-8xl md:text-8xl font-bold mb-10'>
                    Full Stack Web Designer And Developer
                </h1>
                <button className={`${styles.button}`}>
                    <a href="#portfolio">Previous  Projects</a>

                </button>
            </div>
        </div>
    )
}

export default Home