function Aboutpage() {
  return (
    <div className="bg-slate-100 text-dark  mb-9 p-11">
      <div className="flex justify-evenly">
        <div className="max-w-[500px] mt-[70px] max-h-[400px] ">
          <h1 className="font-bold text-3xl ext-center md:text-5xl mb-[60px]">
            Tentang Toko Ini
          </h1>
          <p className="text-[11px] md:text-lg text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
            explicabo error nesciunt natus blanditiis maiores, mollitia soluta!
            Consequuntur amet non eveniet vitae repudiandae, veniam illo quidem
            dolor assumenda voluptates magni voluptatem sapiente velit, sed quia
            expedita voluptatibus veritatis nulla, doloribus aliquid beatae eos
            libero error. Eaque nam rerum earum nisi! Laudantium necessitatibus
            optio atque sequi illum dolorum, explicabo quo blanditiis rem iure
            non molestias commodi eos consectetur placeat porro pariatur earum
            eaque aperiam! Officiis dolor ullam voluptatibus nobis suscipit
            inventore omnis libero amet, reiciendis natus deserunt eveniet a
          </p>
        </div>
        <div className="relative">
          {" "}
          <img
            src="../public/Profile.png"
            className="md:block hidden -bottom-[95px] relative z-10 rounded-md"
            width="300"
            height="300"
          />{" "}
          <span
            className="md:-translate-x-[100px] md:-translate-y-[40px]
          absolute md:bottom-0 z-1"
          >
            <svg
              width="500"
              height="500"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#F1C21B"
                d="M42.3,-64.8C52.2,-59.4,56,-43.3,61.9,-28.7C67.9,-14.2,76,-1,74.1,10.5C72.1,21.9,60.1,31.8,49.8,42.5C39.5,53.3,31,65.1,18.4,73.8C5.8,82.6,-10.9,88.3,-23.4,83.1C-35.9,77.9,-44.2,61.7,-52,47.8C-59.8,33.9,-67.2,22.3,-67.8,10.5C-68.4,-1.4,-62.3,-13.5,-57.1,-26.7C-52,-39.8,-47.9,-54,-38.6,-59.8C-29.2,-65.5,-14.6,-62.7,0.8,-63.9C16.1,-65.1,32.3,-70.2,42.3,-64.8Z"
                transform="translate(100 100)"
              />
            </svg>
          </span>
        </div>{" "}
      </div>{" "}
    </div>
  );
}
export default Aboutpage;
