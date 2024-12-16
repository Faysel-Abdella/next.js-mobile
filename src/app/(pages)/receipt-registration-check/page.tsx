import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <ScrollArea className="relative py-6 flex flex-col justify-between items-center h-full gap-1">
      <nav className="w-full flex flex-col ">
        <div className="w-full px-4 mx-auto flex justify-between items-center ">
          <Link href={".."} className="flex items-center gap-4">
            <span className="text-xl font-normal">영수증</span>
          </Link>
        </div>
      </nav>
      <div className="w-full h-full p-4 flex flex-col gap-4">
        {[1, 2, 3].map((index) => (
          <div className="w-full flex justify-between items-center" key={index}>
            <Image
              src={"/images/recipe.png"}
              alt="recipe"
              width={85}
              height={85}
              className="rounded-xl relative bg-black  object-cover"
            />
            <div className="rounded-xl absolute top-0 bg-black  h-85 w-85"></div>

            <p className="text-gray-600">2024.0{index}.01</p>
          </div>
        ))}
        {[1, 2].map((index) => (
          <div className="w-full flex justify-between items-center" key={index}>
            <Image
              src={"/images/recipe2.png"}
              alt="recipe"
              width={85}
              height={85}
              className="rounded-xl relative bg-black  object-cover"
            />
            <div className="rounded-xl absolute top-0 bg-black  h-85 w-85"></div>

            <p className="text-gray-600">2024.0{index}.01</p>
          </div>
        ))}
      </div>
      
      <div className="w-full xl:hidden px-4 mx-auto">
        <Button size={"lg"} className="w-full rounded-lg py-6">
          사진 등록
        </Button>
      </div>

      <footer className="absolute bottom-0 hidden py-5 xl:block w-full px-4 mx-auto">
        <Button size={"lg"} className="w-full rounded-lg py-6">
          사진 등록
        </Button>
      </footer>
    </ScrollArea>
  );
}
