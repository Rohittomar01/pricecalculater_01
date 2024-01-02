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
    watch,
    setValue,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("company")); // watch input value by passing the name of it

  const handleSelectChange = (selectedValue:String) => {
    setValue('company', selectedValue);
    setValue('branch', selectedValue);
    setValue('cornerplot', selectedValue);
    setValue('selectfacing', selectedValue);

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
                  <Select onValueChange={handleSelectChange} >
                    <SelectTrigger {...register("company")} className="w-full">
                      <SelectValue  placeholder="Select a fruit" />
                    </SelectTrigger>
                    <SelectContent >
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
                </div>
                {/* for model  */}
                <div className="mt-2">
                  <label>Model</label>
                  <div className="flex">
                    <Input
                      type="text"
                      {...register("TLand")}
                      placeholder="Total land Area"
                    />
                    <Input
                      type="text"
                      {...register("TBulit")}
                      placeholder="Total Bulit Up Area"
                    />
                    <Input
                      type="text"
                      {...register("NFloor")}
                      placeholder="No's Of Floor"
                    />
                  </div>
                </div>
                {/* for Branch */}
                <div className="mt-2">
                  <label>Branch</label>
                  <Select onValueChange={handleSelectChange}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a fruit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup {...register("branch")}>
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
                            {...register("LVSF")}
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
                            {...register("devcharge")}
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
                            {...register("legcharge")}
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
                            {...register("NSLR")}
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
                            {...register("facing_f")}
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
                            {...register("corner_f")}
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
                            {...register("project_m")}
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
                      <Input
                        type="text"
                        {...register("CLRAPMV")}
                        placeholder="Current Land rate As per...."
                      />
                      <Input
                        type="text"
                        {...register("adjustmentfactor")}
                        placeholder="Adjustment Factor"
                      />
                      <Input
                        type="text"
                        {...register("fillingfactor")}
                        placeholder="Filling Factor"
                      />
                    </div>
                  </div>
                </div>
                {/* for unit  */}
                <div className="mt-2">
                  <label>Unit</label>
                  <div className="flex">
                    <Select onValueChange={handleSelectChange}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Corner Plot" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup {...register("cornerplot")}>
                          <SelectLabel>Unit</SelectLabel>
                          <SelectItem value={"yes"}>Yes</SelectItem>
                          <SelectItem value={"No"}>No</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    {/* for Facing */}

                    <Select onValueChange={handleSelectChange}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Facing" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup {...register("selectfacing")}>
                          <SelectLabel>Facing</SelectLabel>
                          <SelectItem value="east">East</SelectItem>
                          <SelectItem value="west">West</SelectItem>
                          <SelectItem value="north">North</SelectItem>
                          <SelectItem value="south">South</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
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
