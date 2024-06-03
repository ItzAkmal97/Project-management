export default function Button({ children, ...props }) {
  return (
    <button
      className="bg-stone-700 transition duration-300 ease-in-out text-stone-300 rounded hover:text-stone-100 hover:bg-stone-600 px-4 py-2 text-xs md:text-base"
      {...props}
    >
      {children}
    </button>
  );
}
