"use client";

import { usePathname, useRouter } from "next/navigation";

export default function AIAssistantFloating() {
  const router = useRouter();
  const pathname = usePathname();

  // Скриваме бутона, ако текущият път е "/ai"
  if (pathname.startsWith("/ai")) {
    return null;
  }

  return (
    <div className="max-w-[100vw] overflow-x-hidden lg:hidden">
      <button
        onClick={() => router.push("/ai")}
        className="fixed bottom-4 right-4 z-50 flex h-14 w-14 max-w-full shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-300 to-blue-400 text-sm text-white shadow-lg transition-colors duration-200 hover:from-blue-400 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Open ERMA AI Chat"
      >
        ERMA AI
      </button>
    </div>
  );
}
