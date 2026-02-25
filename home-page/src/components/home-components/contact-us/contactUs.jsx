import { useState } from "react";
const ContactUs = () => {
  const [counter, setcounter] = useState(0);

  const addValue = () => {
    if (counter >= 20) {
      return;
    } else {
      setcounter(counter + 1);
    }
  };
  const removeValue = () => {
    if (counter <= 0) {
      return;
    } else {
      setcounter(counter - 1);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center mt-4">
      <h1 className="font-semibold ">Use State</h1>
      <p  className="font-semibold ">Value: {counter}</p>
      <div className="flex gap-5 mt-4">
        <button
          onClick={addValue}
          className="px-5 py-2 font-medium border bg-orange-500 border-gray-300 rounded-md  hover:text-white hover:bg-orange-600 "
        >
          Add value
        </button>
        <button
          onClick={removeValue}
          className="px-5 py-2 font-medium border bg-orange-500 border-gray-300 rounded-md  hover:text-white hover:bg-orange-600 "
        >
          remove value
        </button>
      </div>
    </div>
  );
};
export default ContactUs;
