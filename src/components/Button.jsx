const Button = ({styles}) => {
    return (
        <button type="button" className={`py-4 font-poppins font-medium text-[18px] outline-none text-primary px-6 bg-blue-gradient ${styles}`}>
            Get Started
        </button>
    )
}

export default Button;