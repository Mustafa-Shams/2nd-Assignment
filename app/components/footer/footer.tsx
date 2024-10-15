


import CssStyles from "./footer.module.css";
console.log(CssStyles , "css-styles");


export default function Footer(){
    return(
        
            
            
                
                <footer className={CssStyles.footer} >
                    <h1 className={CssStyles.ul}>
                    CopyRight © 2024 This is Footer Bar
                     </h1> 
                </footer>
            


    )
}