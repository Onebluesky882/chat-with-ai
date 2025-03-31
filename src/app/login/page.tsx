import AuthForm from "@/components/AuthForm";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="flex   mt-20  justify-center">
      <Card className="flex flex-1 max-w-md  ">
        <CardHeader>
          <CardTitle className="text-center text-3xl">Login</CardTitle>
        </CardHeader>
        <AuthForm type="Login" />
      </Card>
    </div>
  );
};
export default LoginPage;
