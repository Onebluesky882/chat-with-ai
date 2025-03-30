import Link from "next/link";
import { Button } from "./button";
import { ModeToggle } from "../ThemeToggle";

const Header = () => {
  return (
    <header className="  w-full py-4 outline-1 ">
      <div className=" flex items-center h-12  justify-between px-10">
        <Link href={"/"}>Logo</Link>
        <div className="flex gap-8">
          <Button>
            <Link href={"/login"}>Login</Link>
          </Button>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};
export default Header;
