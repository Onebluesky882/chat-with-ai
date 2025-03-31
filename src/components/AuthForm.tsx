"use client";

import { useState, useTransition } from "react";
import { CardContent, CardFooter } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { loginAction } from "@/actions/users";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import Link from "next/link";

export type AuthFormProps = {
  type: "Login" | "Signup";
};
const AuthForm = ({ type }: AuthFormProps) => {
  const router = useRouter();
  const [onClick, setOnclick] = useState(false);
  const [isPending, startTransition] = useTransition();
  const isLoadingForm = type === "Login";

  const handleSubmit = (formData: FormData) => {
    startTransition(async () => {
      let errorMessage;
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;

      if (isLoadingForm) {
        errorMessage = (await loginAction(email, password)).errorMessage;
      } else {
      }

      if (!errorMessage) {
        router.replace(`/?toastType=${type}`);
      } else {
        toast.error(errorMessage);
      }
    });
  };

  return (
    <form action={handleSubmit}>
      <CardContent className="grid  items-center gap-4 ">
        <div className="flex flex-col space-y-1.5 ">
          <Label htmlFor="email">Email </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            disabled={isPending}
            placeholder="your email"
          />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="password"> Password </Label>
          <Input
            id="password"
            name="password"
            type="password"
            required
            disabled={isPending}
            placeholder="your password"
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-6 justify-center mt-4">
        <Button className="w-full" disabled={onClick}>
          {isPending ? (
            <Loader2 className="animate-spin" />
          ) : isLoadingForm ? (
            "Log in"
          ) : (
            "Sign up"
          )}
        </Button>
        <p className="text-xs">
          {" "}
          {isLoadingForm
            ? "Don't have an account yet? "
            : "Already have an account? "}
          <Link
            className="underline underline-offset-1"
            href={isLoadingForm ? "/signup" : "/login"}
          >
            {isLoadingForm ? "Sign up" : "Login"}
          </Link>
        </p>
      </CardFooter>
    </form>
  );
};
export default AuthForm;
