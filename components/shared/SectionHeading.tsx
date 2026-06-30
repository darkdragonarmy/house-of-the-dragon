type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-20 text-center">

      <p className="uppercase tracking-[0.45em] text-yellow-500 font-semibold">
        {eyebrow}
      </p>

      <h2 className="mt-4 text-5xl md:text-6xl font-bold text-yellow-200">
        {title}
      </h2>

      <div className="mx-auto mt-8 h-px w-40 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />

      {description && (
        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
          {description}
        </p>
      )}

    </div>
  );
}