import Cards from "./components/Cards";
function Shoppage() {
  return (
    <main id="Shopage" className="mb-20 w-full">
      <h1
        className="text-center font-bold text-dark pt-10 pb-16 
      text-3xl
      md:text-5xl"
      >
        <div className="text-3xl text-yellow-500">Our</div>
        Product
      </h1>
      <div className="relative flex md:flex-row gap-y-5 flex-col flex-wrap md:gap-y-9 md:gap-5 justify-center items-center md:justify-evenly ">
        <Cards
          imgs={"https://source.unsplash.com/random/1920x1080?furniture"}
          title="Barang Furniture"
          caption="Dengan Produk Kualitas Kursi ini banyak diminati"
          price="Rp 5.000.000"
          id="1"
        />
        <Cards
          imgs={"https://source.unsplash.com/random/1920x1080?chair"}
          title="Kursi"
          caption="Dengan Produk Kualitas Kursi ini banyak diminati"
          price="Rp 2.000.000"
          id="2"
        />
        <Cards
          imgs={"https://source.unsplash.com/random/1920x1080?table"}
          title="Meja"
          caption="Dengan Produk Kualitas Kursi ini banyak diminati"
          price="Rp 4.000.000"
          id="3"
        />
        <Cards
          imgs={"https://source.unsplash.com/random/1920x1080?design"}
          title="Design"
          caption="Dengan Produk Kualitas Kursi ini banyak diminati"
          price="Rp 6.000.000"
          id="4"
        />
        <Cards
          imgs={"https://source.unsplash.com/random/1920x1080?interior"}
          title="Interior"
          caption="Dengan Produk Kualitas Kursi ini banyak diminati"
          price="Rp 2.000.000"
          id="5"
        />
        <Cards
          imgs={"https://source.unsplash.com/random/1920x1080?plants"}
          title="Tanaman Interior"
          caption="Dengan Produk Kualitas Kursi ini banyak diminati"
          price="Rp 1.000.000"
          id="6"
        />
        <Cards
          imgs={
            "https://source.unsplash.com/random/1920x1080?chair+programming"
          }
          title="Kursi Pekerja"
          caption="Dengan Produk Kualitas Kursi ini banyak diminati"
          price="Rp 4.000.000"
          id="7"
        />
      </div>
    </main>
  );
}

export default Shoppage;
