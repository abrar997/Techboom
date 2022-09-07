import React from "react";
import { data } from "../../constants";
import { motion } from "framer-motion";
import "./home.css";

const Home = () => {
  return (
    <div className="app__home text-left font-bold bg-primary container w-100 sm:w-100">
      <div className="app__home-title">
        {/* title  */}
        <motion.h1
          initial={{ y: "-10px" }}
          animate={{ y: "30px" }}
          exit={{ y: "-10px" }}
          className="text-4xl   text-center"
          whileHover={{ scale: 1.2 }}
        >
          Meet the Team
        </motion.h1>
      </div>

      <div className="app__home-team w-100 flex ">
        {/* Left side team  start*/}
        <div className="app__home-team_left mx-auto mt-5 pt-5 relative -left-[109px] z-0">
          {data.data.Left.map((item) => {
            return (
              <div className="app__home-team_left-content" key={item.id}>
                <motion.div
                  whileHover={{
                    rotate: "2deg",
                    scale: 1.03,
                    transition: "0.5s",
                  }}
                >
                  <img src={item.img} />
                </motion.div>
                <div className="pt-2">
                  <p>{item.name} </p>
                  <p>{item.job} </p>
                </div>
              </div>
            );
          })}
        </div>
        {/* Left side team  End*/}

        {/* right side team  start*/}
        <div className=" app__home-team_right top-[175px] right-[560px] absolute pt-4">
          {data.data.right.map((item) => {
            return (
              <div className="app__home-team_right-content" key={item.id}>
                <motion.div
                  whileHover={{
                    rotate: "2deg",
                    scale: 1.03,
                    transition: "0.5s",
                  }}
                >
                  <img src={item.img} />
                </motion.div>
                <div className="pt-2">
                  <p>{item.name}</p>
                  <p>{item.job} </p>
                </div>
              </div>
            );
          })}
        </div>
        {/* right side team  End*/}
      </div>
    </div>
  );
};

export default Home;
