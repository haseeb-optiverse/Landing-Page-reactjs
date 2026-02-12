const BaseButton =() => {
    return(
         <div className="flex gap-4  justify-center">
        <button className="mt-4 px-4 py-2  text-white rounded-md hover:bg-slate-900">
          Home
        </button>
        <button className="mt-4 px-4 py-2  text-white rounded-md hover:bg-slate-900">
          Freature
        </button>
        <button className="mt-4 px-4 py-2  text-white rounded-md hover:bg-slate-900">
          Pricing
        </button>
        <button className="mt-4 px-4 py-2  text-white rounded-md hover:bg-slate-900">
          Contact us
        </button>
      </div>

    )
}
export default BaseButton;