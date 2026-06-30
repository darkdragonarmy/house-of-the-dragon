import Image from "next/image";

export default function CastleWall() {
  return (
    <>
      {/* ==========================================================
          STONE WALL
      ========================================================== */}

      <div
        className="
          absolute
          left-0
          right-0
          top-0
          bottom-0
          overflow-hidden
          pointer-events-none
        "
      >
{/* ==========================================================
    TOP LEFT WALL
========================================================== */}

<div
  className="
    absolute
    top-0
    left-0
    h-[51%]
    w-[51%]
    overflow-hidden
  "
>
  <Image
    src="/images/environment/castle-wall.webp"
    alt=""
    fill
    sizes="(max-width: 1280px) 100vw, 50vw"
    className="
      object-cover
      object-top
      opacity-90
    "
  />
</div>

{/* ==========================================================
    TOP RIGHT WALL
========================================================== */}

<div
  className="
    absolute
    top-0
    right-0
    h-[51%]
    w-[51%]
    overflow-hidden
  "
>
  <Image
    src="/images/environment/castle-wall.webp"
    alt=""
    fill
    sizes="(max-width: 1280px) 100vw, 50vw"
    className="
      object-cover
      object-top
      opacity-90
      -scale-x-100
    "
  />
</div>

{/* ==========================================================
    BOTTOM LEFT WALL
========================================================== */}

<div
  className="
    absolute
    bottom-0
    left-0
    h-[51%]
    w-[51%]
    overflow-hidden
  "
>
  <Image
    src="/images/environment/castle-wall.webp"
    alt=""
    fill
    sizes="(max-width: 1280px) 100vw, 50vw"
    className="
      object-cover
      object-bottom
      opacity-90
    "
  />
</div>

{/* ==========================================================
    BOTTOM RIGHT WALL
========================================================== */}

<div
  className="
    absolute
    bottom-0
    right-0
    h-[51%]
    w-[51%]
    overflow-hidden
  "
>
  <Image
    src="/images/environment/castle-wall.webp"
    alt=""
    fill
    sizes="(max-width: 1280px) 100vw, 50vw"
    className="
      object-cover
      object-bottom
      opacity-90
      -scale-x-100
    "
  />
</div>

  {/* ==========================================================
            WARM AMBIENT LIGHT
   ========================================================== */}

        <div className="absolute inset-0 bg-black/10" />

        {/* Left Warm Light */}

        <div
          className="
            absolute
            left-0
            top-0
            h-full
            w-[40%]
            bg-[radial-gradient(circle_at_left,rgba(255,170,70,.20),transparent_72%)]
          "
        />

        {/* Right Warm Light */}

        <div
          className="
            absolute
            right-0
            top-0
            h-full
            w-[40%]
            bg-[radial-gradient(circle_at_right,rgba(255,170,70,.20),transparent_72%)]
          "
        />

        {/* Floating Embers */}


      </div>

    
     {/* ==========================================================
    LEFT COLUMN
========================================================== */}

<div
  className="
    absolute
    bottom-[120px]
    -left-30
    hidden
    xl:block
    pointer-events-none
    z-20
  "
>
  <Image
    src="/images/environment/column.webp"
    alt=""
    width={550}
    height={3000}
    style={{
      width: "550px",
      height: "auto",
    }}
    className="
      max-w-none
      select-none
    "
    draggable={false}
  />
</div>

{/* ==========================================================
    RIGHT COLUMN
========================================================== */}

<div
  className="
    absolute
    bottom-[120px]
    -right-30
    hidden
    xl:block
    pointer-events-none
    z-5
  "
>
  <Image
    src="/images/environment/column.webp"
    alt=""
    width={550}
    height={3000}
    style={{
      width: "550px",
      height: "auto",
    }}
    className="
      max-w-none
      -scale-x-100
      select-none
    "
    draggable={false}
  />
</div>

  {/* ==========================================================
    LEFT BANNER
========================================================== */}

<div
  className="
    absolute
    left-[250px]
    -top-0
    hidden
    h-[460px]
    w-[170px]
    xl:block
    pointer-events-none
    z-10
  "
>
  <Image
    src="/images/environment/banner.webp"
    alt=""
    fill
    sizes="170px"
    className="object-contain"
  />
</div>

{/* ==========================================================
    RIGHT BANNER
========================================================== */}

<div
  className="
    absolute
    right-[250px]
    -top-0
    hidden
    h-[460px]
    w-[170px]
    xl:block
    pointer-events-none
    z-10
  "
>
  <Image
    src="/images/environment/banner.webp"
    alt=""
    fill
    sizes="170px"
    className="object-contain -scale-x-100"
  />
</div>

{/* ==========================================================
    LEFT TORCH
========================================================== */}

<div
  className="
    absolute
    left-[205px]
    top-[265px]
    hidden
    h-[240px]
    w-[95px]
    xl:block
    pointer-events-none
    z-30
  "
>

  {/* Torch Glow */}

  <div
    className="
      absolute
      left-1/2
      top-[-35px]
      h-[320px]
      w-[220px]
      -translate-x-1/2
      rounded-full
      bg-orange-400/25
      blur-[65px]
      animate-torch-glow
      z-10
    "
  />

  {/* ==========================================================
      EMBERS
  ========================================================== */}

  <Image
    src="/images/environment/ember-1.webp"
    alt=""
    width={30}
    height={30}
    className="
      absolute
      left-[38px]
      top-[-36px]
      animate-ember-one
      pointer-events-none
      mix-blend-screen
      z-25
    "
  />

  <Image
    src="/images/environment/ember-2.webp"
    alt=""
    width={24}
    height={24}
    className="
      absolute
      left-[56px]
      top-[-28px]
      animate-ember-two
      pointer-events-none
      mix-blend-screen
      z-25
    "
  />

  <Image
    src="/images/environment/ember-3.webp"
    alt=""
    width={20}
    height={20}
    className="
      absolute
      left-[46px]
      top-[-18px]
      animate-ember-three
      pointer-events-none
      mix-blend-screen
      z-25
    "
  />

  {/* Flame */}

  <Image
    src="/images/environment/torch-flame.webp"
    alt=""
    fill
    sizes="95px"
    className="
      absolute
      inset-0
      object-contain
      translate-x-[7px]
      -translate-y-22
      scale-[0.82]
      animate-flame
      mix-blend-screen
      z-20
    "
  />

  {/* Holder */}

  <Image
    src="/images/environment/torch-holder.webp"
    alt=""
    fill
    sizes="95px"
    className="
      object-contain
      relative
      z-30
    "
  />

</div>

{/* ==========================================================
    RIGHT TORCH
========================================================== */}

<div
  className="
    absolute
    right-[205px]
    top-[265px]
    hidden
    h-[240px]
    w-[95px]
    xl:block
    pointer-events-none
    z-30
  "
>

  {/* Torch Glow */}

  <div
    className="
      absolute
      left-1/2
      top-[-35px]
      h-[320px]
      w-[220px]
      -translate-x-1/2
      rounded-full
      bg-orange-400/25
      blur-[65px]
      animate-torch-glow
      z-10
    "
  />

  {/* ==========================================================
      EMBERS
  ========================================================== */}

  <Image
    src="/images/environment/ember-1.webp"
    alt=""
    width={30}
    height={30}
    className="
      absolute
      left-[38px]
      top-[-36px]
      animate-ember-one
      pointer-events-none
      mix-blend-screen
      z-25
    "
  />

  <Image
    src="/images/environment/ember-2.webp"
    alt=""
    width={24}
    height={24}
    className="
      absolute
      left-[56px]
      top-[-28px]
      animate-ember-two
      pointer-events-none
      mix-blend-screen
      z-25
    "
  />

  <Image
    src="/images/environment/ember-3.webp"
    alt=""
    width={20}
    height={20}
    className="
      absolute
      left-[46px]
      top-[-18px]
      animate-ember-three
      pointer-events-none
      mix-blend-screen
      z-25
    "
  />

  {/* Flame */}

  <Image
    src="/images/environment/torch-flame.webp"
    alt=""
    fill
    sizes="95px"
    className="
      absolute
      inset-0
      object-contain
      -scale-x-100
      -translate-x-[7px]
      -translate-y-22
      scale-[0.82]
      animate-flame
      mix-blend-screen
      z-20
    "
  />

  {/* Holder */}

  <Image
    src="/images/environment/torch-holder.webp"
    alt=""
    fill
    sizes="95px"
    className="
      object-contain
      -scale-x-100
      relative
      z-30
    "
  />

</div>

  {/* ==========================================================
    FLOOR
========================================================== */}

<div
  className="
    absolute
    bottom-0
    left-0
    h-[185px]
    w-full
    overflow-hidden
    pointer-events-none
  "
>
  <Image
    src="/images/environment/castle-floor.webp"
    alt=""
    fill
    sizes="100vw"
    className="object-cover object-top"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
</div>
    </>
  );
}