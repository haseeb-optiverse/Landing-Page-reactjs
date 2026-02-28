import { useState } from "react";

function App() {
  const [color, setColor] = useState("");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 px-2 inset-x-0">
        <div className="flex flex-wrap justify-center gap-3 bg-white text-white px-3 py-2 rounded-xl shadow-2xl ">
          <button 
            onClick={() => setColor("red")}
            className="outline-none bg-red-600 px-3 py-2 rounded-2xl shadow-2xl"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
          onClick={() => setColor("green")}
            className="outline-none bg-green-600 px-3 py-2 rounded-2xl shadow-2xl"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
          onClick={() => setColor("blue")}
            className="outline-none bg-blue-600 px-3 py-2 rounded-2xl shadow-2xl"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
          onClick={() => setColor("olive")}
            className="outline-none bg-olive-600 px-3 py-2 rounded-2xl shadow-2xl"
            style={{ backgroundColor: "olive" }}
          >
           Olive
          </button>
          <button
          onClick={() => setColor("gray")}
            className="outline-none bg-gray-600 px-3 py-2 rounded-2xl shadow-2xl"
            style={{ backgroundColor: "gray" }}
          >
            Gray
          </button>
           <button
          onClick={() => setColor("yellow")}
            className="outline-none bg-yellow-600 px-3 py-2 rounded-2xl shadow-2xl"
            style={{ backgroundColor: "yellow" }}
          >
           Yellow
          </button>
           <button
          onClick={() => setColor("pink")}
            className="outline-none bg-pink-600 px-3 py-2 rounded-2xl shadow-2xl"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
           <button
          onClick={() => setColor("purple")}
            className="outline-none bg-purple-600 px-3 py-2 rounded-2xl shadow-2xl"
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>
           <button
          onClick={() => setColor("lavender")}
            className="outline-none bg-lavender-600 px-3 py-2 rounded-2xl shadow-2xl"
            style={{ backgroundColor: "lavender" }}
          >
            Lavender
          </button>
           <button
          onClick={() => setColor("white")}
            className="outline-none bg-white text-black px-3 py-2 rounded-2xl shadow-2xl"
            style={{ backgroundColor: "white" }}
          >
            White
          </button>
           <button
          onClick={() => setColor("black")}
            className="outline-none bg-black px-3 py-2 rounded-2xl"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>

        </div>
      </div>
    </div>
  );
}

export default App;
