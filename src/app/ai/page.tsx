import AIAssistant from "../../components/AIAssistant";

export default function AIChatPage() {
  return (
    <div
      className="flex min-h-screen w-full max-w-full flex-col bg-white px-2 pb-6 pt-[80px]"
      style={{
        maxWidth: "100vw",
        overflowX: "hidden",
      }}
    >
      <AIAssistant />
    </div>
  );
}
