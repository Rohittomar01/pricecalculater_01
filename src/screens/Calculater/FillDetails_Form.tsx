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
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { ZodType, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
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

  const schema: ZodType<Inputs> = z
    .object({
      company: z.string().min(2).max(20),
      total_land: z.number(),
      total_built: z.number(),
      no_of_floor: z.number().min(1).max(4),
      branch: z.string().min(1).max(50),
      dev_charge: z.number().int().positive().optional(),
      legal_charge: z.number().int().positive().optional(),
      land_value_sell_factor: z.number().int().positive().optional(),
      net_selling_land_rate: z.number().int().positive().optional(),
      facing_factor: z.number().int().positive().optional(),
      corner_factor: z.number().int().positive().optional(),
      project_management: z.number().int().positive(),
      current_land_rate_asper_market: z.number().int().positive(),
      adjustmentfactor: z.number().int().positive(),
      fillingfactor: z.number().int().positive(),
      selectfacing: z.string().min(1).max(5),
      cornerplot: z.string().min(1).max(5),
    })
    .refine((data) => data.total_built <= data.total_land, {
      message: "fill value lower than total land area",
      path: ["total_built"],
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
  const Spacer = () => <div className="mt-2" />;

  const Right = () => {
    let company_Value: number = 1;
    let cornerplot_Value: number = 1;
    let total_land__Value: number =
      (FormData?.total_land ?? 0) *
      (FormData?.current_land_rate_asper_market ?? 0);
    let total_built_Value: number = (FormData?.total_built ?? 0) * 200;
    let no_of_floor_Value: number = (FormData?.no_of_floor ?? 0) * 500;
    let building_Price: number = total_built_Value * no_of_floor_Value;
    let branch_Value: number = 1;
    let remotness_factor_value: number = 1;
    let selectFacing_Value: number = 1;

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
        cornerplot_Value = 800;
        break;
      case "5":
        cornerplot_Value = 1000;
        break;
    }

    switch (FormData?.branch) {
      case "remotness_factor":
        remotness_factor_value = 100;
        break;
      case "base_builtup_rate":
        branch_Value = 110;
        break;
      case "base_builtrate_with_additional_of_floor":
        branch_Value = 150;
        break;
    }
    let grandtotal_Value_01 =
      company_Value +
      cornerplot_Value +
      total_land__Value +
      building_Price +
      branch_Value +
      remotness_factor_value +
      (FormData?.dev_charge ? 100 : 0) +
      (FormData?.facing_factor ?? 0) +
      (FormData?.fillingfactor ?? 0) +
      (FormData?.project_management ?? 0) +
      (FormData?.land_value_sell_factor ?? 0) +
      (FormData?.legal_charge ?? 0) +
      (FormData?.net_selling_land_rate ?? 0) +
      (FormData?.adjustmentfactor ?? 0);

    switch (FormData?.selectfacing) {
      case "east":
        selectFacing_Value = (5 / 100) * grandtotal_Value_01;
        break;
      case "west":
        selectFacing_Value = (2 / 100) * grandtotal_Value_01;
        break;
      case "north":
        selectFacing_Value = (4 / 100) * grandtotal_Value_01;
        break;
      case "south":
        selectFacing_Value = (1 / 100) * grandtotal_Value_01;
        break;
    }

    let grandtotal_Value_02: number = selectFacing_Value + grandtotal_Value_01;

    return (
      <div>
        {FormData !== null ? (
          <>
            <div>
              <div>
                <Card className="w-[300px] sm:w-[550px]">
                  <CardHeader>
                    <CardTitle>Bunglow Price</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <p>Land Price :{total_land__Value}</p>

                      <Separator />
                      <Spacer />
                      <p>Buliding Price :{building_Price}</p>
                      <Separator />
                      <Spacer />
                      <p className="font-bold">
                        Sub Total :<b>{total_land__Value + building_Price}</b>
                      </p>
                      <Separator />
                      <Spacer />
                      <p>Corner Charge :{cornerplot_Value}</p>
                      <Separator />
                      <Spacer />
                      <p>Facing Charge :{selectFacing_Value}</p>
                      <Separator />
                      <Spacer />
                      <p>Filling Charge :{FormData.fillingfactor}</p>
                      <Separator />
                      <Spacer />
                      <p>
                        {/* Project Management Charge :{FormData.project_management} */}
                      </p>
                      <Separator />
                      <Spacer />
                      <p>
                        Project Adjustment Charge :{FormData.adjustmentfactor}
                      </p>
                      <Separator />
                      <Spacer />
                      <p>Remotness Charge :{remotness_factor_value}</p>
                      <Separator />
                      <Spacer />
                      <p className="font-bold">
                        Grand Total :{grandtotal_Value_02}
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <h1>Thank you...</h1>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </>
        ) : (
          <div>
            <Card className="w-[300px] sm:w-[550px]">
              <CardHeader>
                <CardTitle>Bunglow Price</CardTitle>
              </CardHeader>
              <CardContent>
                <div>
                  <p>Land Price :</p>

                  <Separator />
                  <Spacer />
                  <p>Buliding Price :</p>
                  <Separator />
                  <Spacer />
                  <p className=" font-bold">Sub Total :</p>
                  <Separator />
                  <Spacer />
                  <p>Corner Charge :</p>
                  <Separator />
                  <Spacer />
                  <p>Facing Charge :</p>
                  <Separator />
                  <Spacer />
                  <p>Filling Charge :</p>
                  <Separator />
                  <Spacer />
                  <p>Project Management Charge :</p>
                  <Separator />
                  <Spacer />
                  <p>Project Adjustment Charge :</p>
                  <Separator />
                  <Spacer />
                  <p>Remotness Charge :</p>
                  <Separator />
                  <Spacer />
                  <p className="font-bold">Grand Total :</p>
                </div>
              </CardContent>
              <CardFooter>
                <h1 className="text-center w-screen font-bold">Thank you...</h1>
              </CardFooter>
            </Card>
          </div>
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

  const checkboxData = [
    {
      id: "dev_charge",
      value: 100,
      name: "dev_charge",
      label: "Recents",
    },
    {
      id: "legal_charge",
      value: 200,
      name: "legal_charge",
      label: "legal_charge",
    },
    {
      id: "land_value_sell_factor",
      value: 300,
      name: "land_value_sell_factor",
      label: "land value sell factor",
    },
    {
      id: "net_selling_land_rate",
      value: 200,
      name: "net_selling_land_rate",
      label: "net selling land rate",
    },
    {
      id: "facing_factor",
      value: 200,
      name: "facing_factor",
      label: "facing factor",
    },
    {
      id: "corner_factor",
      value: 200,
      name: "corner_factor",
      label: "corner factor",
    },
    {
      id: "project_management",
      value: 200,
      name: "project_management",
      label: "project management",
    },
  ] as const;

  return (
    <div className="flex flex-wrap justify-around w-screen p-5  sm:p-10">
      <div className="mb-5">
        <Card className=" w-[300px] sm:w-[600px]">
          <CardHeader>
            <CardTitle>Fill Detail</CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-2 ">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div>
                      <Label htmlFor="framework">Company</Label>
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
                            <SelectItem value={"raw_markup"}>
                              Raw Markup
                            </SelectItem>
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
                    <div>
                      <Label>Branch</Label>
                      <Select
                        onValueChange={handleSelectBranch}
                        {...register("branch", { required: true })}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select A Branch" />
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
                  </div>
                  {/* for model  */}
                  <Label>Model</Label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <div>
                      <Input
                        type="text"
                        {...register("total_land", {
                          valueAsNumber: true,
                          required: true,
                        })}
                        placeholder="Total land Area in sqf."
                      />
                      {errors.total_land && (
                        <p className="text-red-400 text-sm" role="alert">
                          Please enter only number
                        </p>
                      )}
                    </div>
                    <div>
                      <Input
                        type="text"
                        {...register("total_built", { valueAsNumber: true })}
                        placeholder="Total Bulit Up Area"
                      />
                      {errors.total_built && (
                        <p className="text-red-400 text-sm" role="alert">
                          Enter less than Total land Area
                        </p>
                      )}
                    </div>
                    <div>
                      <Input
                        type="text"
                        {...register("no_of_floor", { valueAsNumber: true })}
                        placeholder="No's Of Floor"
                      />
                      {errors.no_of_floor && (
                        <p className="text-red-400 text-sm" role="alert">
                          Please enter less than 5
                        </p>
                      )}
                    </div>
                  </div>

                  {/* for project */}
                  <div className="grid grid-cols-1">
                    <Label>Project</Label>
                    {checkboxData.map((item) => {
                      return (
                        <div>
                          <Checkbox
                          defaultChecked
                            id={item.id}
                            value={item.value}
                            {...register(`${item.name}`, {
                              valueAsNumber: true,
                            })}
                          />
                          <label
                            htmlFor={item.name}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {item.label}
                          </label>
                        </div>
                      );
                    })}
                    <Spacer />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <div>
                      <Input
                        type="text"
                        {...register("current_land_rate_asper_market", {
                          valueAsNumber: true,
                        })}
                        placeholder="Current Land rate As per...."
                      />
                      {errors.current_land_rate_asper_market && (
                        <p className="text-red-400 text-sm" role="alert">
                          Please enter only number.
                        </p>
                      )}
                    </div>
                    <div>
                      <Input
                        type="text"
                        {...register("adjustmentfactor", {
                          valueAsNumber: true,
                        })}
                        placeholder="Adjustment Factor"
                      />
                      {errors.adjustmentfactor && (
                        <p className="text-red-400 text-sm" role="alert">
                          Please enter only number.
                        </p>
                      )}
                    </div>
                    <div>
                      <Input
                        type="text"
                        {...register("fillingfactor", {
                          valueAsNumber: true,
                        })}
                        placeholder="Filling Factor"
                      />
                      {errors.fillingfactor && (
                        <p className="text-red-400 text-sm" role="alert">
                          Please enter only number.
                        </p>
                      )}
                    </div>
                  </div>

                  {/* for unit  */}

                  <Label>Unit</Label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div>
                      <Select
                        onValueChange={handleSelectCorner}
                        {...register("cornerplot", { required: true })}
                      >
                        <SelectTrigger className="w-[250px] sm:w-[285px]">
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
                    <div>
                      <Select
                        onValueChange={handleSelectFacing}
                        {...register("selectfacing", { required: true })}
                      >
                        <SelectTrigger className="w-[250px] sm:w-[285px]">
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
              </form>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
              onClick={handleSubmit(onSubmit)}
              type="submit"
              className="mt-4 w-full sm:w-32"
            >
              Calculate
            </Button>
          </CardFooter>
        </Card>
      </div>
      <div>
        <Right />
      </div>
    </div>
  );
}
