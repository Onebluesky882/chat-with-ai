import { CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const SignupPage = () => {
  return (
    <form>
      <CardContent>
        <Label>email</Label>
        <Input placeholder="email" />
      </CardContent>
    </form>
  );
};
export default SignupPage;
