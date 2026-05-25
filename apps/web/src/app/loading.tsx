export default function Loading() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <div className="animate-pulse">
        <div className="h-8 w-48 rounded-full bg-[#d7dedf]" />

        <div className="mt-8 grid gap-10 md:grid-cols-[1fr_0.85fr]">
          <div>
            <div className="h-16 w-full max-w-2xl rounded-3xl bg-[#d7dedf] md:h-24" />
            <div className="mt-4 h-16 w-full max-w-xl rounded-3xl bg-[#d7dedf]/70 md:h-20" />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="h-12 rounded-full bg-[#d7dedf]/80" />
              <div className="h-12 rounded-full bg-[#d7dedf]/60" />
            </div>
          </div>

          <div className="h-[360px] rounded-[2rem] border border-[#d7dedf] bg-white/60" />
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          <div className="h-48 rounded-[1.5rem] border border-[#d7dedf] bg-white/60" />
          <div className="h-48 rounded-[1.5rem] border border-[#d7dedf] bg-white/60" />
          <div className="h-48 rounded-[1.5rem] border border-[#d7dedf] bg-white/60" />
        </div>
      </div>
    </div>
  );
}