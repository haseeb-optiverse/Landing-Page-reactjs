import { house } from "../../assets";

export const HouseCard = () => {
    return(
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 max-w-7xl mx-auto px-3">

                <div className="flex flex-col justify-center p-4">
                  <h2 className="font-bold text-2xl mb-3">Islamabad Top Land</h2>
                  <p className="mb-2">Exterior views of beautiful modern luxury home</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
                    dolorum ea? Aspernatur deserunt blanditiis molestiae id molestias
                    mollitia eum ad fugit. Numquam magni odio dolorem sequi? Nam
                    adipisci nemo id!
                  </p>
                </div>
                <div>
                  <img
                    src={house}
                    alt="house image"
                 className="w-full h-56 sm:h-64 object-cover rounded-lg"

                  />
                </div>
              </div>
    )
};