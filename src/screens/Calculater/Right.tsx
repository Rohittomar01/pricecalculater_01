import {
  Card,
  CardContent,
  CardDescription,
    CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Right() {
  return (
    <div>
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Result</CardTitle>
            <CardDescription></CardDescription>
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
  );
}
