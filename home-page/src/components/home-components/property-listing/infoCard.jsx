import { cardsData } from "../static-data-2/static-data-2";
const InfoCard = () => {
    return(
         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cardsData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md "
            >
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>

              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
    )
}
export default InfoCard ;