export function InputFields({fields}){
    return (
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
    )
};