 export const ContractTitle = () => {
    return(
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
    )
};

export const Description = () => {
    return(
         <div>
            <label className="block text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              className="w-full border rounded-md px-3 py-2"
              placeholder="Enter Description"
            />
          </div>
    )
}
