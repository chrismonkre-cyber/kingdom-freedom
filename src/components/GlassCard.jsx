import { cn } from "@/lib/utils";

export default function GlassCard({ children, className, gold = false }) {
  return (
    <div
      className={cn(
        "backdrop-blur-md rounded-xl p-6 md:p-8",
        gold
          ? "bg-yellow-900/20 border border-yellow-500/40 shadow-[0_0_30px_rgba(200,160,40,0.15)]"
          : "bg-red-950/30 border border-yellow-600/30 shadow-[0_0_40px_rgba(120,20,30,0.2)]",
        className
      )}
    >
      {children}
    </div>
  );
}