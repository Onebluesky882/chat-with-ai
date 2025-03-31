import AuthForm from "@/components/AuthForm";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

const SignupPage = () => {
  return (
    <div className="flex   mt-20  justify-center">
      <Card className="flex flex-1 max-w-md  ">
        <CardHeader>
          <CardTitle className="flex justify-center font-black text-4xl">
            Sign up
          </CardTitle>
        </CardHeader>
        <AuthForm type="Signup" />
        <div className="flex justify-center"></div>
      </Card>
    </div>
  );
};
export default SignupPage;
