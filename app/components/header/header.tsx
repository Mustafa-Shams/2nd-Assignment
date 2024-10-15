

import React from "react";

import Link from "next/link";


import CssStyles from "./header.module.css";
console.log(CssStyles , "css-styles");

export default function Header(){
   return(
       
           
      
      <header>
        <ul className={CssStyles.ul}> 
            <li>
                <Link href="/about" >About</Link> </li>

              <li >  <Link href="./about/contact" >Contact</Link> </li>

               <li  > <Link href="./about/contact/services">Services</Link>
                </li> 
                
                </ul>   </header>         
            
                
           
       
        
   )
}