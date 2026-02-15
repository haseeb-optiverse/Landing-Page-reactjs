export const Footer =() => {
    return(
        <footer className="bg-orange-500 text-white mt-12 py-8 max-w-7xl mx-auto ">
       <div className="w-full bg-orange-500 mt-5">
        <div className="px-6 md:px-16 pt-7 flex flex-col md:flex-row gap-10 md:gap-40">
          <div className="flex flex-col gap-6">
            <p className="text-2xl font-medium text-white">Quick Links</p>
            <div className="flex flex-col gap-1">
              <p className="text-lg text-white">Home</p>
              <p className="text-lg text-white">Property listing</p>
              <p className="text-lg text-white">Post property</p>
              <p className="text-lg text-white">Blogs</p>
              <p className="text-lg text-white">Contact us</p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-2xl font-medium text-white">Other Links</p>
            <div className="flex flex-col gap-1">
              <p className="text-lg text-white">Facebook</p>
              <p className="text-lg text-white">WhatsApp</p>
              <p className="text-lg text-white">Instagram</p>
              <p className="text-lg text-white">YouTube</p>
              <p className="text-lg text-white">Telegram</p>
            </div>
          </div>
          <div className="flex flex-col relative sm:flex-row items-start sm:items-center gap-2  md:mt-20">
            <input
              type="text"
              placeholder="Enter email"
              className="border px-3 border-gray-300 text-black outline-none h-10 w-full sm:w-72 p-6 rounded-full"
            />
            <button className=" absolute right-1 top-1/2 -translate-y-1/2 h-10 px-5 bg-orange-500 hover:bg-orange-600 rounded-full">
              <span className="font-semibold text-white">Subscribe</span>
            </button>
          </div>
        </div>
        <div className="px-6 md:px-28">
          <hr className="border-t border-gray-300 mt-8 mb-3" />
          <div className="flex flex-col md:flex-row gap-3 md:gap-24 text-center md:text-left">
            <p className="text-white font-medium text-lg">
              DHA, Phase 1, Islamabad Pakistan
            </p>
            <p className="text-white font-medium text-lg">
              © All reserved copyright 2026
            </p>
          </div>
        </div>
      </div>
      </footer>
    )
}