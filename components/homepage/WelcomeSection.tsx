import Button from "@/components/shared/Button";

export default function WelcomeSection() {
  return (
    <section className="relative py-24">

      {/* Top Divider */}

      <div className="mx-auto mb-16 flex max-w-6xl items-center gap-6 px-8">

        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-700 to-yellow-900" />

        <img
          src="/images/ui/dragon-divider.png"
          alt="Divider"
          className="h-16 w-16 opacity-90"
        />

        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-yellow-700 to-yellow-900" />

      </div>

      <div className="mx-auto max-w-5xl px-8 text-center">

        <p className="mb-5 uppercase tracking-[0.55em] text-yellow-500">
          Welcome
        </p>

        <h2 className="font-serif text-6xl text-yellow-100">
          House of the Dragon
        </h2>

        <p className="mt-3 text-2xl text-yellow-600">
          Where Dragons Gather
        </p>

        <p className="mx-auto mt-10 max-w-3xl text-xl leading-9 text-gray-400">
          Welcome to a kingdom built upon friendship, loyalty and adventure.
          Whether you're here to compete in games, earn achievements,
          discover ancient dragon relics, or simply relax in the tavern,
          every traveler has a place within our walls.
        </p>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-500">
          Explore the castle, collect treasures,
          and become part of one of Habbo's most immersive medieval
          communities.
        </p>

        <div className="mt-14 flex flex-wrap justify-center gap-6">

          <Button>
            Enter the Castle
          </Button>

          <Button variant="secondary">
            Join Discord
          </Button>

        </div>

      </div>

      {/* Bottom Divider */}

      <div className="mx-auto mt-20 flex max-w-6xl items-center gap-6 px-8">

        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-700 to-yellow-900" />

        <img
          src="/images/ui/dragon-divider.png"
          alt="Divider"
          className="h-16 w-16 opacity-90"
        />

        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-yellow-700 to-yellow-900" />

      </div>

    </section>
  );
}