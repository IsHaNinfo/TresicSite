import React from "react";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { Carousel } from "flowbite-react";
import web14 from "../assets/projects/web14.png"
import web12 from "../assets/projects/web12.png"
import web13 from "../assets/projects/web13.png"
import web16 from "../assets/projects/web16.png"
import web17 from "../assets/projects/web17.png"
import web18 from "../assets/projects/web18.png"
import web19 from "../assets/projects/web19.png"
import app from "../assets/projects/Mobile/app.png"
import app2 from "../assets/projects/Mobile/app 2.png"
import web7 from "../assets/projects/web (7).png"
import web8 from "../assets/projects/web (8).png"
import web9 from "../assets/projects/web (9).png"
import shopify1 from "../assets/projects/Spopify/img_1.png"
import shopify2 from "../assets/projects/Spopify/img_2.png"
import shopify3 from "../assets/projects/Spopify/img_3.png"
import shopify4 from "../assets/projects/Spopify/img_4.png"
import shopify5 from "../assets/projects/Spopify/img_5.png"
import UI1 from "../assets/projects/UI/UI.png"
import UI2 from "../assets/projects/UI/UI2.png"
import UI3 from "../assets/projects/UI/UI3.png"
import UI4 from "../assets/projects/UI/UI4.png"
import UI5 from "../assets/projects/UI/UI5.png"
import UI6 from "../assets/projects/UI/UI6.png"
import UI7 from "../assets/projects/UI/UI7.png"

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

  const projects = [
    {
      id: 1,
      title: "Shop Fushion Enterprise application",
      image:web14,
      tech: [
        web14,
        web12,
        web13,
        web16,
        web17,

      ],
    },
    {
      id: 2,
      title: "Project Management Platform",
      image: web18,
      tech: [web18, web19],
    },
    {
      id: 3,
      title: "Mobile App Development",
      image: app,
      tech: [
        app,
        app2,
      ],
    },
    {
      id: 4,
      title: "Power Astronova",
      image:web7,
      tech: [
        web7,
        web8,
        web9,
      ],
    },
    {
      id: 5,
      title: "Wordpress/Spopify",
      image: shopify1,
      tech: [
        shopify1,
        shopify2,
        shopify3,
        shopify4,
        shopify5,
      ],
    },
    {
      id: 6,
      title: "UI/UX Design",
      image: UI1,
      tech: [
        UI1,
        UI2,
        UI3,
        UI4,
        UI5,
        UI6,
        UI7,
      ],
    },
  ];

  return (
    <div
      className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12 "
      id="Portfolio"
    >
      <div className="text-center md:w-1/2 mx-auto">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-4">
          {" "}
          Engage with our new projects{" "}
        </h2>
        <p className="text-sm text-neutralDGrey mb-8 md:w-4/4 mx-auto">
          Welcome to our digital space where creativity meets innovation. At
          Tresic Technologies we're passionate about crafting exceptional
          experiences and solutions that leave a lasting impact. With a blend of
          expertise, dedication, and forward-thinking strategies, we strive to
          exceed expectations, pushing boundaries to deliver results that
          resonate. Explore our portfolio to witness the fusion of artistry and
          technology, driving success for our clients and inspiring the future
          of digital excellence.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between">
        {projects.map((project) => (
          <div
            key={project.id}
            className="mx-auto relative mb-12 cursor-pointer rounded-sm"
          >
            <img
              src={project.image}
              alt=""
              className="hover:scale-95 transition-all duration-300 rounded-sm"
            />
            <div className="text-center px-2 py-3 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12">
              <h3 className="mb-3 text-neutralGrey font-semibold">
                {project.title}
              </h3>
              <div className="flex items-center justify-center gap-8">
                <button
                  className="text-brandPrimary hover:text-neutral-400"
                  onClick={() => handleReadMoreClick(project.id)}
                >
                  View more
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Single Carousel for the clicked project */}
      <Modal
        show={openModal}
        onClose={() => setOpenModal(false)}
        style={{ top: "5%" }}
      >
        <Modal.Header>
          <span cla>
            {currentProject &&
              projects.find((project) => project.id === currentProject)?.title}
          </span>
        </Modal.Header>
        <Modal.Body>
          <div className="h-56 sm:h-30 xl:h-80 2xl:h-96">
            <Carousel>
              {currentProject &&
                projects
                  .find((project) => project.id === currentProject)
                  ?.tech.map((tech, index) => (
                    <img
                      key={index}
                      src={tech}
                      alt={`Tech ${index}`}
                      className="h-100 w-100 object-cover"
                    />
                  ))}
            </Carousel>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Project;
