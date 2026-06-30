import Image from "next/image";

export default function HeroBackground() {
  return (
    <>
      {/* Sky */}
      <div className="absolute inset-0">
        <Image
          src="/images/backgrounds/hero-sky.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Dragon */}
      <div className="absolute left-[-10%] bottom-[-2%] h-full w-[58%]">
        <Image
          src="/images/dragons/hero-dragon.webp"
          alt=""
          fill
          priority
          sizes="58vw"
          className="object-contain object-left-bottom"
        />
      </div>

      {/* Castle */}
      <div className="absolute right-[-3%] bottom-0 h-full w-[60%]">
        <Image
          src="/images/castle/hero-castle.webp"
          alt=""
          fill
          priority
          sizes="60vw"
          className="object-contain object-right-bottom"
        />
      </div>
    </>
  );
}