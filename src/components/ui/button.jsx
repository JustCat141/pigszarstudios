export function Button({ children, className = '', ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded-xl bg-pink-600 hover:bg-pink-700 text-white transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
