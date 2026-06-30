import FounderCard from "@/components/shared/FounderCard";
import Link from "next/link";
import CastleWall from "@/components/homepage/CastleWall";

export default function Founders() {
  return (
    <section
      className="
        relative
        overflow-visible
        pt-0
        pb-24
      "
    >
      {/* Environment */}

      <CastleWall />

      {/* Content */}

      <div className="relative z-20 mx-auto max-w-[1700px] px-8">

                {/* ==========================================================
            HEADING
        ========================================================== */}

        <div className="pt-12 text-center">

          <p
            className="
              text-sm
              uppercase
              tracking-[0.55em]
              text-[#C89C3C]
              drop-shadow-[0_1px_3px_rgba(0,0,0,.7)]
            "
          >
            Welcome to the Great Hall
          </p>

          <h2
            className="
              mt-4
              font-serif
              text-6xl
              tracking-wide
              text-[#FFF4D6]
              drop-shadow-[0_3px_8px_rgba(0,0,0,.85)]
            "
          >
            The Royal Court
          </h2>

          {/* Royal Divider */}

          <div
            className="
              relative
              mx-auto
              mt-6
              h-px
              w-56
              overflow-hidden
              bg-gradient-to-r
              from-transparent
              via-[#C89C3C]
              to-transparent
            "
          >

            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-2
                w-2
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#E8C56A]
                shadow-[0_0_12px_rgba(232,197,106,.7)]
              "
            />

          </div>

           <p
            className="
              mx-auto
              mt-8
              max-w-2xl
              text-lg
              leading-9
              text-[#BFAF8D]
              drop-shadow-[0_2px_4px_rgba(0,0,0,.75)]
            "
          >
            Meet the four leaders whose vision transformed an idea into the
            kingdom known today as House of the Dragon.
          </p>

        </div>

          {/* Portraits */}

        <div
          className="
            mt-20
            grid
            grid-cols-2
            xl:grid-cols-4
            gap-y-12
            justify-items-center
            xl:max-w-[1280px]
            mx-auto
          "
        >

          <div className="animate-founder-float">
            <FounderCard
              name="Fallen"
              title="Founder"
              portrait="/images/founders/lord-fallen-one.png"
              avatar="/images/habbo-avatars/lord-fallen-one.png"
              description=""
            />
          </div>

          <div
            className="animate-founder-float"
            style={{ animationDelay: ".6s" }}
          >
            <FounderCard
              name="Kallista"
              title="Founder"
              portrait="/images/founders/kallista.png"
              avatar="/images/habbo-avatars/kallista.png"
              description=""
            />
          </div>

          <div
            className="animate-founder-float"
            style={{ animationDelay: "1.2s" }}
          >
            <FounderCard
              name="Kikyo8"
              title="Dragon Twin"
              portrait="/images/founders/kikyo8.png"
              avatar="/images/habbo-avatars/kikyo8.png"
              description=""
            />
          </div>

          <div
            className="animate-founder-float"
            style={{ animationDelay: "1.8s" }}
          >
            <FounderCard
              name="Effiecakez"
              title="Dragon Twin"
              portrait="/images/founders/effiecakez.png"
              avatar="/images/habbo-avatars/effiecakez.png"
              description=""
            />
          </div>

        </div>

        {/* Button */}

        <div className="mt-16 text-center">

          <Link
            href="/royal-court"
            className="
              inline-flex
              items-center
              rounded-md
              border
              border-[#8B6A2B]
              bg-[#151515]/80
              px-8
              py-3
              font-serif
              text-[#F5E6B3]
              transition-all
              duration-300
              hover:border-[#D4A63D]
              hover:bg-[#D4A63D]/10
            "
          >
            Meet the Royal Court →
          </Link>

        </div>

      </div>

    </section>
  );
}