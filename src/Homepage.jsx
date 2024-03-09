import TypeIt from "typeit-react";

function Homepage() {
  return (
    <main id="home" className="flex justify-center items-center">
      <img src="../public/1.jpg" className="object-cover  brightness-[65%]" />
      <div
        className="
      absolute transition"
      >
        <h1 className="text-xl text-white font-extralight text-shadow-lg md:text-6xl text-center font-poppin">
          <TypeIt options={{ loop: true, speed: 70 }}>
            <span className="font-bold">Elegan</span> Dan Minimalis{" "}
            <span className="font-bold text-yellow-400">Furnion</span> Menjadi{" "}
            <br /> Nomor Satu DiDunia
            <span className="font-bold">...</span>
          </TypeIt>
        </h1>
      </div>
    </main>
  );
}

export default Homepage;
