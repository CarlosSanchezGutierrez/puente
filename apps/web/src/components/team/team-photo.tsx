"use client";

import Image from "next/image";
import { useState } from "react";

export function TeamPhoto({
  src,
  alt,
  initials,
}: {
  src: string;
  alt: string;
  initials: string;
}) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="flex h-full min-h-[260px] w-full items-center justify-center bg-[radial-gradient(circle_at_top_left,rgba(16,35,63,0.12),transparent_42%),#fbfaf7]">
        <div className="flex size-24 items-center justify-center rounded-full border border-[#d7dedf] bg-white/80 text-2xl font-semibold tracking-[0.18em] text-[#10233f] shadow-sm">
          {initials}
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-full min-h-[260px] w-full overflow-hidden bg-[#fbfaf7]">
      <Image
        alt={alt}
        className="object-cover"
        fill
        onError={() => setHasError(true)}
        priority={false}
        sizes="(min-width: 1024px) 50vw, 100vw"
        src={src}
      />
    </div>
  );
}