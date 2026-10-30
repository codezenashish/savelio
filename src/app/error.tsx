"use client";

import React, { useEffect } from "react";

interface GalleryErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GalleryError({ error, reset }: GalleryErrorProps) {
  useEffect(() => {
    console.error("GalleryError caught:", error);
  }, [error]);

  return (
    <main className="mx-auto flex min-h-[60vh] w-full max-w-xl flex-col items-center justify-center gap-3 px-6 text-center">
      <h1 className="heading">Resources couldn’t load</h1>
      <p className="body-text">
        There was a problem loading the library. Please try again in a moment.
      </p>
      <button
        type="button"
        onClick={reset}
        className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
      >
        Try again
      </button>
    </main>
  );
}
