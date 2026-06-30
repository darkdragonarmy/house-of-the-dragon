export default function PageFrame({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative overflow-hidden bg-[#0a0604] text-[#f3dfaa]">

      {/* Top Border */}

      <div className="mx-auto max-w-[1700px] px-6 pt-6">

        <div className="h-px bg-gradient-to-r from-transparent via-yellow-700 to-transparent" />

      </div>

      {/* Left Ornament */}

      <div className="pointer-events-none fixed left-5 top-1/2 hidden -translate-y-1/2 xl:block">

        <div className="h-[520px] w-px bg-gradient-to-b from-transparent via-yellow-700 to-transparent" />

      </div>

      {/* Right Ornament */}

      <div className="pointer-events-none fixed right-5 top-1/2 hidden -translate-y-1/2 xl:block">

        <div className="h-[520px] w-px bg-gradient-to-b from-transparent via-yellow-700 to-transparent" />

      </div>

      {children}

      {/* Bottom Border */}

      <div className="mx-auto max-w-[1700px] px-6 pb-8">

        <div className="h-px bg-gradient-to-r from-transparent via-yellow-700 to-transparent" />

      </div>

    </main>
  );
}