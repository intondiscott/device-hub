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
    <>
      <table className="text-white border w-full ">
        <tr>
          <th className="border p-2 bg-slate-400">Device Name</th>
          <th className="border p-2 bg-slate-400">Online Status</th>
          <th className="border p-2 bg-slate-400">Battery</th>
          <th className="border p-2 bg-slate-400">Charging Status</th>
          <th className="border p-2 bg-slate-400">Chip Temperature</th>
        </tr>
        {post.map((data: any, key: number) => {
          return (
            <tr key={key}>
              <td className="border">
                {data.device_name}
                <img
                  className="w-[100px]"
                  src={`${data.device_name}.png`}
                  alt="picture"
                />
              </td>
              <td className="border">{data.device_status}</td>
              <td className="border">{data.pin2} %</td>
              <td className="border">
                {parseFloat(data.pin2) > 4.7 ? "Charging" : "Not Charging"}{" "}
              </td>
              <td className="border">
                {" "}
                {parseFloat(data.pin3)}
                {" C"}
              </td>
            </tr>
          );
        })}
      </table>
    </>
  );
};

export default BodyContent;
