import { useForm, SubmitHandler } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

type Inputs = {
  company: String;
  TLand: Number;
  TBulit: Number;
  NFloor: Number;
  branch: String;
  devcharge: Number;
  legcharge: Number;
  LVSF: Number;
  NSLR: Number;
  facing_f: Number;
  corner_f: Number;
  project_m: Number;
  CLRAPMV: Number;
  adjustmentfactor: Number;
  fillingfactor: Number;
  selectfacing: String;
  cornerplot: String;
};

export default function Left() {
  const {
    register,
    handleSubmit,
    // watch,
    setValue,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) =>
    console.log(data.selectfacing);

  // console.log(watch("company")); // watch input value by passing the name of it

  const handleSelectCompany = (selectedValue: String) => {
    setValue("company", selectedValue);
  };
  const handleSelectBranch = (selectedValue: String) => {
    setValue("branch", selectedValue);
  };
  const handleSelectCorner = (selectedValue: String) => {
    setValue("cornerplot", selectedValue);
  };
  const handleSelectFacing = (selectedValue: String) => {
    setValue("selectfacing", selectedValue);
  };
  return (
    <div>
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Fill Detail</CardTitle>
            {/* <CardDescription></CardDescription> */}
          </CardHeader>
          <CardContent>
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* for company */}
                <div>
                  <label>Company</label>
                  <Select
                    onValueChange={handleSelectCompany}
                    {...register("company", { required: true })}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a fruit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Company</SelectLabel>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="blueberry">Blueberry</SelectItem>
                        <SelectItem value="grapes">Grapes</SelectItem>
                        <SelectItem value="pineapple">Pineapple</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  {errors.company && (
                    <p className="text-red-400 text-sm" role="alert">
                      {"fill this field"}
                    </p>
                  )}
                </div>
                {/* for model  */}
                <div className="mt-2">
                  <label>Model</label>
                  <div className="flex">
                    <div className="w-full">
                      <Input
                        type="text"
                        {...register("TLand", { required: true })}
                        placeholder="Total land Area"
                      />
                      {errors.TLand && (
                        <p className="text-red-400 text-sm" role="alert">
                          {"fill this field"}
                        </p>
                      )}
                    </div>
                    <div className="w-full">
                      <Input
                        type="text"
                        {...register("TBulit", { required: true })}
                        placeholder="Total Bulit Up Area"
                      />
                      {errors.TBulit && (
                        <p className="text-red-400 text-sm" role="alert">
                          {"fill this field"}
                        </p>
                      )}
                    </div>
                    <div className="w-full">
                      <Input
                        type="text"
                        {...register("NFloor", { required: true })}
                        placeholder="No's Of Floor"
                      />
                      {errors.NFloor && (
                        <p className="text-red-400 text-sm" role="alert">
                          {"fill this field"}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                {/* for Branch */}
                <div className="mt-2">
                  <label>Branch</label>
                  <Select
                    onValueChange={handleSelectBranch}
                    {...register("branch", { required: true })}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a fruit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Branch</SelectLabel>
                        <SelectItem value="apple">Remotness factor</SelectItem>
                        <SelectItem value="banana">
                          Base Bulitup Rate(raw)
                        </SelectItem>
                        <SelectItem value="blueberry">
                          Base Built rate(raw) With Addition Of Floor
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  {errors.branch && (
                    <p className="text-red-400 text-sm" role="alert">
                      {"fill this field"}
                    </p>
                  )}
                </div>

                {/* for project */}
                <div>
                  <label>Project</label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Pramenters" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel></SelectLabel>
                        {/* for Land value sell factor */}
                        <div className="flex items-center space-x-2 mt-2">
                          <Checkbox
                            id="terms"
                            {...register("LVSF", { required: true })}
                            value={2}
                          />
                          <label
                            htmlFor="terms"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Land Value Sell Factor
                          </label>
                        </div>
                        {/* for Development charge */}
                        <div className="flex items-center space-x-2 mt-2">
                          <Checkbox
                            id="terms"
                            {...register("devcharge", { required: true })}
                            value={200}
                          />
                          <label
                            htmlFor="terms"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Development Charge
                          </label>
                        </div>
                        {/* for Legal Charge */}
                        <div className="flex items-center space-x-2 mt-2">
                          <Checkbox
                            id="terms"
                            {...register("legcharge", { required: true })}
                            value={200}
                          />
                          <label
                            htmlFor="terms"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Legal Charge
                          </label>
                        </div>
                        {/* for Net Selling land rate */}
                        <div className="flex items-center space-x-2 mt-2">
                          <Checkbox
                            id="terms"
                            {...register("NSLR", { required: true })}
                            value={400}
                          />
                          <label
                            htmlFor="terms"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Net Selling Land Rate
                          </label>
                        </div>
                        {/* for Facing Factor */}
                        <div className="flex items-center space-x-2 mt-2">
                          <Checkbox
                            id="terms"
                            {...register("facing_f", { required: true })}
                            value={200}
                          />
                          <label
                            htmlFor="terms"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Facing Factor
                          </label>
                        </div>
                        {/* for Corner factor */}
                        <div className="flex items-center space-x-2 mt-2">
                          <Checkbox
                            id="terms"
                            {...register("corner_f", { required: true })}
                            value={100}
                          />
                          <label
                            htmlFor="terms"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Corner Factor
                          </label>
                        </div>
                        {/* for Project management  */}
                        <div className="flex items-center space-x-2 mt-2">
                          <Checkbox
                            id="terms"
                            {...register("project_m", { required: true })}
                            value={400}
                          />
                          <label
                            htmlFor="terms"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Project Management(Advertisements,etc.)
                          </label>
                        </div>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <div className="mt-2">
                    <label></label>
                    <div className="flex">
                      <div className="w-full">
                        <Input
                          type="text"
                          {...register("CLRAPMV", { required: true })}
                          placeholder="Current Land rate As per...."
                        />
                        {errors.CLRAPMV && (
                          <p className="text-red-400 text-sm" role="alert">
                            {"fill this field"}
                          </p>
                        )}
                      </div>
                      <div className="w-full">
                        <Input
                          type="text"
                          {...register("adjustmentfactor", { required: true })}
                          placeholder="Adjustment Factor"
                        />
                        {errors.adjustmentfactor && (
                          <p className="text-red-400 text-sm" role="alert">
                            {"fill this field"}
                          </p>
                        )}
                      </div>
                      <div className="w-full">
                        <Input
                          type="text"
                          {...register("fillingfactor", { required: true })}
                          placeholder="Filling Factor"
                        />
                        {errors.fillingfactor && (
                          <p className="text-red-400 text-sm" role="alert">
                            {"fill this field"}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                {/* for unit  */}
                <div className="mt-2">
                  <label>Unit</label>
                  <div className="flex">
                    <div>
                      <Select
                        onValueChange={handleSelectCorner}
                        {...register("cornerplot", { required: true })}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select Corner Plot" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Select Corner Plot</SelectLabel>
                            <SelectItem value={"yes"}>Yes</SelectItem>
                            <SelectItem value={"No"}>No</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      {errors.cornerplot && (
                        <p className="text-red-400 text-sm" role="alert">
                          {"fill this field"}
                        </p>
                      )}
                    </div>

                    {/* for Facing */}
                    <div>
                      <Select
                        onValueChange={handleSelectFacing}
                        {...register("selectfacing", { required: true })}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select Facing" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Facing</SelectLabel>
                            <SelectItem value="east">East</SelectItem>
                            <SelectItem value="west">West</SelectItem>
                            <SelectItem value="north">North</SelectItem>
                            <SelectItem value="south">South</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      {errors.selectfacing && (
                        <p className="text-red-400 text-sm" role="alert">
                          {"fill this field"}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <Button className="mt-4" type="submit">
                  Click Me
                </Button>
              </form>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
