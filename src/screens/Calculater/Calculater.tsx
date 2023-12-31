// import components
import Left from "./Left";
import Right from "./Right";

export default function Calculater() {
  return (
    <div className="grid gap-4 ">
      <div className="col-span-12">
        <h1>Calculater</h1>
      </div>
      <div className="col-span-6">
        <Left />
      </div>
      <div className="col-span-6">
        <Right />
      </div>
    </div>
  );
}
