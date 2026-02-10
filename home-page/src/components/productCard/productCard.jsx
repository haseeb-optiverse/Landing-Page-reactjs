import { productCardData } from "../static/static-data";

export const ProductCard = () => {
    return(
        <div>
          <p className="  font-bold justify-center flex mt-6 text-2xl ">
                Recently here
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 max-w-7xl mx-auto">
                {productCardData.map((product, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-4">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-48 object-cover rounded-md mb-2"
                    />
                    <h2 className="font-bold">{product.title}</h2>
                    <p>{product.pkr}</p>
                    <p>{product.address}</p>
                    <p>{product.street}</p>
        
                    <div className="flex gap-4 justify-center mt-4">
                      <button className="px-5 py-2 font-medium bg-orange-500 border border-gray-300 rounded-md hover:bg-orange-300 ">
                        Buy
                      </button>
                      <button className="px-5 py-2 font-medium border border-gray-300 rounded-md hover:bg-blue-500 ">
                        Read more
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              </div>
    )
};