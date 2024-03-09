function Cards(props) {
  const { imgs } = props;
  return (
    <div className="text-dark cursor-pointer flex flex-col  justify-between  w-1/5  rounded-xl overflow-hidden  border-slate-500 shadow-lg">
      <img src={`${imgs}`} alt="gambar" className="mb-4" />
      <div className="flex flex-col justify-between gap-3 p-4">
        <h1 className="text-dark font-bold">Chair</h1>
        <p className="text-[12px] text-slate-600">Best chair in the world</p>
        <p className="text-[20px] font-bold">Rp.2.000.000</p>
      </div>
    </div>
  );
}

export default Cards;