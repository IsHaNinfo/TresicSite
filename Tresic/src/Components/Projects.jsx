import React from 'react'

const Project = () => {
    const projects =[
        {id:1,
        title:"Enterprise application",
        image:"src/assets/images/Rent.png"
        },
        {id:2,
            title:"Enterprise application",
            image:"src/assets/images/Rent.png"
            },{id:3,
                title:"Enterprise application",
                image:"src/assets/images/Rent.png"
                }
    ]
  return (
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-12 ' id='Projects'>
        <div className='text-center md:w-1/2 mx-auto'>
            <h2 className='text-4xl text-neutralDGrey font-semibold mb-4'> Engage with our new projects </h2>
            <p className='text-sm text-neutralDGrey mb-8 md:w-3/4 mx-auto'>The Nextcent blog is the best place 
                to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
        </div>
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between'>
            {
                projects.map(project => <div key={project.id} className='mx-auto relative mb-12 cursor-pointer rounded-sm'>
                    <img src={project.image} alt=""  className='hover:scale-95 transition-all duration-300 rounded-sm'/>
                    <div className='text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0
                    right-0 -bottom-12'>
                        <h3 className='mb-3 text-neutralGrey font-semibold'>{project.title}</h3>
                    <div className='flex items-center justify-center gap-8'
                    >
                        <a href="" className='font-bold text-brandPrimary hover:text-neutral-700'>Read more</a>
                    </div>
                    </div>
                </div>)
            }
        </div>
    </div>
  )
}

export default Project