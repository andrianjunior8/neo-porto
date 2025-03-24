import React from "react";
import Navbar from "../../components/Navbar";

const Projects = () => {
  const projects = [
    {
      name: "Point of Sales",
      stack: ["golang.png", "redis.png", "nextjs.png"],
      desc: "It integrates both website and Electronic Data Capture (EDC) devices to streamline payment processes, track inventory, and generate sales reports. With this system, businesses can easily process payments, manage customer interactions, and ensure accurate real-time sales data.",
      image: "pos.jpg",
    },
    {
      name: "Stock Opname",
      stack: ["golang.png", "nextjs.png"],
      desc: "Stock Opname is a system used to track and manage inventory levels in warehouses or retail stores. It helps businesses conduct regular stock audits to ensure that the physical stock matches the recorded inventory.",
      image: "sttk.jpg",
    },
  ];

  return (
    <div className="relative w-full h-screen  bg-gradient-to-r from-[#111184] to-[#37AFE1] animate-gradient-slide">
      <Navbar />
      <div className="p-16 w-full">
        {projects.map((item) => {
          return (
            <div
              key={item.name}
              className="box border-4 w-full h-60 border-[#071952] bg-[#4CC9FE] rounded-xl overflow-hidden mb-6"
            >
              <div className="grid grid-cols-2 grid-rows-1 gap-4 h-full">
                <div className="col-span-1 row-span-1 w-full">
                  <div className="w-full h-full relative">
                    <img
                      className=" w-full h-full object-center"
                      src={item.image}
                      alt="Item Image"
                    />
                  </div>
                </div>
                <div className="col-span-1 row-span-1 p-2">
                  <div>
                    <text className="text-2xl font-mono text-[#071952]">
                      {item.name}
                    </text>
                  </div>
                  <div className="font-mono text-sm text-[#071952]">
                    {item.desc}
                  </div>
                  <div className="grid grid-cols-5 mt-2">
                    {item.stack.map((stck) => {
                      return (
                        <div
                          key={stck}
                          className="rounded-full w-12 h-12 bg-white justify-center items-center flex"
                        >
                          <img src={stck} alt="test" className="w-8 h-8 "></img>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
