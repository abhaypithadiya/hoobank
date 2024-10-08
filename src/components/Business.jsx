import { features } from "@/constants";
import { Button } from ".";
import Image from "next/image";

const FeatureCard = ({icon,title,content,index}) => {
    return (
        <div className={`flex flex-row p-6 rounded-[20px] feature-card ${index !== features.length - 1 ? "mb-6" : "mb-0"}`}>
            <div className="w-[64px] h-[64px] rounded-full flexCenter bg-dimBlue">
                <Image src={icon} className="w-[50%] h-[50%] object-contain" alt="icon"/>
            </div>
            <div className="flex-col flex-1 flex ml-3">
                <h4 className="text-white font-poppins font-semibold text-[18px] leading-[23px] mb-1">{title}</h4>
                <p className="text-dimWhite font-poppins font-normal text-[16px] leading-[24px] mb-1">{content}</p>
            </div>
        </div>
    )
}

const Business = () => {
    return (
       <section id="features" className="section">
            <div className="sectionInfo">
                <h2 className="heading2">You do the business, <br className="sm:block hidden"/> we'll handle the money.</h2>
                <p className="paragraph mt-5 max-w-[470px]">With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
                <Button styles="mt-10"/>
            </div>
            <div className="sectionImg flex-col">
                {features.map((feature, index)=>{
                    return <FeatureCard index={index} key={feature.id} {...feature}/>
                })}
            </div>
       </section>
    )
}

export default Business;