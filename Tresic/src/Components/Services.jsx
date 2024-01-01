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
        title:"Mobile App Development",
        description :"We make technology disappear, leaving only delight: Creating intuitive and enjoyable mobile experiences",
        image:"/src/assets/images/Mobile.png"    
    
    },
    {id:3,
        title:"UI/UX Design",
        description :"Simplify the complex, elevate the mundane. We make technology disappear, leaving only delight",
        image:"/src/assets/images/uiux.png"    
    
    },
        {id:4,
            title:"CV Writing",
            description :"Land your dream job: Our expert CV writers will help you craft a resume that gets noticed",
            image:"/src/assets/images/cvwriting.png"
        }
            ,{id:5,
                title:"Graphic Design",
                description :"Make a lasting impression: Our eye-catching designs will help you stand out from the competition",
                image:"/src/assets/images/graphic.png"    
            
            },
            ,,
            {id:6,
                title:"Acedamic Report ",
                description :"Simplifying the complex, elevating the mundane: Making research accessible and impactful.",
                image:"/src/assets/images/Acedamic.png"    
            
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
            <div className="grid h-56 grid-cols-2 gap-4 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel>
        <img
          src="/src/assets/images/Java.png"
          alt="Java"
          className="h-40 w-40 object-cover"
        />
        <img
          src="/src/assets/images/React.png"
          alt="React"
          className="h-40 w-40 object-cover"
        />
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
          alt="JavaScript"
          className="h-40 w-40 object-cover"
        />
        <img
          src="/src/assets/images/C.png"
          alt="C"
          className="h-40 w-40 object-cover"
        />
        <img
          src="/src/assets/images/Css.png"
          alt="CSS"
          className="h-40 w-40 object-cover"
        />
      </Carousel>

      <Carousel indicators={false}>
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
          alt="HTML5"
          className="h-40 w-40 object-cover"
        />
        <img
          src="/src/assets/images/Mysql.png"
          alt="MySQL"
          className="h-40 w-40 object-cover"
        />
        <img
          src="/src/assets/images/php.png"
          alt="PHP"
          className="h-40 w-40 object-cover"
        />
        <img
          src="/src/assets/images/mongodb.png"
          alt="MongoDB"
          className="h-40 w-40 object-cover"
        />
        <img
          src="https://camo.githubusercontent.com/0568e2de313626b2bd9b96f326941b012d45e9a4db1a23aa78bd8036207e57f8/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f7461696c77696e646373732f7461696c77696e646373732d69636f6e2e737667"
          alt="Vue.js"
          className="h-40 w-40 object-cover"
        />
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
          alt="Bootstrap"
          className="h-40 w-40 object-cover"
        />
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg"
          alt="Docker"
          className="h-40 w-40 object-cover"
        />
      </Carousel>
    </div>
            </div>

    </div>
  )
}

export default Services