import Left from "./FillDetails_Form";
import Right from "./Result_Card";
import App from "./Example";

export default function Calculater() {
  return (
    <div className="grid gap-6 p-1  bg-blue-100">
      <div className="col-span-12 text-center">
        <h1 className="text-5xl">Welcome....</h1>
      </div>
      <div className="col-span-6 p-5">
        <Left />
      </div>
      <div className="col-span-6 p-10 pl-1">
        <Right />
      </div>
 
    </div>
  );
}
