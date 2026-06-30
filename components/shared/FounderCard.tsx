import Image from "next/image";
import Link from "next/link";

interface FounderCardProps {
  name: string;
  title: string;
  portrait: string;
  avatar: string;
  description: string;
}

export default function FounderCard({
  name,
  title,
  portrait,
}: FounderCardProps) {
  return (
    <Link
      href="/royal-court"
      className="group flex justify-center"
    >
      <div className="relative">

                {/* Gold Frame */}

        <div
          className="
            relative
            w-[220px]
            overflow-hidden
            rounded-md
            border-[5px]
            border-[#8D6D2D]
            bg-[#111]
            shadow-[0_18px_60px_rgba(0,0,0,.65)]
            transition-all
            duration-500
            group-hover:-translate-y-2
            group-hover:border-[#D4A63D]
            group-hover:shadow-[0_0_50px_rgba(212,166,61,.28)]
          "
        >

          {/* Decorative Corners */}

          <div className="absolute left-2 top-2 z-20 h-5 w-5 border-l-2 border-t-2 border-[#D4A63D]" />
          <div className="absolute right-2 top-2 z-20 h-5 w-5 border-r-2 border-t-2 border-[#D4A63D]" />
          <div className="absolute bottom-2 left-2 z-20 h-5 w-5 border-l-2 border-b-2 border-[#D4A63D]" />
          <div className="absolute bottom-2 right-2 z-20 h-5 w-5 border-r-2 border-b-2 border-[#D4A63D]" />

          {/* Portrait */}

          <div className="relative aspect-[3/4]">

            <Image
  src={portrait}
  alt={name}
  fill
  sizes="220px"
  className="
    object-cover
    brightness-90
    saturate-75
    transition-all
    duration-700
    group-hover:scale-105
    group-hover:brightness-100
    group-hover:saturate-100
  "
/>

            {/* Portrait Vignette */}

            <div
              className="
                absolute
                inset-0
                bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,.22)_100%)]
              "
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

          </div>

        </div>

                        {/* Stone Plaque */}

        <div
          className="
            mx-auto
            -mt-2
            w-[185px]
            rounded-md
            border
            border-[#705422]
            bg-gradient-to-b
            from-[#3A3A3A]
            via-[#2B2B2B]
            to-[#1A1A1A]
            px-4
            py-3
            text-center
            shadow-lg
          "
        >

          <h3 className="font-serif text-xl text-[#FFF3D0]">
            {name}
          </h3>

          <div className="mx-auto my-2 h-px w-12 bg-[#A57A2C]" />

          <p className="text-[10px] uppercase tracking-[0.35em] text-[#D4A63D]">
            {title}
          </p>

        </div>

      </div>
    </Link>
  );
}