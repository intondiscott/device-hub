"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const BodyContent = ({ post }: any) => {
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      router.refresh();
      return () => clearTimeout(timer);
    }, 1000);
  }, []);
  return (
    <div className="md:flex md:gap-3 md:flex-wrap">
      {post.map((data: any, key: number) => {
        return (
          <div
            key={key}
            className="relative hover:bg-opacity-25 hover:shadow-lg hover:shadow-blue-600 bg-zinc-700   mt-6 md:w-[400px] md:h-[400px] flex w-[350px] m-auto h-[300px] flex-col rounded  shadow-black text-white"
          >
            <div className="">
              {" "}
              <div className="place-content-between flex p-2">
                <h1 className="text-2xl">
                  Device Name:{" "}
                  <span className="font-extrabold">{data.device_name}</span>
                </h1>

                {data.device_status == "ONLINE" ? (
                  <p className="bg-green-700 rounded-full w-6 h-6"></p>
                ) : (
                  <p className="bg-red-700 rounded-full w-6 h-6"></p>
                )}
              </div>
              <div className="pl-2 top-2 left-2 md:text-2xl font-black z-[2]">
                {(data.device_name == "ESP32" && (
                  <h1 className="flex">
                    Pin 1:{" "}
                    {data.pin1 > 0 ? (
                      <span className="font-extrabold">{data.pin2}</span>
                    ) : (
                      <p className="bg-red-700 rounded-full ml-2 my-auto w-3 h-3"></p>
                    )}{" "}
                  </h1>
                )) || (
                  <h1>
                    Battery:{" "}
                    <span className="font-extrabold">{data.pin1} %</span>
                  </h1>
                )}
                {(data.device_name == "ESP32" && (
                  <h1 className="flex">
                    Pin 2:{" "}
                    {data.pin2 > 0 ? (
                      <span className="font-extrabold">{data.pin2}</span>
                    ) : (
                      <p className="bg-red-700 rounded-full ml-2 my-auto w-3 h-3"></p>
                    )}{" "}
                  </h1>
                )) || (
                  <h1>
                    Charge:{" "}
                    <span className="font-extrabold">
                      {parseFloat(data.pin2) > 4.7
                        ? "Charging"
                        : "Not Charging"}{" "}
                    </span>
                  </h1>
                )}
                {(data.device_name == "ESP32" && (
                  <h1 className="flex">
                    Pin 3:{" "}
                    {data.pin3 > 0 ? (
                      <span className="font-extrabold">{data.pin2}</span>
                    ) : (
                      <p className="bg-red-700 rounded-full ml-2 my-auto w-3 h-3"></p>
                    )}{" "}
                  </h1>
                )) || (
                  <h1>
                    Chip Temp:{" "}
                    <span className="font-extrabold">
                      {parseFloat(data.pin3)}
                      {" C"}
                    </span>
                  </h1>
                )}
                {data.device_name == "ESP32" && (
                  <h1 className="flex">
                    Pin 4:{" "}
                    {data.pin4 > 0 ? (
                      <span className="font-extrabold">{data.pin2}</span>
                    ) : (
                      <p className="bg-red-700 rounded-full ml-2 my-auto w-3 h-3"></p>
                    )}{" "}
                  </h1>
                )}
                {data.device_name == "ESP32" && (
                  <h1 className="flex">
                    Pin 5:{" "}
                    {data.pin5 > 0 ? (
                      <span className="font-extrabold">{data.pin2}</span>
                    ) : (
                      <p className="bg-red-700 rounded-full ml-2 my-auto w-3 h-3"></p>
                    )}{" "}
                  </h1>
                )}
                {data.device_name == "ESP32" && (
                  <h1 className="flex">
                    Pin 6:{" "}
                    {data.pin6 > 0 ? (
                      <span className="font-extrabold">{data.pin2}</span>
                    ) : (
                      <p className="bg-red-700 rounded-full ml-2 my-auto w-3 h-3"></p>
                    )}{" "}
                  </h1>
                )}
                {data.device_name == "ESP32" && (
                  <h1 className="flex">
                    Pin 7:{" "}
                    {data.pin7 > 0 ? (
                      <span className="font-extrabold">{data.pin2}</span>
                    ) : (
                      <p className="bg-red-700 rounded-full ml-2 my-auto w-3 h-3"></p>
                    )}{" "}
                  </h1>
                )}
                {data.device_name == "ESP32" && (
                  <h1 className="flex">
                    Pin 8:{" "}
                    {data.pin8 > 0 ? (
                      <span className="font-extrabold">{data.pin2}</span>
                    ) : (
                      <p className="bg-red-700 rounded-full ml-2 my-auto w-3 h-3"></p>
                    )}{" "}
                  </h1>
                )}
                {data.device_name == "ESP32" && (
                  <h1 className="flex">
                    Pin 9:{" "}
                    {data.pin9 > 0 ? (
                      <span className="font-extrabold">{data.pin2}</span>
                    ) : (
                      <p className="bg-red-700 rounded-full ml-2 my-auto w-3 h-3"></p>
                    )}{" "}
                  </h1>
                )}
                {data.device_name == "ESP32" && (
                  <h1 className="flex">
                    Pin 10:{" "}
                    {data.pin10 > 0 ? (
                      <span className="font-extrabold">{data.pin2}</span>
                    ) : (
                      <p className="bg-red-700 rounded-full ml-2 my-auto w-3 h-3"></p>
                    )}{" "}
                  </h1>
                )}
              </div>
            </div>
            <img
              src={`${data.device_name}.png`}
              width={300}
              alt=""
              className="absolute md:top-[100px] md:left-[100px] z-[0] md:w-[80%] w-[50%] top-[60px] left-[150px]"
            />
            <img
              src="—Pngtree—printed circuit board pcb basic_14914983.png"
              alt="yo"
              className=" absolute md:top-[8px] md:left-0 z-[-1] md:w-full md:h-full w-[300px] h-[300px] m-auto top-[0px] left-[30px]"
            />
          </div>
        );
      })}
    </div>
  );
};

export default BodyContent;
