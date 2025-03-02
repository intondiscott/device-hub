"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const TableContent = ({ post }: any) => {
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
        <tbody>
          <tr>
            <th className="border p-2 bg-slate-400">Device Name</th>
            <th className="border p-2 bg-slate-400">Online Status</th>
            <th className="border p-2 bg-slate-400">Battery</th>
            <th className="border p-2 bg-slate-400">Charging Status</th>
            <th className="border p-2 bg-slate-400">Chip Temperature</th>
          </tr>
        </tbody>

        {post.map((data: any, key: number) => {
          return (
            <tbody key={key}>
              <tr>
                <td className="border">
                  {data.device_name}
                  {data.has_screen ? (
                    <a href="uchat/">
                      {" "}
                      <img
                        className="w-[100px]"
                        src={`${data.device_name}.png`}
                        alt="picture"
                      />
                    </a>
                  ) : (
                    <a href="board-pins/">
                      {" "}
                      <img
                        className="w-[100px]"
                        src={`${data.device_name}.png`}
                        alt="picture"
                      />
                    </a>
                  )}
                </td>
                <td className="border">{data.device_status}</td>
                <td className="border">{data.pin1} %</td>
                <td className="border">
                  {parseInt(data.pin2) > 2700 ? "Charging" : "Not Charging"}{" "}
                </td>
                <td className="border">
                  {" "}
                  {parseFloat(data.pin3)}
                  {" C"}
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </>
  );
};

export default TableContent;
