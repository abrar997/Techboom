import React from "react";
// images from assets
import { images } from "../../assets";
import { motion } from "framer-motion";

const Home = () => {

  return (
    <div className="app__home text-left font-bold bg-primary container w-100 sm:w-100">
      
      {/* title  */}
      <motion.h1
        initial={{ y: "-10px" }}
        animate={{ y: "30px" }}
        exit={{ y: "-10px" }}
        className="text-4xl text-sm  text-center"
        whileHover={{ scale: 1.2 }}
      >
        Meet the Team
      </motion.h1>

      <div className="app__home-team mt-5 w-100 ">
        {/* div above start*/}
        <div className="mx-auto mt-5 pt-4 ">
          <div className="-left-[119px] relative z-0">
            <motion.div whileHover={{ rotate:"2deg",scale: 1.03, transition: "0.5s" }}>
              <img src={images.girl1} />
            </motion.div>

            <div className="pt-2">
              <p>Moonet Goode </p>
              <p>Founder </p>
            </div>
            <div className=" absolute top-[120px] -right-[207px]  ">
              <motion.div whileHover={{ rotate:"2deg",scale: 1.03, transition: "0.5s" }}>
                <img src={images.boy2} />
              </motion.div>
              <div className="pt-2">
                <p>Moonet Goode</p>
                <p>Founder </p>
              </div>
            </div>
          </div>
        </div>
        {/*  div above end */}

        {/*  div below start */}
        <div  className=" mx-auto mt-[132px] pt-4 ">
          <div className=" -left-[119px] relative z-0">
            <motion.div whileHover={{rotate:"2deg", scale: 1.03, transition: "0.5s" }}>
              <img src={images.boy1} />
            </motion.div>
            <div className="pt-2">
              <p>Moonet Goode </p>
              <p>Founder </p>
            </div>
            <div className=" absolute top-[120px] -right-[207px]  ">
              <motion.div whileHover={{ rotate:"2deg",scale: 1.03, transition: "0.5s" }}>
                <img src={images.girl2} />
              </motion.div>
              <div className="pt-2">
                <p>Nicolo Wiegrand</p>
                <p>Lead project manager </p>
              </div>
            </div>
          </div>
        {/*  div below end */}

        </div>
      </div>
    </div>
  );
};

export default Home;
