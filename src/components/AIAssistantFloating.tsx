"use client";

import { useRouter } from "next/navigation";

export default function AIAssistantFloating() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/ai")}
      className="fixed bottom-4 right-4 z-50 flex h-14 w-14 max-w-full shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-300 to-blue-400 text-sm text-white shadow-lg transition-colors duration-200 hover:from-blue-400 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 lg:hidden"
      aria-label="Open ERMA AI Chat"
    >
      ERMA AI
    </button>
  );
}
