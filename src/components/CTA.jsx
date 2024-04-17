import { Button } from ".";

const CTA = () => {
    return (
        <section className="bg-black-gradient-2 flexCenter marginY padding sm:flex-row flex-col rounded-[20px] box-shadow">
            <div className="flex flex-1 flex-col">
                <h2 className="heading2">Let’s try our service now!</h2>
                <p className="paragraph mt-5 max-w-[470px]">Everything you need to accept card payments and grow your business anywhere on the planet.</p>
            </div>
            <div className="flexCenter sm:ml-10 ml-0 sm:mt-0 mt-10">
                <Button/>
            </div>
        </section>
    )
}

export default CTA;