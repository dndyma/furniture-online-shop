function Contactpage() {
  return (
    <div className="p-12 mb-7">
      <div className="text-center pb-12">
        <h1 className="text-2xl text-yellow-500">Contact</h1>
        <p className="text-3xl md:text-5xl font-bold text-dark">Hubungi Kami</p>
      </div>
      <div className="m-auto max-w-[800px]">
        <form>
          <div className="flex flex-col gap-2 mb-5">
            <label htmlFor="nama" className="text-dark font-bold">
              Nama
            </label>
            <input
              type="text"
              id="nama"
              className="outline-none shadow-md rounded-md bg-slate-100 p-3 focus:ring focus:ring-yellow-300"
            />
          </div>
          <div className="flex flex-col gap-2 mb-5">
            <label htmlFor="email" className="text-dark font-bold">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="outline-none shadow-md rounded-md bg-slate-100 p-3 focus:ring focus:ring-yellow-300"
            />
          </div>
          <div className="flex flex-col gap-2 mb-5">
            <label htmlFor="pesan" className="text-dark font-bold">
              Pesan
            </label>
            <textarea
              id="pesan"
              className="outline-none shadow-md rounded-md bg-slate-100 p-3 focus:ring focus:ring-yellow-300"
            ></textarea>
          </div>
          <button className="bg-yellow-400 font-bold w-full text-white rounded-xl py-2">
            Kirim
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contactpage;
