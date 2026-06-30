type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  const primary =
    "border border-[#D6A545] bg-gradient-to-b from-[#A42B1F] via-[#7B1915] to-[#4B0909] text-[#FFF3D5] shadow-[0_6px_18px_rgba(0,0,0,.55)] hover:from-[#B73424] hover:via-[#8D1D18] hover:to-[#5A0D0D] hover:border-[#F0C867]";

  const secondary =
    "border border-[#B78C34] bg-gradient-to-b from-[#2A2A2A] via-[#1A1A1A] to-[#101010] text-[#E9D39A] shadow-[0_6px_18px_rgba(0,0,0,.55)] hover:border-[#E4BE67] hover:text-[#FFF4CC]";

  return (
    <button
      className={`
        ${variant === "primary" ? primary : secondary}

        relative
        overflow-hidden

        rounded-md

        px-9
        py-4

        font-serif
        text-lg
        font-semibold
        tracking-wide

        transition-all
        duration-300

        hover:-translate-y-1
        hover:shadow-[0_0_22px_rgba(255,190,60,.30)]

        active:translate-y-0
      `}
    >
      {children}
    </button>
  );
}