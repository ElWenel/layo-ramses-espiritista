"use client";

import dynamic from "next/dynamic";

const CosmicBackground = dynamic(() => import("./CosmicBackground"), {
  ssr: false,
});

export default function ClientCosmicBackground() {
  return <CosmicBackground />;
}
