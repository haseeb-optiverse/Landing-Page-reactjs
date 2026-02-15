 

import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { HomeService } from "../homeServiceCards/homeServiceCards";
import { HouseCard } from "../houseCard/houseCard";
import { IconCard } from "../iconCard/iconCard";
import { ProductCard } from "../productCard/productCard";



  export const Card =() => {
    return(
        <div  className="min-h-screen bg-white p-3 sm:px-4 ">

         <div >
       <Header />
      </div>

      <div className="mt-4 flex justify-center">
       <HomeService />
      </div>

      <div>
     <ProductCard />
      </div>
       
       <div>
      <HouseCard />
      </div>

    <div>
     <IconCard />
      </div>

      <div>

      </div>
      <Footer />
      </div>
    )
};