// import components
import Left from "./Left";
import Right from "./Right";

export default function Calculater() {
  return (
    <div className="grid gap-6 p-2  bg-blue-100" >
      <div className="col-span-12 text-center">
        <h1 className="text-5xl">Welcome....</h1>
      </div>
      <div className="col-span-5 p-10">
        <Left />
      </div>
      <div className="col-span-5 p-10 pl-10">
        <Right />
      </div>
    </div>
  );
}
