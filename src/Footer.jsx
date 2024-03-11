function Footer() {
  return (
    <div
      className="text-white max-h-[900px]
     md:max-h-[500px]  pb-10 md:pt-10 relative  bg-dark mt-[200px]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute left-0 bottom-0 right-0 -top-[80px] md:-top-[258px] w-full"
      >
        <path
          fill="#0f172a"
          fillOpacity="1"
          d="M0,128L30,154.7C60,181,120,235,180,250.7C240,267,300,245,360,218.7C420,192,480,160,540,144C600,128,660,128,720,149.3C780,171,840,213,900,224C960,235,1020,213,1080,181.3C1140,149,1200,107,1260,96C1320,85,1380,107,1410,117.3L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        ></path>
      </svg>
      <div className="pt-[110px] pb-[110px] ">
        <div className="w-full md:flex justify-evenly p-12">
          <div>
            <h1 className="font-bold text-2xl mb-2">Hubungi Kami</h1>
            <h3 className="text-blue-300">furnion@co.id</h3>
            <p>Jl Setiabudi No 23 </p>
            <p>Jakarta</p>
          </div>
          <div className="w-1/2 mt-9 md:mt-0">
            <h1 className="font-bold text-2xl mb-4">List Product</h1>
            <div className="flex md:flex-row flex-col md:gap-9 md:ml-14">
              <a href="">meja</a>
              <a href="">meja</a>
              <a href="">meja</a>
              <a href="">meja</a>
              <a href="">meja</a>
              <a href="">meja</a>
              <a href="">meja</a>
            </div>
          </div>
          <div className="flex flex-col mt-9 md:mr-11 md:mt-0 -ml-1">
            <h1 className="font-bold text-2xl mb-2">Tautan</h1>
            <a href="">Home</a>
            <a href="">Home</a>
            <a href="">Home</a>
            <a href="">Home</a>
          </div>
        </div>
        <div className="w-[1000px] bg-secondary m-auto h-[1px]"></div>
      </div>
      <div></div>
    </div>
  );
}

export default Footer;
