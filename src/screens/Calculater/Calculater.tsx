// import components
import Left from "./Left";
import Right from "./Right";

export default function Calculater() {
  return (
    <div className="grid gap-6 p-11 ">
      <div className="col-span-12 text-center">
        <h1 className="text-5xl">Calculater</h1>
      </div>
      <div className="col-span-4">
        <Left />
      </div>
      <div className="col-span-4">
        <Right />
      </div>
    </div>
  );
}
