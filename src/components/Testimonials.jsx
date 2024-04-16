import { feedback } from "@/constants";
import { FeedbackCard } from ".";

const Testimonials = () => {
    return (
        <section id="clients" className="paddingY flexCenter relative flex-col">
             <div className="absolute z-[0] w-[60%] h-[60%] right-[10%] rounded-full blue__gradient bottom-40" />
            <div className="w-full flex md:flex-row flex-col justify-between items-center mb-6 relative sm:mb-16">
            <h2 className="heading2">What people are <br className="sm:block hidden"/> saying about us</h2>
                <p className="paragraph text-left sm:mt-0 mt-5 max-w-[450px]">Everything you need to accept card payments and grow your business anywhere on the planet.</p>
            </div>
            <div className="flex flex-wrap sm:justify-start justify-center w-full relative feedback-container">
                {feedback.map((message)=>{
                    return <FeedbackCard key={message.id} {...message}/>
                })}
            </div>
        </section>
    )
}

export default Testimonials;