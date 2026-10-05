"use client";

import { useState, useEffect } from "react";

export interface MicrolinkData {
  ogImage: string | null;
  logo: string | null;
  title: string | null;
  description: string | null;
  isLoading: boolean;
  hasError: boolean;
}

const cache = new Map<string, MicrolinkData>();

export function useMicrolink(url: string): MicrolinkData {
  const [data, setData] = useState<MicrolinkData>(() => {
    const cached = cache.get(url);
    if (cached) return cached;
    return {
      ogImage: null,
      logo: null,
      title: null,
      description: null,
      isLoading: true,
      hasError: false,
    };
  });

  useEffect(() => {
    if (cache.has(url)) return;

    let cancelled = false;

    async function fetchData() {
      try {
        const res = await fetch(
          `https://api.microlink.io/?url=${encodeURIComponent(url)}`
        );
        if (!res.ok) throw new Error("Failed to fetch");

        const json = await res.json();

        if (json.status !== "success" || !json.data) {
          throw new Error("Invalid response");
        }

        const result: MicrolinkData = {
          ogImage: json.data.image?.url ?? null,
          logo: json.data.logo?.url ?? null,
          title: json.data.title ?? null,
          description: json.data.description ?? null,
          isLoading: false,
          hasError: false,
        };

        cache.set(url, result);
        if (!cancelled) setData(result);
      } catch {
        const errorResult: MicrolinkData = {
          ogImage: null,
          logo: null,
          title: null,
          description: null,
          isLoading: false,
          hasError: true,
        };
        cache.set(url, errorResult);
        if (!cancelled) setData(errorResult);
      }
    }

    fetchData();
    return () => {
      cancelled = true;
    };
  }, [url]);

  return data;
}
