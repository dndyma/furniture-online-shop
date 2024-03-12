import { useDispatch } from "react-redux";
import { increment } from "../features/counter";

function Cards(props) {
  const { imgs, title, caption, price, id } = props;
  const dispatch = useDispatch();
  return (
    <div
      id={`${id}`}
      onClick={() => dispatch(increment())}
      className="hover:scale-95 transition w-[300px] md:w-[350px] text-dark cursor-pointer flex flex-col  justify-between  rounded-xl overflow-hidden  border-slate-500 shadow-lg
    "
    >
      <img src={`${imgs}`} alt="gambar" className="mb-4" />
      <div className=" flex flex-col justify-between gap-3 p-4 ">
        <h1 className="text-dark font-bold">{title}</h1>
        <p className="text-[12px] text-slate-600">{caption}</p>
        <p className="text-[20px] font-bold">{price}</p>
      </div>
    </div>
  );
}

export default Cards;
