import FillDetails_Form from "./FillDetails_Form";
// import Result_Card from "./Result_Card";

export default function Calculater() {
  return (
    <div className="grid gap-6 p-1 w-full col-span-12  bg-blue-100">
      <div className="col-span-12 text-center">
        <h1 className="text-4xl bg-blue-600 text-white p-3 font-serif">
          Welcome....
        </h1>
      </div>
      <div className="col-span-12 p-5">
        <FillDetails_Form />
      </div>
    </div>
  );
}
