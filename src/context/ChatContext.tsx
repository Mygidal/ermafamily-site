"use client";

import { createContext, useContext, useState } from "react";

type ChatContextType = {
  open: boolean;
  openChat: () => void;
  closeChat: () => void;
};

const ChatContext = createContext<ChatContextType | null>(null);

export function ChatProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <ChatContext.Provider
      value={{
        open,
        openChat: () => setOpen(true),
        closeChat: () => setOpen(false),
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  const ctx = useContext(ChatContext);
  if (!ctx) throw new Error("useChat must be used within ChatProvider");
  return ctx;
}
