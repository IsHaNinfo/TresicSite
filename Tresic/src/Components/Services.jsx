import React from 'react'
import { Carousel } from 'flowbite-react';
const Services = () => {
    const services =[
        {id:1,
        title:"Web Devlopment",
        description :"Your vision, our code: We collaborate with you to create a website that perfectly reflects your brand",
        image:"/src/assets/images/web.png"
    },
        {id:2,
            title:"CV Writing",
            description :"Land your dream job: Our expert CV writers will help you craft a resume that gets noticed",
            image:"/src/assets/images/cvwriting.png"
        }
            ,{id:3,
                title:"Graphic Design",
                description :"Make a lasting impression: Our eye-catching designs will help you stand out from the competition",
                image:"/src/assets/images/graphic.png"    
            
            },
            ,{id:4,
                title:"UI/UX Design",
                description :"Simplify the complex, elevate the mundane. We make technology disappear, leaving only delight",
                image:"/src/assets/images/uiux.png"    
            
            },
            {id:5,
                title:"Acedamic Report ",
                description :"Simplify the complex, elevate the mundane. We make technology disappear, leaving only delight",
                image:"/src/assets/images/uiux.png"    
            
            },
            {id:6,
                title:"Mobile App Development",
                description :"Simplify the complex, elevate the mundane. We make technology disappear, leaving only delight",
                image:"/src/assets/images/uiux.png"    
            
            },
        ]
  return (
    <div className='md:px-14 px-4 oy-16 max-w-screen-2xl mx-auto ' id='Service'>
       
    {/* services  */}
    <div className='mt-20 md:w-1/2 mx-auto text-center'>
    <h2 className='text-4xl text-neutralDGrey font-semibold mb-3'>Manage your entire community in a single system</h2>
        <p className='text-neutralGrey'>Who is Tresic suitable for?
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
                <div className='text-center my-8'>
            <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>Techstacks we work with</h2>
            <p className='text-neutralGrey text-1xl'>We’re constantly exploring new and emerging technologies to ensure our international clients receive the most innovative digital products</p>
            <div className="grid h-56 grid-cols-2 gap-2 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
      <img src="/src/assets/images/Java.png" alt="Java" className="h-24 w-24 sm:h-24 sm:w-24 md:h-32 md:w-32 lg:h-48 lg:w-48 xl:h-64 xl:w-64 object-cover" />
      <img src="/src/assets/images/React.png" alt="Java" className="h-16 w-16 sm:h-24 sm:w-24 md:h-32 md:w-32 lg:h-48 lg:w-48 xl:h-64 xl:w-64 object-cover" />
      <img src="/src/assets/images/Node.png" alt="Java" className="h-16 w-16 sm:h-24 sm:w-24 md:h-32 md:w-32 lg:h-48 lg:w-48 xl:h-64 xl:w-64 object-cover" />
      <img src="/src/assets/images/spring.png" alt="Java" className="h-16 w-16 sm:h-24 sm:w-24 md:h-32 md:w-32 lg:h-48 lg:w-48 xl:h-64 xl:w-64 object-cover" />
      <img src="/src/assets/images/Html.png" alt="Java" className="h-16 w-16 sm:h-24 sm:w-24 md:h-32 md:w-32 lg:h-48 lg:w-48 xl:h-64 xl:w-64 object-cover" />

      </Carousel>
      <Carousel indicators={false}>
      <img src="/src/assets/images/Css.png" alt="Java" className="h-16 w-16 sm:h-24 sm:w-24 md:h-32 md:w-32 lg:h-48 lg:w-48 xl:h-64 xl:w-64 object-cover" />
      <img src="/src/assets/images/C.png" alt="Java" className="h-16 w-16 sm:h-24 sm:w-24 md:h-32 md:w-32 lg:h-48 lg:w-48 xl:h-64 xl:w-64 object-cover" />
      <img src="/src/assets/images/Mysql.png" alt="Java" className="h-16 w-16 sm:h-24 sm:w-24 md:h-32 md:w-32 lg:h-48 lg:w-48 xl:h-64 xl:w-64 object-cover" />
      <img src="/src/assets/images/mongodb.png" alt="Java" className="h-16 w-16 sm:h-24 sm:w-24 md:h-32 md:w-32 lg:h-48 lg:w-48 xl:h-64 xl:w-64 object-cover" />
      <img src="/src/assets/images/tailwind.png" alt="Java" className="h-16 w-16 sm:h-24 sm:w-24 md:h-32 md:w-32 lg:h-48 lg:w-48 xl:h-64 xl:w-64 object-cover" />

      </Carousel>
    </div>
            </div>

    </div>
  )
}

export default Services