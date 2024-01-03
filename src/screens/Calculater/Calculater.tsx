import FillDetails_Form from "./FillDetails_Form";
import Result_Card from "./Result_Card";

export default function Calculater() {
  return (
    <div className="grid gap-6 p-1  bg-blue-100">
      <div className="col-span-12 text-center">
        <h1 className="text-5xl">Welcome....</h1>
      </div>
      <div className="col-span-12 p-5">
        <FillDetails_Form />
      </div>
      {/* <div className="col-span-6 p-10 pl-1">
        <Result_Card/>
      </div> */}
 
    </div>
  );
}
