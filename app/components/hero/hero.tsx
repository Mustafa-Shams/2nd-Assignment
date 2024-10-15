

import CssStyles from "./hero.module.css";
console.log(CssStyles,"css-styles"); 


export default function Hero(){
    return(
        
        <main className={CssStyles.hero} >
        <h1 className={CssStyles.h1} >
            This is my Hero Section
        </h1><br />
        <p className={CssStyles.p}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut reiciendis eaque reprehenderit quam commodi ullam debitis nihil nostrum ex. Repudiandae non enim placeat aperiam odio consequatur veniam commodi consectetur ratione.
        </p>

        </main>
    )
}