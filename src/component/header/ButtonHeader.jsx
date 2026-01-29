import React, { useEffect, useState } from 'react'
import { IoMdMenu } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";
import { Link, useLocation } from 'react-router-dom';
import { FaShareFromSquare } from "react-icons/fa6";
import { IoWomanSharp } from "react-icons/io5";
import "./header.css";
  export default function ButtonHeader() {
    const [isactive,setactive]=useState(false);
    const localtion=useLocation();
    const [catagorys,setcatagorys]=useState([]);
    useEffect(()=>{
      fetch('../laptops.json')
      .then((res)=>res.json()) 
      .then((data)=>setcatagorys(data))
    },[]);
   const links=[
    {title:"Home",link:"/"},
    {title:"About",link:"/"},
    {title:"Comment",link:"/"},
    {title:"Phones",link:"/"},
    {title:"Contact",link:"/"},
   ];
  return (
    <div className='btn-header'>
      <div className='container'>
        <nav className='nav'>

          <div className="Catogory_nav">
            <div className="catogory_btn"  onClick={()=>{ setactive(!isactive) }}>
            <IoMdMenu />
             <p>Show Category</p>
             <MdArrowDropDown />
            </div>
            <div className="catagory_nav_list "  id={isactive?"active":""} >     
            <div>
                {catagorys.map((catagory)=>(
                <Link key={catagory.id}  to={catagory.slug}>{catagory.name}</Link>
              ))  }
            </div>
            </div>   
            </div>
           <div className="nav_links">
              {links.map((item)=>(
              <li className='link' key={item.id} >  <Link to={item.link}>{item.title}</Link></li>
              ))}
          </div>
        </nav>
          <div className="header_icon">
              <Link to="/"><FaShareFromSquare /></Link>
              <Link to="/"><IoWomanSharp /></Link>
            </div> 
 
      </div>
    
      
    </div>
  )
}
