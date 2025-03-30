"use client";

import { Button } from "./ui/button";
import { CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const AuthForm = () => {
  return (
    <form>
      <CardContent className="grid  items-center gap-4 ">
        <div className="flex flex-col space-y-1.5 ">
          <Label htmlFor="email">Email </Label>

          <Input
            id="email"
            name="email"
            type="email"
            required
            disabled={false}
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
            disabled={false}
            placeholder="your password"
          />
        </div>
      </CardContent>
    </form>
  );
};
export default AuthForm;
