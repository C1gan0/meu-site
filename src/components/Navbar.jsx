import React from "react";

const Navbar = () => {
  const menuLinks = [
    { name: "HOME", link: "#home" },
    { name: "ABOUT", link: "#about" },
    { name: "SKILLS", link: "#skills" },
    { name: "PROJECTS", link: "#projects" },
    { name: "CONTACT", link: "#contact" },
  ];
  return  (
  <nav>
<div>
  <div className="mx-7">
    <h4 className="text-4xl uppercase font-bold">
      C<span className="text">BT</span>C
    </h4>
  </div>
  <div>
    <ul>
      {
        menuLinks?.map((menu,i)=>(
          <li key={i} className="px-6 hover:text-cyan-600" >
        <a href={menu?.link}>{menu?.name}</a>
      </li>
        ))
      }
    </ul>
  </div>
</div>
  </nav>
  );
};

export default Navbar;