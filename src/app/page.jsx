import { Billing, Business, Hero, Navbar, Stats } from "@/components";

export default function Home() {
  return (
    <>
      <div className="bg-primary w-full overflow-hidden">
        <div className="paddingX flexCenter">
          <div className="boxWidth">
            <Navbar/>
          </div>
        </div>
      </div>

      <div className="bg-primary flexStart">
        <div className="boxWidth">
          <Hero/>
        </div>
      </div>

      <div className="bg-primary flexStart paddingX">
        <div className="boxWidth">
            <Stats/>
            <Business/>
            <Billing/>
        </div>
      </div>

    </>
  );
}
