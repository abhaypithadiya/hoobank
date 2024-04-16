import { quotes } from "@/assets";
import Image from "next/image";

const FeedbackCard = ({content,name,title,img}) => {
    return (
        <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
            <Image src={quotes} className="w-[42.6px] h-[27.6px] object-contain"/>

            <p className="font-poppins font-normal text-white my-10 text-[18px] leading-[32.4px]">
                {content}
            </p>

            <div className="flex flex-row ">
                <Image src={img} alt={name} className="w-[48px] h-[48px] mr-4 rounded-full"/>
                <div className="flex flex-col">
                    <h4 className="font-poppins text-[20px] font-semibold text-white leading-[32px]">{name}</h4>
                    <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">{title}</p>
                </div>
            </div>
        </div>
    )
}

export default FeedbackCard;