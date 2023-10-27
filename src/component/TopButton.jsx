import React from 'react'

export default function TopButton() {
    const citites = [
        {
            id : 1,
            title : 'london'
        },
        {
            id : 2,
            title : 'sydney'
        },
        {
            id : 3,
            title : 'tokyo'
        },
        {
            id : 4,
            title : 'Toronto'
        },
        {
            id : 5,
            title : 'Paris'
        },
    ]
     
    return <div className='flex items-center justify-center my-6'>
            {citites.map((city)=>{
                <button className='flex items-center justify-center my-6'>{city.title}</button>
            })}
        </div>
    
}


