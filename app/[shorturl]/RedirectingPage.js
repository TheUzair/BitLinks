"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RedirectingPage({ url }) {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace(url);
    }, 1000); // Delay of 1 second

    return () => clearTimeout(timer);
  }, [url, router]);

  return <div>Redirecting you...</div>;
}
