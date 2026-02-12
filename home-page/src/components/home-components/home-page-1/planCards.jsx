import { Plans } from "../static-data-2/static-data-2"

export const Choice = () => {
    return(
         <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6 p-4">
          {Plans.map((plan, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 text-center shadow-lg"
            >
              <h2 className="text-xl font-semibold">{plan.title}</h2>
              <p className="text-sm opacity-70 mb-4">{plan.desc}</p>
              <p className="text-lg  mb-4">{plan.features}</p>

              <button className="px-4 py-2 rounded-md text-sm bg-orange-500 text-white">
                {plan.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    )
}