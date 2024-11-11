export default function InputErrorMessage({ message }) {
  return (
    <span className="absolute text-sm sm:text-base text-red-500 -bottom-5 sm:-bottom-6">
      {message}
    </span>
  );
}
