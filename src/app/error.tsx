"use client";

interface GalleryErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GalleryError({ reset }: GalleryErrorProps) {
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
