import React from "react";
import './index.scss';
import credit_card from "../../assests/credit_card.png"
import { motion } from "framer-motion"

function Home() {
  return (
   <div className="main_section">
       
       <div className="section_description">
            <motion.div initial={{x:-100, opacity: 0.1}} animate={{ x: 0 , opacity: 1}} transition={{ ease: "easeOut", duration: 2.5 }}>
                <div className="brand_main_heading" >
                    <h5> Choose your card <br/> consedring your  <br/> reasons. </h5>
                </div>
                <div className="brand_main_description">
                    <p> Gold and Platinum cards with so many benefits. Enjoy Unlimited benefits.</p> 
                </div>
            </motion.div>
            
            <motion.div className="brand_main_button" initial={{opacity:0, y: 50}} animate={{y:0, opacity:1}} transition={{duration: 2}}>
                <button className="btn"> Get Yours Now </button>
            </motion.div>
       </div>

       <div className="card_animation">
            <motion.div className="card_img" initial={{opacity:0, y: -100}} animate={{y:0, opacity:1}} transition={{ ease:"easeOut" ,duration: 2}}>
                <img src={credit_card} alt="credit_card" width="100%" height="100%"/>
            </motion.div>
            {/* <motion.div initial={{opacity:0}} animate={{y: -100, opacity:1}} transition={{ ease:"easeOut" ,duration: 2}}>
                <div className="dollar" >
                    $
                </div>
            </motion.div > */}

       </div>

   </div>
  );
}

export default Home;
