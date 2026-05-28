import { Link } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import PageHeader from "../components/PageHeader";
import GlassCard from "../components/GlassCard";
import { Flame, Shield, BookOpen, Crown } from "lucide-react";

const FEATURES = [
  {
    icon: Flame,
    title: "Break Every Chain",
    text: "Through the power of Jesus Christ, fear, shame, bondage, and oppression must bow.",
  },
  {
    icon: Shield,
    title: "Walk in Liberty",
    text: "You were not created to live bound. You were created to walk free in Christ.",
  },
  {
    icon: BookOpen,
    title: "Renew Your Mind",
    text: "Freedom grows as God's truth replaces every lie.",
  },
  {
    icon: Crown,
    title: "Stand in Victory",
    text: "Live as more than a conqueror through Him who loves you.",
  },
];

const BUTTONS = [
  { label: "Start Today", to: "/daily" },
  { label: "Freedom Journey", to: "/journey" },
  { label: "Break Every Chain", to: "/chains" },
  { label: "Prayer & Deliverance", to: "/prayer" },
  { label: "Journal", to: "/journal" },
];

export default function Home() {
  return (
    <PageWrapper pageKey="home">
      <div className="min-h-screen flex items-center justify-center px-4 py-16 md:py-20">
        <div className="max-w-5xl w-full">
          <PageHeader
            title="Kingdom Freedom"
            subtitle="Break chains. Walk in liberty. Live free in Christ."
          />

          <GlassCard className="mb-8 text-center">
            <p className="font-lora text-base md:text-lg text-yellow-50/90 leading-relaxed max-w-3xl mx-auto">
              Jesus came to set captives free, heal the brokenhearted, deliver the oppressed,
              and restore what the enemy has stolen. Kingdom Freedom helps you walk in truth,
              renew your mind, pray with faith, and stand in victory through the power of Christ.
            </p>
          </GlassCard>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {BUTTONS.map((btn) => (
              <Link
                key={btn.label}
                to={btn.to}
                className="px-5 py-2.5 font-cinzel text-sm font-semibold rounded-lg bg-gradient-to-r from-yellow-600/80 to-yellow-500/80 text-yellow-50 border border-yellow-400/40 hover:from-yellow-500/90 hover:to-yellow-400/90 transition-all shadow-[0_0_15px_rgba(200,160,40,0.2)] hover:shadow-[0_0_25px_rgba(200,160,40,0.4)]"
              >
                {btn.label}
              </Link>
            ))}
            <a
              href="https://www.paypal.com/donate/?business=kingdommm.chris%40gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 font-cinzel text-sm font-semibold rounded-lg bg-gradient-to-r from-red-800/80 to-red-700/80 text-yellow-100 border border-yellow-500/30 hover:from-red-700/90 hover:to-red-600/90 transition-all shadow-[0_0_15px_rgba(180,40,40,0.2)]"
            >
              Partner / Sow
            </a>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {FEATURES.map((f) => (
              <GlassCard key={f.title} gold className="text-center">
                <f.icon className="w-10 h-10 text-yellow-400 mx-auto mb-3 drop-shadow-[0_0_8px_rgba(200,160,40,0.5)]" />
                <h3 className="font-cinzel text-lg font-bold text-yellow-200 mb-2">{f.title}</h3>
                <p className="font-lora text-sm text-yellow-50/80 leading-relaxed">{f.text}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}