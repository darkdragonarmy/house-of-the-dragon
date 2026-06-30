import CastleCard from "@/components/shared/CastleCard";

const rooms = [
  {
    title: "Achievement Hall",
    subtitle: "Complete Achievements",
    description:
      "Discover dozens of achievement helpers and daily objectives designed to help every member progress through Habbo's achievement system.",
    image: "/images/habbo/rooms/achievement.jpg",
  },
  {
    title: "Games Arena",
    subtitle: "13 Official Games",
    description:
      "Compete with friends across our growing collection of hosted games, tournaments and community events held throughout the week.",
    image: "/images/habbo/rooms/games.jpg",
  },
  {
    title: "Totem Sanctuary",
    subtitle: "Ancient Dragon Powers",
    description:
      "Unlock both classic and modern totem effects using our complete collection of community totems, available for everyone to enjoy.",
    image: "/images/habbo/rooms/totems.jpg",
  },
  {
    title: "Dragon Market",
    subtitle: "Trade & Collect",
    description:
      "Browse furniture, rares, collectibles and exclusive community services offered by members of House of the Dragon.",
    image: "/images/habbo/rooms/store.jpg",
  },
  {
    title: "Royal Lounge",
    subtitle: "Meet the Community",
    description:
      "Relax with friends, enjoy DJs, special visitors and community events inside the social heart of the kingdom.",
    image: "/images/habbo/rooms/lounge.jpg",
  },
  {
    title: "Dragon Companions",
    subtitle: "Bot Rentals",
    description:
      "Summon your own custom dragon companion and become part of the Royal Castle through our monthly bot sponsorship program.",
    image: "/images/habbo/rooms/bots.jpg",
  },
];

export default function CastleExplorer() {
  return (
    <section className="bg-gradient-to-b from-[#18120d] to-[#0f0b08] py-28">
      <div className="mx-auto max-w-7xl px-8">

        <div className="mb-16 text-center">

          <p className="uppercase tracking-[0.4em] text-yellow-500">
            Discover
          </p>

          <h2 className="mt-3 text-5xl font-bold text-yellow-200">
            Explore the Kingdom
          </h2>

          <div className="mx-auto mt-6 h-px w-40 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />

          <p className="mx-auto mt-8 max-w-3xl text-lg text-gray-300">
            Whether you're here to play games, complete achievements,
            socialize, visit our market or simply relax with friends,
            every room has something unique waiting for you.
          </p>

        </div>

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">

          {rooms.map((room) => (
            <CastleCard
  key={room.title}
  title={room.title}
  subtitle={room.subtitle}
  description={room.description}
  image={room.image}
/>
          ))}

        </div>

      </div>
    </section>
  );
}