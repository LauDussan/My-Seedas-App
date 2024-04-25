import React from 'react'
import Image from 'next/image'

function Header(){
    const headerMenu=[
        {
            id:1,
            name:'trasporta',
            icon:'/logo-carro.jpg'
        },
        {
            id:2,
            name:'usuario',
            icon:'/logo-usuario.jpg'
        }
    ]
    return (
        <div className='p-5 pb-3 pl-10 border-b-[4px] 
        border-red-200'> 
            <div className='flex gap-24 items-center'>
                <Image src='/LOGO-SEEDAS.jpg'
                width={70} height={100}
                alt='logo'/>
                <div className='flex gap-6 items-center'>     
                    {headerMenu.map((item)=>(
                        <div className='flex gap-2 items-center'>
                            <Image src={item.icon}
                            width={17} height={17}/>
                            <h2 className='text-[14px] font-medium'>{item.name}</h2>
                        </div>    
                ))} 

                </div>
            </div> 
        </div>
    )
}

export default Header