export default function Button({ children, variant = "primary" }) {
  const variants = {
    primary: "bg-primary text-white hover:bg-amber-600",
    outline: "border border-primary text-primary hover:bg-primary hover:text-white"
  };
  
  return (
    <button className={`px-6 py-3 rounded-md font-semibold transition ${variants[variant]}`}>
      {children}
    </button>
  );
}