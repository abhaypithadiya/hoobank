import { Navbar } from "@/components";

export default function Home() {
  return (
      <div className="bg-primary w-full overflow-hidden">
        <div className="paddingX flexCenter">
          <div className="boxWidth">
            <Navbar/>
          </div>
        </div>
      </div>
  );
}
