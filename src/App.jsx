import { fields } from "./static/static-data";
import { addressFields } from "./static/static-data";

function App() {
 

 

  return (
    <div className="min-h-screen bg-gray-100 p-8">
    
      <div className="max-w-6xl mx-auto bg-white rounded-xl  mb-8">
        <div className="bg-purple-600 text-white px-6 py-4 rounded-t-xl font-semibold">
          Contract Details
        </div>

        <div className="p-6 bg-purple-300 space-y-6 rounded-b-xl">
     
          <div>
            <label className="block text-sm font-medium mb-1">
              Contract Title
            </label>
            <input
              className="w-full border rounded-md px-3 py-2"
              type="text" 
              placeholder="Enter Contract Title"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {fields.map((field, index) => (
        <div key={index}>
          <label className="block text-sm font-medium mb-1">
            {field.label}
          </label>
          <input
            type={field.type}
            placeholder={field.placeholder}
            className="w-full border rounded-md px-3 py-2"
          />
        </div>
      ))}
    </div>


       
          <h3 className="font-semibold">Address Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {addressFields.map((field, index) => (
              <div key={index}>
                <label className="block text-sm font-medium mb-1">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full border rounded-md px-3 py-2"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

    
      <div className="max-w-6xl mx-auto bg-white rounded-xl ">
        <div className="bg-yellow-400 px-6 py-4 rounded-t-xl font-semibold">
          Address Details
        </div>

        <div className="p-6 bg-purple-50 space-y-4 rounded-b-xl">
          <h3 className="font-semibold">Adresse 1</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {addressFields.map((field, index) => (
              <div key={index}>
                <label className="block text-sm font-medium mb-1">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full border rounded-md px-3 py-2"
                />
              </div>
            ))}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              className="w-full border rounded-md px-3 py-2"
              placeholder="Enter Description"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
