export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#8A6726]/40 bg-black/55 backdrop-blur-xl">

      <div className="mx-auto flex h-24 max-w-[1700px] items-center justify-between px-10">

        {/* Logo */}

        <div className="select-none">

          <h1
            className="
              font-serif
              text-4xl
              font-semibold
              tracking-wide

              bg-gradient-to-b
              from-[#FFF6D2]
              via-[#E8C96E]
              to-[#A8701F]

              bg-clip-text
              text-transparent
            "
          >
            HOUSE OF THE DRAGON
          </h1>

          <p className="mt-1 text-sm tracking-[0.45em] text-[#C79B45] uppercase">
            Where Dragons Gather
          </p>

        </div>

        {/* Navigation */}

        <div className="hidden xl:flex items-center gap-10">

          {[
            "Great Hall",
            "Games",
            "Achievements",
            "Dragon Relics",
            "Tavern",
            "Market",
            "Community",
          ].map((item) => (
            <a
              key={item}
              href="#"
              className="
                relative

                font-serif
                text-lg
                tracking-wide

                text-[#E6D5A4]

                transition-all
                duration-300

                hover:text-[#FFD36A]
                hover:drop-shadow-[0_0_10px_rgba(255,185,60,.5)]

                after:absolute
                after:left-0
                after:-bottom-2
                after:h-px
                after:w-0
                after:bg-[#D6A545]

                after:transition-all
                after:duration-300

                hover:after:w-full
              "
            >
              {item}
            </a>
          ))}

        </div>

        {/* Discord */}

        <a
          href="https://discord.gg/vNYWakHD6"
          target="_blank"
          rel="noopener noreferrer"
          className="
            rounded-md

            border
            border-[#B88A34]

            bg-gradient-to-b
            from-[#8B1E1E]
            via-[#6D1212]
            to-[#430808]

            px-7
            py-3

            font-serif
            text-lg
            font-semibold

            text-[#FFF3DA]

            shadow-lg
            shadow-black/60

            transition-all
            duration-300

            hover:scale-105
            hover:border-[#E0B24D]
            hover:shadow-[0_0_18px_rgba(255,175,40,.35)]
          "
        >
          Join Discord
        </a>

      </div>

    </nav>
  );
}