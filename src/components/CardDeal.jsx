import Image from "next/image";
import { Button } from ".";
import { card } from "@/assets";

const CardDeal = () => {
    return (
       <section className="section">
            <div className="sectionInfo">
                <h2 className="heading2">Find a better card deal <br className="sm:block hidden"/> in few easy steps.</h2>
                <p className="paragraph mt-5 max-w-[470px]">Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
                <Button styles="mt-10"/>
            </div>
            <div className="sectionImg flex-col">
                <Image src={card} alt="Card" className="w-[100%] h-[100%]"/>
            </div>
       </section>
    )
}

export default CardDeal;