import React from "react";
import data from "../../actions/messages.json";
export default function UChat() {
  return (
    <div className="text-white">
      <h1 className="font-extrabold  text-center text-6xl">UChat Messager</h1>
      {data.messages.map((message: any, i: number) => {
        return (
          <div
            key={i}
            className="flex flex-col"
          >
            {message.sent && (
              <p className="bg-slate-400 m-2 p-4 pl-10 rounded-t-2xl rounded-br-2xl mr-auto ">
                {message.sent}
              </p>
            )}
            {message.recieved && (
              <div className="flex flex-col">
                <p className=" bg-green-500 m-2  p-4 pr-10 rounded-t-2xl rounded-bl-2xl ml-auto ">
                  {message.recieved}
                </p>
                <span className="ml-auto">{message.timestamp}</span>
              </div>
            )}
          </div>
        );
      })}
      {/*<p className="bg-slate-400 m-2  p-4 rounded-lg ml-auto">
        {data.recieved[1]}
      </p>
      <p className="bg-green-500 m-2 p-4 rounded-lg mr-auto">
        Well it's coming along nicely!
      </p>
      <p className="bg-green-500 m-2 p-4 rounded-lg mr-auto">
        When do you think this will be done?
      </p>
      <p className="bg-slate-400 m-2  p-4 rounded-lg ml-auto">
        Hopefully soon.
      </p>*/}
      <form
        className="flex justify-around p-2"
        action="uchat/"
        method="post"
      >
        <textarea
          className="mt-10 bg-slate-600 rounded w-full"
          name=""
          id=""
        ></textarea>
        <button
          type="submit"
          className="border-2 border-slate-400 rounded p-2 ml-2 h-20 mt-10 w-20s"
        >
          send
        </button>
      </form>
    </div>
  );
}
