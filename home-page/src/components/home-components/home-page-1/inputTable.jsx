 const Contact = () => {
    return(
         <div className="rounded-xl p-6 mt-10 max-w-5xl mx-auto shadow-xl">
        <h2 className="text-white text-2xl font-semibold mb-6">Contact us</h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="text-white text-sm">Full name</label>
            <input
              type="text"
              placeholder="Full name"
              className="w-full mt-1 p-2 rounded-md bg-slate-700 text-white outline-none"
            />
          </div>

          <div>
            <label className="text-white text-sm">Phone no</label>
            <input
              type="text"
              placeholder="Phone no"
              className="w-full mt-1 p-2 rounded-md bg-slate-700 text-white outline-none"
            />
          </div>

          <div>
            <label className="text-white text-sm">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full mt-1 p-2 rounded-md bg-slate-700 text-white outline-none"
            />
          </div>

          <div>
            <label className="text-white text-sm">Company</label>
            <input
              type="text"
              placeholder="Company"
              className="w-full mt-1 p-2 rounded-md bg-slate-700 text-white outline-none"
            />
          </div>

          <div>
            <label className="text-white text-sm">Subject</label>
            <input
              type="text"
              placeholder="Subject"
              className="w-full mt-1 p-2 rounded-md bg-slate-700 text-white outline-none"
            />
          </div>

          <div>
            <label className="text-white text-sm">Country</label>
            <input
              type="text"
              placeholder="Country"
              className="w-full mt-1 p-2 rounded-md bg-slate-700 text-white outline-none"
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="text-white text-sm">Message</label>
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full mt-1 p-2 rounded-md bg-slate-700 text-white outline-none"
          ></textarea>
        </div>

        <button className="mt-4 px-4 py-2 bg-slate-800 text-white rounded-md hover:bg-slate-900">
          Submit
        </button>
      </div>
    )
} 
export default Contact;