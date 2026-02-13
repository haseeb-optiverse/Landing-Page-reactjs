import { image2 } from "../../../assets"

 
 export const MainCard = () => {
    return(
          <div className="grid md:grid-cols-2 grid-cols-1">
                <div className="p-16">
                  <h1 className="font-bold text-5xl">Marsha Ershaghi,</h1>
                  <h1 className=" text-yellow-300 font-bold text-5xl">EdD, CCEP</h1>
                  <p className="font-medium text-2xl mb-5">
                    Risk Management & Corporate Culture Leader
                  </p>
                  <span className="font-medium  text-gray-600 text-lg  ">
                    Marsha is a trusted advisor, corporate educator and thought partner
                    to CEOs and Fortune 500 boards, helping organisations manage
                    disruption and innovate for the future
                  </span>
                  <div className="flex gap-4 mt-3">
                    <button className="px-5 py-2 font-medium border bg-yellow-500 border-gray-300 rounded-md  hover:text-white hover:bg-yellow-600 ">
                      Explore Publications
                    </button>
                    <button className="px-5 py-2 font-medium border border-gray-300 rounded-md  hover:text-white hover:bg-yellow-600 ">
                      Book Marsha
                    </button>
                  </div>
                </div>
                <div>
                  <img
                    src={image2}
                    alt="women image"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
    )
}