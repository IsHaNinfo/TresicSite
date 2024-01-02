import React from 'react'
import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';
import { Carousel } from 'flowbite-react';

const Project = () => {
    const [openModal, setOpenModal] = useState(false);
    const [currentProject, setCurrentProject] = useState(null);

    const handleReadMoreClick = (projectId) => {
      setCurrentProject(projectId);
      setOpenModal(true);
    };
  
    const handleCloseModal = () => {
      setCurrentProject(null);
      setOpenModal(false);
    };


    const projects =[
        {id:1,
        title:"Shop Fushion Enterprise application",
        image:"src/assets/projects/web12.png",
        tech:[
            "src/assets/projects/web12.png",
            "src/assets/projects/web13.png",
            "src/assets/projects/web14.png",
            "src/assets/projects/web15.png",
            "src/assets/projects/web16.png",
            "src/assets/projects/web17.png"
        ]
        },
        {id:2,
            title:"Lenzz Software Project Management System", 
            image: "src/assets/projects/web1.png",
            tech:[
                " src/assets/projects/web1.png",
                "src/assets/projects/web2.png",
                "src/assets/projects/web3.png",
                "src/assets/projects/web4.png",
                "src/assets/projects/web5.png",
                "src/assets/projects/web6.png"
            ]
         },
     {id:3,
                title:"Mobile Apps",
                image: "src/assets/projects/Mobile/app.png",
                tech:[
                  "src/assets/projects/Mobile/app.png",
                  "src/assets/projects/Mobile/app 2.png",
                    
                ]
      },
      {id:4,
        title:"UI/UX Design",
        image:"src/assets/projects/UI/UI.png",
        tech:[
          "src/assets/projects/UI/UI.png",
          "src/assets/projects/UI/UI2.png",
          "src/assets/projects/UI/UI3.png",
          "src/assets/projects/UI/UI4.png",
          "src/assets/projects/UI/UI5.png",
          "src/assets/projects/UI/UI6.png",  
          "src/assets/projects/UI/UI7.png"
        ]
          
        },
        {id:5,
            title:"Enterprise application",
            image:"src/assets/images/Rent.png",
            tech:[
                "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
                "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
                "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
            ]
         },
     {id:6,
                title:"Enterprise application",
                image:"src/assets/images/Rent.png",
                tech:[
                    "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
                    "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
                    "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
                ]
      }
    ]


  return (
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-12 ' id='Portfolio'>
      <div className='text-center md:w-1/2 mx-auto'>
            <h2 className='text-4xl text-neutralDGrey font-semibold mb-4'> Engage with our new projects </h2>
            <p className='text-sm text-neutralDGrey mb-8 md:w-3/4 mx-auto'>The Nextcent blog is the best place 
                to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
        </div>
      <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between'>
        {projects.map((project) => (
          <div key={project.id} className='mx-auto relative mb-12 cursor-pointer rounded-sm'>
            <img src={project.image} alt="" className='hover:scale-95 transition-all duration-300 rounded-sm' />
            <div className='text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12'>
              <h3 className='mb-3 text-neutralGrey font-semibold'>{project.title}</h3>
              <div className='flex items-center justify-center gap-8'>
                <button className='font-bold text-brandPrimary hover:text-neutral-700' onClick={() => handleReadMoreClick(project.id)}>Read more</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Single Carousel for the clicked project */}
      <Modal show={openModal}     onClose={() => setOpenModal(false)}>
        <Modal.Header>{currentProject && projects.find((project) => project.id === currentProject)?.title}</Modal.Header>
        <Modal.Body>
          <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel>
              {currentProject &&
                projects
                  .find((project) => project.id === currentProject)
                  ?.tech.map((tech, index) => (
                    <img key={index} src={tech} alt={`Tech ${index}`} className="h-100 w-100 object-cover" />
                  ))}
            </Carousel>
          </div>
        </Modal.Body>
        <Modal.Footer>{/* Add content for the modal footer if needed */}</Modal.Footer>
      </Modal>
    </div>
  )
}

export default Project