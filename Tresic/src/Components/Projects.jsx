import React from 'react'
import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';
import { Carousel } from 'flowbite-react';

const Project = () => {
    const [openModal, setOpenModal] = useState(false);
    
  const handleReadMoreClick = (projectId) => {
    setOpenModal(true);
  };

  const handleCloseModal = (projectId) => {
    console.log(projectId);
    console.log(openModal);
    setOpenModal(false);
  };

    const projects =[
        {id:1,
        title:"Enterprise application",
        image:"src/assets/images/Rent.png",
        tech:[
            "src/assets/images/Rent.png",
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg"
        ]
        },
        {id:2,
            title:"Enterprise application",
            image:"src/assets/images/Rent.png",
            tech:[
                "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
                "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
                "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
            ]
         },
     {id:3,
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
            {
                projects.map(project => <div key={project.id} className='mx-auto relative mb-12 cursor-pointer rounded-sm'>
                     <Modal
                     
                            key={project.id}
                            show={openModal}
                            onClose={() => setOpenModal(false)}
                            >
                            <Modal.Header>{project.title}</Modal.Header>
                            <Modal.Body>
                            <div className="grid h-56 grid-cols-2 gap-4 sm:h-64 xl:h-80 2xl:h-96">
                                <Carousel>
                                {project.tech &&
                                project.tech.map((tech)=>{
                                return(<img
                                    key={tech}
                                    src={tech}
                                    alt="Docker"
                                    className="h-40 w-40 object-cover"
                                  />)
                                }
                                )}
                        </Carousel>

                            <Carousel indicators={false}>
                            {project.tech &&
                                project.tech.map((tech)=>{
                                return(<img
                                    key={tech}
                                    src={tech}
                                    alt="Docker"
                                    className="h-40 w-40 object-cover"
                                  />)
                                }
                                )}
                            </Carousel>
      </div>  
                            </Modal.Body>
                            <Modal.Footer>{/* Add content for the modal footer if needed */}</Modal.Footer>
                            </Modal>
                    <img src={project.image} alt=""  className='hover:scale-95 transition-all duration-300 rounded-sm'/>
                    <div className='text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0
                    right-0 -bottom-12'>
                        <h3 className='mb-3 text-neutralGrey font-semibold'>{project.title}</h3>
                    <div className='flex items-center justify-center gap-8'
                    >
                        <button className='font-bold text-brandPrimary hover:text-neutral-700'  onClick={() => handleReadMoreClick(project.id)}>Read more</button>
                    </div>
                    </div>
                </div>)
            }
        </div>


    
    </div>
  )
}

export default Project