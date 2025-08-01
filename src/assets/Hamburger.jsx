export default function Hamburger({
  stroke,
  onClick,
  className,
  syncState = false,
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke={stroke}
      className={`size-6 cursor-pointer z-10 ${className}`}
      onClick={onClick}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d={`${
          syncState
            ? "M6 18 18 6M6 6l12 12"
            : "M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
        } `}
      />
      // syncState prop is used to sync the hamburger with the menu
    </svg>
  );
}
