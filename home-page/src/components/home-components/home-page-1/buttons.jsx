import { Link } from "react-router-dom";
const BaseButton =() => {
    return(
         <div className="flex gap-4  justify-center">
        <Link to="/property" className="mt-4 px-4 py-2  text-white rounded-md hover:bg-slate-900">
          Home
        </Link >
        <Link to="" className="mt-4 px-4 py-2  text-white rounded-md hover:bg-slate-900">
          Freature
        </Link >
        <Link to="" className="mt-4 px-4 py-2  text-white rounded-md hover:bg-slate-900">
          Pricing
        </Link >
        <Link to="contact" className="mt-4 px-4 py-2  text-white rounded-md hover:bg-slate-900">
          Contact us
        </Link >
      </div>

    )
}
export default BaseButton;