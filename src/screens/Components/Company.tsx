import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { FormContext } from "../Context/Context";
import { Input } from "@/components/ui/input";

type Company = {
  company: string;
  name:number;
};

const Company = () => {
  const formContext = useContext(FormContext);
  const [name,setName]=useState('')

  const {
    register,
    // handleSubmit,
    setValue,
    
    // formState: { errors },
  } = useForm<Company>();

  const onSubmit = (selectedValue: string) => {
    setValue("company", selectedValue);
    const company:string=selectedValue;
    // console.log(selectedValue);
    if (formContext) {
      formContext.setData(company??0);
      console.log(formContext.data);
    }
    
  };

  return (
    <div>
      <Select {...register("company")} onValueChange={(d)=>onSubmit(d)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Company</SelectLabel>
            <SelectItem value="apple"></SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <div>
        <Input type="text" value={name}   {...register("name")}/>
      </div>
    </div>
  );
};

export default Company;
