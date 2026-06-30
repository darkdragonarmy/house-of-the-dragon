import HeroBackground from "@/components/homepage/HeroBackground";
import Button from "@/components/shared/Button";
import HeroAtmosphere from "@/components/homepage/HeroAtmosphere";

export default function Hero() {
  return (
    <section className="relative h-[92vh] overflow-hidden">
      {/* Background */}
      <HeroBackground />
      <HeroAtmosphere />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-20 flex h-full items-center justify-center">
        <div className="max-w-5xl text-center">
          {/* Welcome */}
          <p
            className="
              mb-4
              uppercase
              tracking-[0.75em]
              text-[#D4A63D]
              text-base
              font-medium
            "
          >
            Welcome To
          </p>

          {/* Title */}
          <h1
            className="
              font-serif
              text-[7.75rem]
              leading-[0.85]
              font-semibold
              tracking-tight

              bg-gradient-to-b
              from-[#FFF8DD]
              via-[#F1D37B]
              to-[#A86E1A]

              bg-clip-text
              text-transparent

              drop-shadow-[0_8px_30px_rgba(0,0,0,.85)]
            "
            style={{
              textShadow:
                "0 0 10px rgba(255,220,120,.10), 0 0 35px rgba(255,150,20,.08)",
            }}
          >
            HOUSE
            <br />
            OF THE
            <br />
            DRAGON
          </h1>

          {/* Divider */}
          <div className="my-10 flex justify-center">
            <div
              className="
                h-px
                w-72
                bg-gradient-to-r
                from-transparent
                via-[#B8852F]
                to-transparent
              "
            />
          </div>

          {/* Subtitle */}
          <p
            className="
              mx-auto
              mb-12
              max-w-3xl
              text-2xl
              leading-9
              text-[#D9C58E]
            "
          >
            A kingdom built on friendship, loyalty, adventure and dragons.
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-8">
            <Button>
              Enter the Castle
            </Button>

            <Button variant="secondary">
              Join Discord
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}