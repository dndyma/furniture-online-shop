import Cards from "./components/Cards";
function Shoppage() {
  return (
    <main id="Shopage" className="mb-20 w-full">
      <h1
        className="text-center text-dark pt-10 pb-16 
      text-3xl
      md:text-5xl"
      >
        Our Product
      </h1>
      <div className="relative flex md:flex-row gap-y-5 flex-col flex-wrap md:gap-y-9 md:gap-5 justify-center items-center md:justify-evenly ">
        <Cards
          imgs={"https://source.unsplash.com/random/1920x1080?furniture"}
        />
        <Cards imgs={"https://source.unsplash.com/random/1920x1080?chair"} />
        <Cards imgs={"https://source.unsplash.com/random/1920x1080?table"} />
        <Cards imgs={"https://source.unsplash.com/random/1920x1080?design"} />
        <Cards imgs={"https://source.unsplash.com/random/1920x1080?interior"} />
        <Cards imgs={"https://source.unsplash.com/random/1920x1080?plants"} />
        <Cards
          imgs={
            "https://source.unsplash.com/random/1920x1080?chair+programming"
          }
        />
      </div>
    </main>
  );
}

export default Shoppage;
