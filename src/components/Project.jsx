import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/imagens/project1.png";
import project2 from "../assets/imagens/project2.jpg"
import project3 from "../assets/imagens/project3.jpg"
import project5 from "../assets/imagens/project5.png"
import project_person from "../assets/imagens/project_person.png"
import "swiper/css"
import "swiper/css/pagination"


const Project = () => {
const projects =[
    {
      img: project1,
      name:'Aplicativo de Filmes' ,
      gitgub_link : '',
      live_link:''
    },
    {
      img: project2,
      name:'Pesquisar Trabalhos' ,
      gitgub_link : '',
      live_link:''
    },
    {
      img: project3,
      name:'HighKing',
      gitgub_link : '',
      live_link:''
    },
    {
      img: project5,
      name: 'Vue Country',
      gitgub_link : '',
      live_link:''
    },
  ]

  return <section id="projects" className="py-10 text-white" >
    <div className="text-center">
      <h3 className="text-4xl font-semibold">
      My <span className="text-indigo-600">Projects</span>
      </h3>
      <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
    </div>
    <br />
    <div className="flexx mas-w-6xl px-5 mx-auto items-center relative">
      <div className="lg:w-2/3 w-full">
      <Swiper 
      slidesperview={1.2} 
      spaceBetween={20}
      breakpoints={{

            768:{
              slidePerView:2
            }
          }}
          loop={true}
          autoplay={{
            delay:3000,
          }}
          pagination={{
            clickable: true,
          }}

          
      >

        <SwiperSlide>
          <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
        <img src={project1} alt="" className="rounded-lg"/>
        <h3 className="text-xl my-4">Movie App</h3>
        <div className="flex gap-3">
          <a
          href=""
          className="text-indigo-600 bg-gray-800 px-2 py-1 inline-block"
          >
            GitHub
            </a>
          <a 
          href="" 
          className="text-indigo-600 bg-gray-800 px-2 py-1 inline-block"
          >
            Live Demo
            </a>
        </div>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
  </section>;
};

export default Project;