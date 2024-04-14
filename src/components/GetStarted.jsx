import { arrowUp } from "@/assets";
import Image from "next/image";

const GetStarted = () => {
    return (
        <div className="flexCenter w-[140px] h-[140px] rounded-full bg-blue-gradient p-2 cursor-pointer">
            <div className="flexCenter w-[100%] h-[100%] rounded-full flex-col bg-primary">
                <div className="flexStart flex-row">
                    <p className="font-poppins font-medium text-[18px] mr-2 leading-[23px]">
                        <span className="text-gradient">Get</span>
                    </p>
                    <Image src={arrowUp} alt="up-arrow" className="w-[23px] h-[23px] object-contain"/>
                </div>
                <p className="font-poppins font-medium text-[18px] leading-[23px]">
                    <span className="text-gradient">Started</span>
                </p>
            </div>
        </div>
    )
}

export default GetStarted;