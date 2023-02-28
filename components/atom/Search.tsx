export default function Search() {
  return (
    <form className="flex justify-center items-center">
      <input
        type="text"
        placeholder="Que quieres ver en tu ciudad?"
        className="w-[465px] h-[46px] rounded-3xl pl-[24px] font-sm"
      />
      <button type="submit">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative right-[2rem]"
        >
          <path
            d="M12.8542 11.5833H12.0971L11.8288 11.3021C12.4277 10.5458 12.8654 9.65498 13.1106 8.69335C13.3558 7.73173 13.4024 6.72308 13.2471 5.73959C12.7967 2.84375 10.5733 0.531254 7.89001 0.177088C6.94664 0.0473644 5.98847 0.153933 5.08882 0.488639C4.18917 0.823344 3.37189 1.37732 2.69951 2.10816C2.02713 2.83901 1.51748 3.72736 1.20955 4.70524C0.901621 5.68312 0.803578 6.7246 0.922923 7.75C1.24876 10.6667 3.37626 13.0833 6.04042 13.5729C6.94524 13.7417 7.87319 13.6911 8.75789 13.4245C9.64258 13.158 10.4621 12.6822 11.1579 12.0313L11.4167 12.3229V13.1458L15.4896 17.5729C15.8825 18 16.5246 18 16.9175 17.5729C17.3104 17.1458 17.3104 16.4479 16.9175 16.0208L12.8542 11.5833ZM7.10417 11.5833C4.71792 11.5833 2.79167 9.48959 2.79167 6.89584C2.79167 4.30209 4.71792 2.20834 7.10417 2.20834C9.49042 2.20834 11.4167 4.30209 11.4167 6.89584C11.4167 9.48959 9.49042 11.5833 7.10417 11.5833Z"
            fill="#6E6A6C"
          />
        </svg>
      </button>
    </form>
  );
}
