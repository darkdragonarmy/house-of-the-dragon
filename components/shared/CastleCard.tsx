type CastleCardProps = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
};

export default function CastleCard({
  title,
  subtitle,
  description,
  image,
}: CastleCardProps) {
  return (
    <div
      className="
      group
      overflow-hidden
      rounded-xl
      border
      border-[#7b5a28]
      bg-[#17120f]
      transition-all
      duration-500
      hover:-translate-y-2
      hover:border-[#d6a54b]
      hover:shadow-[0_0_35px_rgba(212,166,67,.35)]
      "
    >
      <div className="relative h-60 overflow-hidden">

        <img
          src={image}
          alt={title}
          className="
          h-full
          w-full
          object-cover
          transition-transform
          duration-700
          group-hover:scale-110
          "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#17120f] via-transparent to-transparent" />

        <div className="absolute bottom-4 left-5">
          <h3 className="text-3xl font-bold text-[#f3d17b]">
            {title}
          </h3>
        </div>

      </div>

      <div className="p-6">

        <p className="text-yellow-500 text-sm uppercase tracking-widest mb-2">
  {subtitle}
</p>

<p className="mb-6 text-gray-400 leading-relaxed">
  {description}
</p>

        <button
          className="
          rounded-lg
          border
          border-[#b88632]
          bg-[#3d120d]
          px-5
          py-3
          font-semibold
          text-[#f6d27d]
          transition
          hover:bg-[#651b13]
          "
        >
          Enter →
        </button>

      </div>

    </div>
  );
}