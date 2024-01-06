import FillDetails_Form from "./FillDetails_Form";
// import Result_Card from "./Result_Card";
// import FormCard from "./Card";

export default function Calculater() {
  return (
    <div className="grid p-1 bg-blue-100">
      <div className="w-screen text-center">
        <h1 className="text-4xl bg-blue-600 text-white p-3 font-serif">
          Welcome....
        </h1>
      </div>
      <div className="  flex justify-center">
        <FillDetails_Form />
      </div>
    </div>
  );
}
