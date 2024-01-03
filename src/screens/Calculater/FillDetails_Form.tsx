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
import { ZodType, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useState } from "react";
// import { FormContext } from "../Context/Context";
import { Separator } from "@/components/ui/separator";

type Inputs = {
  company: string;
  total_land: number;
  total_built: number;
  no_of_floor: number;
  branch: string;
  dev_charge?: number;
  legal_charge?: number;
  land_value_sell_factor?: number;
  net_selling_land_rate?: number;
  facing_factor?: number;
  corner_factor?: number;
  project_management?: number;
  current_land_rate_asper_market: number;
  adjustmentfactor: number;
  fillingfactor: number;
  selectfacing: string;
  cornerplot: string;
};

export default function FillDetails_Form() {
  // const setData = useContext(FormContext);
  const [FormData, setFormData] = useState<Inputs | null>(null);

  const schema: ZodType<Inputs> = z.object({
    company: z.string().min(2).max(20),
    total_land: z.number().int().positive(),
    total_built: z.number().int().positive(),
    no_of_floor: z.number().int().positive(),
    branch: z.string().min(1).max(50),
    dev_charge: z.number().int().positive().optional(),
    legal_charge: z.number().int().positive(),
    land_value_sell_factor: z.number().int().positive(),
    net_selling_land_rate: z.number().int().positive(),
    facing_factor: z.number().int().positive(),
    corner_factor: z.number().int().positive(),
    project_management: z.number().int().positive(),
    current_land_rate_asper_market: z.number().int().positive(),
    adjustmentfactor: z.number().int().positive(),
    fillingfactor: z.number().int().positive(),
    selectfacing: z.string().min(1).max(5),
    cornerplot: z.string().min(1).max(5),
  });
  const {
    register,
    handleSubmit,
    // watch,
    setValue,
    formState: { errors },
  } = useForm<Inputs>({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    setFormData(data);
    // setData(data)
  };

  const Right: SubmitHandler<Inputs> = () => {
    let company_Value: number = 1;
    let cornerplot_Value:number=1;

    switch (FormData?.company) {
      case "raw_markup":
        company_Value = 1000;
        break;
      case "economy_markup":
        company_Value = 2000;
        break;
      case "deluxe_markup":
        company_Value = 500;
        break;
      case "superluxury_markup":
        company_Value = 1500;
        break;
      case "luxury_markup":
        company_Value = 1200;
        break;
    }

    switch (FormData?.cornerplot) {
      case "1":
        cornerplot_Value = 200;
        break;
      case "2":
        cornerplot_Value = 400;
        break;
      case "3":
        cornerplot_Value = 600;
        break;
      case "4":
        cornerplot_Value =800;
        break;
      case "5":
        cornerplot_Value = 1000;
        break;
    }
console.log(company_Value,cornerplot_Value);


    return (
      <div>
        {FormData !== null ? (
          <>
            <div>
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Result</CardTitle>
                  </CardHeader>
                  <CardContent className="p-10">
                    <p className="mt-3">Land Price :</p>
                    <Separator />
                    <p className="mt-3">Buliding Price :</p>
                    <Separator />
                    <p className="mt-3 font-bold">Sub Total :</p>
                    <Separator />
                    <p className="mt-3">Corner Charge :</p>
                    <Separator />
                    <p className="mt-3">Facing Charge :</p>
                    <Separator />
                    <p className="mt-3">Facing Charge :</p>
                    <Separator />
                    <p className="mt-3">Filling Charge :</p>
                    <Separator />
                    <p className="mt-3">Remotness Charge :</p>
                    <Separator />
                    <p className="mt-3 font-bold">Grand Total :</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </>
        ) : (
          <p></p>
        )}
      </div>
    );
  };

  const handleSelectCompany = (selectedValue: string) => {
    setValue("company", selectedValue);
  };
  const handleSelectBranch = (selectedValue: string) => {
    setValue("branch", selectedValue);
  };
  const handleSelectCorner = (selectedValue: string) => {
    setValue("cornerplot", selectedValue);
  };
  const handleSelectFacing = (selectedValue: string) => {
    setValue("selectfacing", selectedValue);
  };
  return (
    <div>
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Fill Detail</CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* for company */}
                <div>
                  <label className="mb-2">Company</label>
                  <Select
                    onValueChange={handleSelectCompany}
                    {...register("company")}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select A Company" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Company</SelectLabel>
                        <SelectItem value={"raw_markup"}>Raw Markup</SelectItem>
                        <SelectItem value="economy_markup">
                          Economy Markup
                        </SelectItem>
                        <SelectItem value="deluxe_markup">
                          Deluxe Markup
                        </SelectItem>
                        <SelectItem value="superluxury_markup">
                          Super Delux Markup
                        </SelectItem>
                        <SelectItem value="luxury_markup">
                          Luxury Markup
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  {errors.company && (
                    <p className="text-red-400 text-sm" role="alert">
                      {errors.company.message}
                    </p>
                  )}
                </div>
                {/* for model  */}
                <div className="mt-3">
                  <label>Model</label>
                  <div className=" sm:flex sm:justify-between">
                    <div className=" w-64 mt-2 sm:mt-0">
                      <Input
                        type="text"
                        {...register("total_land", { valueAsNumber: true })}
                        placeholder="Total land Area"
                      />
                      {errors.total_land && (
                        <p className="text-red-400 text-sm" role="alert">
                          {errors.total_land.message}
                        </p>
                      )}
                    </div>
                    <div className="w-64 mt-2 sm:mt-0">
                      <Input
                        type="text"
                        {...register("total_built", { valueAsNumber: true })}
                        placeholder="Total Bulit Up Area"
                      />
                      {errors.total_built && (
                        <p className="text-red-400 text-sm" role="alert">
                          {errors.total_built.message}
                        </p>
                      )}
                    </div>
                    <div className="w-64 mt-2 sm:mt-0">
                      <Input
                        type="text"
                        {...register("no_of_floor", { valueAsNumber: true })}
                        placeholder="No's Of Floor"
                      />
                      {errors.no_of_floor && (
                        <p className="text-red-400 text-sm" role="alert">
                          {errors.no_of_floor.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                {/* for Branch */}
                <div className="mt-3">
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
                        <SelectItem value="remotness_factor">
                          Remotness factor
                        </SelectItem>
                        <SelectItem value="base_builtup_rate">
                          Base Bulitup Rate(raw)
                        </SelectItem>
                        <SelectItem value="base_builtrate_with_additional_of_floor">
                          Base Built rate(raw) With Addition Of Floor
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  {errors.branch && (
                    <p className="text-red-400 text-sm" role="alert">
                      {errors.branch.message}
                    </p>
                  )}
                </div>

                {/* for project */}
                <div className="mt-3">
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
                            {...register("land_value_sell_factor", {
                              valueAsNumber: true,
                            })}
                            value={200}
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
                            {...register("dev_charge", { valueAsNumber: true })}
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
                            {...register("legal_charge", {
                              valueAsNumber: true,
                            })}
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
                            {...register("net_selling_land_rate", {
                              valueAsNumber: true,
                            })}
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
                            {...register("facing_factor", {
                              valueAsNumber: true,
                            })}
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
                            {...register("corner_factor", {
                              valueAsNumber: true,
                            })}
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
                            {...register("project_management", {
                              valueAsNumber: true,
                            })}
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
                  <div className="mt-3">
                    <label></label>
                    <div className="  sm:flex sm:justify-between">
                      <div className="w-full sm:64 mt-2 sm:mt-0">
                        <Input
                          type="text"
                          {...register("current_land_rate_asper_market", {
                            valueAsNumber: true,
                          })}
                          placeholder="Current Land rate As per...."
                        />
                        {errors.current_land_rate_asper_market && (
                          <p className="text-red-400 text-sm" role="alert">
                            {errors.current_land_rate_asper_market.message}
                          </p>
                        )}
                      </div>
                      <div className="w-full sm:64 mt-2 sm:mt-0">
                        <Input
                          type="text"
                          {...register("adjustmentfactor", {
                            valueAsNumber: true,
                          })}
                          placeholder="Adjustment Factor"
                        />
                        {errors.adjustmentfactor && (
                          <p className="text-red-400 text-sm" role="alert">
                            {errors.adjustmentfactor.message}
                          </p>
                        )}
                      </div>
                      <div className="w-full sm:64mt-2 sm:mt-0">
                        <Input
                          type="text"
                          {...register("fillingfactor", {
                            valueAsNumber: true,
                          })}
                          placeholder="Filling Factor"
                        />
                        {errors.fillingfactor && (
                          <p className="text-red-400 text-sm" role="alert">
                            {errors.fillingfactor.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                {/* for unit  */}
                <div className=" mt-3">
                  <label>Unit</label>
                  <div className=" sm:flex sm:justify-between">
                    <div className="w-full sm:96 sm:mt-0 mt-2">
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
                            <SelectItem value={"1"}>1</SelectItem>
                            <SelectItem value={"2"}>2</SelectItem>
                            <SelectItem value={"3"}>3</SelectItem>
                            <SelectItem value={"4"}>4</SelectItem>
                            <SelectItem value={"5"}>5</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      {errors.cornerplot && (
                        <p className="text-red-400 text-sm" role="alert">
                          {errors.cornerplot.message}
                        </p>
                      )}
                    </div>

                    {/* for Facing */}
                    <div className="w-full sm:96 sm:mt-0 mt-2">
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
                          {errors.selectfacing.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <Button type="submit" className="mt-4">
                  Calculate
                </Button>
              </form>
              <div className=" p-10">
                <Right />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
