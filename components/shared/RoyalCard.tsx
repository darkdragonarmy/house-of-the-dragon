type RoyalCardProps = {
  name: string;
  title: string;
  role: string;
  image: string;
  avatar: string;
  color: string;
};

export default function RoyalCard({
  name,
  title,
  role,
  image,
  avatar,
  color,
}: RoyalCardProps) {
  return (
    <div
      className="
        group
        overflow-hidden
        rounded-2xl
        border
        border-[#8b6329]
        bg-[#17120f]
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-[#d6a54b]
        hover:shadow-[0_0_45px_rgba(214,165,75,.35)]
      "
    >
      {/* Portrait */}

      <div className="relative">

        <img
          src={image}
          alt={name}
          className="
            h-[460px]
            w-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />

        {/* Role Ribbon */}

        <div
          style={{ backgroundColor: color }}
          className="
            absolute
            left-5
            top-5
            rounded-lg
            px-5
            py-2
            text-sm
            font-bold
            uppercase
            tracking-[0.35em]
            text-yellow-300
            shadow-lg
          "
        >
          {title}
        </div>

        {/* Avatar */}

        <div
          className="
            absolute
            -bottom-12
            left-1/2
            -translate-x-1/2
          "
        >
          <img
            src={avatar}
            alt={name}
            className="
              h-24
              w-24
              rounded-xl
              border-2
              border-yellow-500
              bg-[#17120f]
              shadow-xl
            "
          />
        </div>

      </div>

      {/* Text */}

      <div className="px-8 pt-16 pb-8 text-center">

        <h3
          className="
            text-4xl
            font-bold
            leading-tight
            text-yellow-200
          "
        >
          {name}
        </h3>

        <p
          className="
            mt-4
            text-lg
            font-semibold
            leading-relaxed
            text-[#d28a2b]
          "
        >
          {role}
        </p>

      </div>
    </div>
  );
}