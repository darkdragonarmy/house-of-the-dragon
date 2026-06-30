import { ReactNode } from "react";

type OrnatePanelProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export default function OrnatePanel({
  title,
  subtitle,
  children,
}: OrnatePanelProps) {
  return (
    <section className="relative mx-auto max-w-7xl px-8 py-16">

      {/* Outer Glow */}
      <div className="absolute inset-0 rounded-[34px] bg-[radial-gradient(circle_at_top,rgba(255,186,64,.08),transparent_70%)]" />

      {/* Main Frame */}
      <div className="relative overflow-hidden rounded-[30px] border border-[#86642d] bg-[#120d0b] shadow-[0_0_60px_rgba(0,0,0,.55)]">

        {/* Gold top trim */}
        <div className="h-[3px] bg-gradient-to-r from-transparent via-yellow-600 to-transparent" />

        {/* Header */}
        <div className="border-b border-[#6d4c1f] bg-gradient-to-b from-[#24160f] to-[#17100d] px-12 py-10">

          {subtitle && (
            <p className="text-center uppercase tracking-[0.45em] text-yellow-600">
              {subtitle}
            </p>
          )}

          <h2 className="mt-3 text-center text-5xl font-bold text-yellow-100">
            {title}
          </h2>

          <div className="mt-8 flex items-center justify-center gap-6">

            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-yellow-700 to-transparent" />

            <img
              src="/images/ui/dragon-divider.png"
              alt=""
              className="h-12 w-12"
            />

            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-yellow-700 to-transparent" />

          </div>

        </div>

        {/* Content */}
        <div className="p-12">
          {children}
        </div>

        {/* Bottom trim */}
        <div className="h-[3px] bg-gradient-to-r from-transparent via-yellow-600 to-transparent" />

      </div>

    </section>
  );
}