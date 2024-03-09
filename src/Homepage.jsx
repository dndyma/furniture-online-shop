import TypeIt from "typeit-react";

function Homepage() {
  return (
    <main className="flex justify-center items-center">
      <img src="../public/1.jpg" className="object-cover  brightness-[65%]" />
      <div
        className="
      absolute text-white  transition"
      >
        <h1 className="text-2xl text-shadow-lg md:text-6xl text-center font-poppin">
          <TypeIt options={{ loop: true, speed: 70 }}>
            Elegan Dan Minimalis Furnion Menjadi <br /> Nomor Satu DiDunia
          </TypeIt>
        </h1>
      </div>
    </main>
  );
}

export default Homepage;
