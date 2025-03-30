import AuthForm from "@/components/AuthForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

const LoginPage = () => {
  return (
    <div className="flex mt-20 justify-center">
      <Card className="flex flex-1 max-w-md">
        <CardHeader>
          <CardTitle className="flex justify-center font-black text-4xl">
            Login
          </CardTitle>
        </CardHeader>
        <AuthForm />
      </Card>
    </div>
  );
};
export default LoginPage;
