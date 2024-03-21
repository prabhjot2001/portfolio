import React from 'react'
import { experience } from '../_data/data'

const ExperienceCard = () => {
    return (
        <>
            <div className='w-full text-[#222222]'>
                {
                    experience.map((item, i) => <div key={i} className='mb-5 border-l-2 border-gray-600 p-5 text-[#222222]'>
                        <p className='uppercase font-semibold'>{item.organization} ON <span>{item.duration}</span></p>
                        <h2 className='uppercase  text-xl sm:text-2xl font-semibold '>{item.position}</h2>
                        <br />
                        <div className='relative'>
                            {
                                item.work.map((item, i) => <ul key={i} className=''>
                                    <li className='text-xl'>◼ {item}</li>
                                    <br />
                                </ul>)
                            }
                        </div>
                    </div>)
                }

            </div>
        </>
    )
}

export default ExperienceCard