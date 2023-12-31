import React from 'react'

const Services = () => {
    const services =[
        {id:1,
        title:"Web Devlopment",
        description :"Our membership management software provides full automation of membership renewals and payments",
        image:"/src/assets/images/web.png"
    },
        {id:2,
            title:"CV Writing",
            description :"Our membership management software provides full automation of membership renewals and payments",
            image:"/src/assets/images/cvwriting.png"
        }
            ,{id:3,
                title:"Graphic Design",
                description :"Our membership management software provides full automation of membership renewals and payments",
                image:"/src/assets/images/graphic.png"    
            
            },
        ]
  return (
    <div className='md:px-14 px-4 oy-16 max-w-screen-2xl mx-auto ' id='Service'>
        <div className='text-center my-8'
    >
        <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>Our Clients</h2>
        <p className='text-neutralGrey'>We have been working with some fortune 500+ clients</p>
        <div className='my-12  flex flex-wrap justify-between items-center gap-8'>
        <img src="/src/assets/icons/Icon1.png" alt=''/>
        <img src="/src/assets/icons/Icon2.png" alt=''/>
        <img src="/src/assets/icons/Icon3.png" alt=''/>
        <img src="/src/assets/icons/Icon4.png" alt=''/>
        <img src="/src/assets/icons/Icon5.png" alt=''/>
        <img src="/src/assets/icons/Icon6.png" alt=''/>
        </div>
    </div>
    {/* services  */}
    <div className='mt-20 md:w-1/2 mx-auto text-center'>
    <h2 className='text-4xl text-neutralDGrey font-semibold mb-3'>Manage your entire community in a single system</h2>
        <p className='text-neutralGrey'>Who is Nextcent suitable for?
</p>
    </div>
    {/* cards */}
    <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12'>
    {
        services.map(service =>(
            <div key={service.id} className='px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex flex-col items-center justify-center h-full'>
    <div className='bg-[#e8f5e9] mb-4 h-14 w-14 mx-auto rounded-t1-3xl rounded-br-3xl'>
      <img src={service.image} alt='' className='w-[50px] h-[50px] -ml-5'/>
    </div>
    <h4 className='text-2xl font-bold text-neutralDGrey mb-2 px-2'>{service.title}</h4>
    <p className='text-sm text-neutralDGrey'>{service.description}</p>
  </div>
        
        ))

    }
    </div>
    </div>
  )
}

export default Services