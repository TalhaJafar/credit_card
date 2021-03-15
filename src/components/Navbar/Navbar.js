import React , {useState} from "react";
import './index.scss';
import { AiOutlineAppstore } from "react-icons/ai"
import { IoArrowForwardCircleOutline } from "react-icons/io5"
import {Main} from './Main'

import { motion } from "framer-motion"

function Navbar() {
  const [menuOpen , setMenuOpen] = useState(false)
  return (
    <div className="navbar_container">
      <div className="nav-row">
        <motion.div  initial={{opacity: 0}} animate={{ x: 0 , opacity: 1}} transition={{ ease: "easeOut", duration: 3 }}>
          <div className="nav-brand">
            Citi Bank
          </div>
        </motion.div>
        <motion.div  initial={{opacity: 0}} animate={{ x: 0 , opacity: 1}} transition={{ ease: "easeOut", duration: 3 }}>
          {/* <div className="nav-menu_icon" onClick={() => {setMenuOpen(!menuOpen)} }>
              <AiOutlineAppstore size={50}/>
          </div> */}
          <Main className="nav-links"/>

        </motion.div>

        

      </div>
        
    </div>
  );
}

export default Navbar;
