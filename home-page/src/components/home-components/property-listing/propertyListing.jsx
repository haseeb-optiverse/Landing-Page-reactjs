import { image2 } from "../../../assets";
import { cardsData } from "../static-data-2/static-data-2";
export const PropertyListing = () => {
  return (
    <div className="max-w-7xl mx-auto bg-slate-100 ">
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

      <div>
        <div className="flex flex-col text-center mt-16">
          <h1 className="font-bold text-4xl">
            Global Business-Culture Competency
          </h1>
          <p className="p-6  text-gray-600 text-lg  max-w-3xl mx-auto">
            With expertise at the intersection of technology, policy and
            business leadership, Marsha designs corporate learning products and
            culture frameworks that drive organizational transformation and
            ethical innovation.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cardsData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>

              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 ">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};
