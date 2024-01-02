import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export default function Left() {
  const form = useForm();

  const { register, handleSubmit } = useForm();

  const { control } = useForm();

  const handleFormSubmit = (data: any) => {
    console.log(data.company);
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
              <Form {...form}>
                <form onSubmit={handleSubmit(handleFormSubmit)}>
                  <FormField
                    control={control}
                    name="company"
                    render={() => (
                      <FormItem>
                        <FormLabel className="origin-start">Company</FormLabel>
                        <FormControl>
                          <Select>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select a fruit" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectItem value="row markup">
                                  Row markup{" "}
                                </SelectItem>
                                <SelectItem value="delux markup">
                                  Delux Markup
                                </SelectItem>
                                <SelectItem value="economy markup">
                                  Economy Markup
                                </SelectItem>
                                <SelectItem value="luxury markup">
                                  Luxury Markup
                                </SelectItem>
                                <SelectItem value="super luxury">
                                  Super Luxury
                                </SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                        {/* for model  */}

                        <FormLabel>Model</FormLabel>
                        <div className="flex justify-between">
                          <FormControl className=" w-44">
                            <Input type="email" placeholder="Total Land Area" />
                          </FormControl>
                          <FormMessage />
                          {/* for Total build up area */}
                          <FormControl className="w-44">
                            <Input
                              type="text"
                              placeholder=" Total Build Up Area"
                            />
                          </FormControl>
                          <FormMessage />
                          {/* for nos of floor */}
                          <FormControl className="w-44">
                            <Input type="text" placeholder="No's Of Floor" />
                          </FormControl>
                          <FormMessage />
                        </div>
                        {/* for branch  */}
                        <FormLabel>Branch</FormLabel>
                        <FormControl>
                          <Select>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select a fruit" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectItem value="remotness factor">
                                  Remotness Factor
                                </SelectItem>
                                <SelectItem value="bbr">
                                  Base bulitup rate(raw)
                                </SelectItem>
                                <SelectItem value="bbra">
                                  Base bulitup rate(raw) with addition of floor
                                </SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                        {/* for product */}
                        <FormLabel>Product</FormLabel>
                        {/* for check boxes */}
                        <FormControl>
                          <Select>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select a fruit" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <div className="flex items-center space-x-2 p-2">
                                  <Checkbox id="terms" />
                                  <label
                                    htmlFor="terms"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                  >
                                    Accept terms and conditions
                                  </label>
                                </div>
                                <div className="flex items-center space-x-2 p-2">
                                  <Checkbox id="terms" />
                                  <label
                                    htmlFor="terms"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                  >
                                    Accept terms and conditions
                                  </label>
                                </div>
                                <div className="flex items-center space-x-2 p-2">
                                  <Checkbox id="terms" />
                                  <label
                                    htmlFor="terms"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                  >
                                    Accept terms and conditions
                                  </label>
                                </div>
                                <div className="flex items-center space-x-2 p-2">
                                  <Checkbox id="terms" />
                                  <label
                                    htmlFor="terms"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                  >
                                    Accept terms and conditions
                                  </label>
                                </div>
                                <div className="flex items-center space-x-2 p-2">
                                  <Checkbox id="terms" />
                                  <label
                                    htmlFor="terms"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                  >
                                    Accept terms and conditions
                                  </label>
                                </div>
                                <div className="flex items-center space-x-2 p-2">
                                  <Checkbox id="terms" />
                                  <label
                                    htmlFor="terms"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                  >
                                    Accept terms and conditions
                                  </label>
                                </div>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />

                        {/* for input field */}
                        <div className="flex justify-between">
                          <FormControl className=" w-44">
                            <Input type="text" placeholder="CLRAPMV" />
                          </FormControl>
                          <FormMessage />
                          {/* for  Adjustment Factor */}
                          <FormControl className="w-44">
                            <Input
                              type="text"
                              placeholder=" Adjustment Factor"
                            />
                          </FormControl>
                          <FormMessage />
                          {/* Filling Rate */}
                          <FormControl className="w-44">
                            <Input type="text" placeholder="Filling Rate" />
                          </FormControl>
                          <FormMessage />
                        </div>
                        <FormMessage />

                        {/* for unit  */}
                        <FormLabel className="origin-start">Unit</FormLabel>
                        {/* for corner Plot */}
                        <div className="flex justify-between">
                          <FormControl>
                            <Select>
                              <SelectTrigger className="w-96">
                                <SelectValue placeholder="Select a fruit" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup>
                                  <SelectItem value="row markup">
                                    Yes{" "}
                                  </SelectItem>
                                  <SelectItem value="delux markup">
                                    No
                                  </SelectItem>
                                </SelectGroup>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                          {/* for facing */}
                          <FormControl>
                            <Select>
                              <SelectTrigger className="w-96">
                                <SelectValue placeholder="Select a fruit" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup>
                                  <SelectItem value="East">East </SelectItem>
                                  <SelectItem value="West">West</SelectItem>
                                  <SelectItem value="North">North</SelectItem>
                                  <SelectItem value="South">South</SelectItem>
                                </SelectGroup>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="bg-blue-400 mt-5">
                    Calculate
                  </Button>
                </form>
              </Form>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
