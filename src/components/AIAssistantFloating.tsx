"use client";

import { useState } from "react";
import AIAssistant from "./AIAssistant";

export default function AIAssistantFloating() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-4 right-4 z-50 flex size-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-300 to-blue-400 text-sm text-white shadow-lg hover:from-blue-400 hover:to-blue-500"
        >
          ERMA AI
        </button>
      )}

      {open && (
        <div className="fixed inset-0 z-50 flex h-full flex-col overflow-hidden bg-white shadow-lg">
          <div className="flex items-center justify-between border-b p-4 shadow-sm">
            <h2 className="text-lg font-semibold text-blue-900">ERMA AI</h2>
            <button
              onClick={() => setOpen(false)}
              className="text-sm text-gray-500 underline"
            >
              ✕ Затвори
            </button>
          </div>

          <div className="flex-1 p-2">
            <AIAssistant />
          </div>
        </div>
      )}
    </div>
  );
}
