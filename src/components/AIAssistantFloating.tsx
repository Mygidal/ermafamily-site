"use client";
import { useRouter } from "next/navigation";

export default function AIAssistantFloating() {
  const router = useRouter();

  return (
    <div className="lg:hidden">
      <button
        onClick={() => router.push("/ai")}
        className="fixed bottom-4 right-4 z-50 flex size-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-300 to-blue-400 text-sm text-white shadow-lg hover:from-blue-400 hover:to-blue-500"
      >
        ERMA AI
      </button>
    </div>
  );
}
