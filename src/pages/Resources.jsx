import PageWrapper from "../components/PageWrapper";
import PageHeader from "../components/PageHeader";
import GlassCard from "../components/GlassCard";
import { ExternalLink } from "lucide-react";

const RESOURCES = [
  { name: "The Bible Companion", desc: "Scripture study, devotionals, and biblical tools", href: "https://thebiblecompanion.online" },
  { name: "Kingdom Pathway", desc: "A guided discipleship and spiritual growth journey", href: "https://pathway.kingdommandateministry.com" },
  { name: "Kingdom Declarations", desc: "Speak God's Word over every area of your life", href: "https://declarations.kingdommandateministry.com" },
  { name: "Kingdom Healing Room", desc: "Biblical prayers and resources for healing and wholeness", href: "https://healing.kingdommandateministry.com" },
  { name: "Kingdom Purpose Finder", desc: "Discover the unique purpose God has placed inside you", href: "https://purpose.kingdommandateministry.com" },
  { name: "Kingdom Identity", desc: "Understand who you truly are in Christ", href: "https://identity.kingdommandateministry.com" },
  { name: "Kingdom Gift Finder", desc: "Uncover your spiritual gifts and step into your calling", href: "https://gifts.kingdommandateministry.com" },
  { name: "Kingdom Battle Plan", desc: "Strategic spiritual warfare tools and prayers", href: "https://battle.kingdommandateministry.com" },
  { name: "Kingdom Grace Vault", desc: "A treasury of God's grace, promises, and encouragement", href: "https://grace.kingdommandateministry.com" },
  { name: "Kingdom Revival Fire", desc: "Stir the fire of revival in your life and community", href: "https://revival.kingdommandateministry.com" },
  { name: "Kingdom Family Altar", desc: "Build a strong spiritual foundation for your family", href: "https://family.kingdommandateministry.com" },
  { name: "Kingdom Marketplace Mandate", desc: "Faith-driven excellence in business and the marketplace", href: "https://marketplace.kingdommandateministry.com" },
  { name: "Kingdom Mandate Ministry", desc: "The main ministry site — awakening and equipping believers", href: "https://kingdommandateministry.com" },
  { name: "YouTube Channel", desc: "Watch teachings, worship, and ministry content", href: "https://www.youtube.com/@KingdomMandateMinistry" },
  { name: "Partner / Sow", desc: "Support the ministry through giving", href: "https://www.paypal.com/donate/?business=kingdommm.chris%40gmail.com" },
  { name: "Contact", desc: "Reach out for prayer, partnership, or questions", href: "mailto:kingdommm.chris@gmail.com" },
];

export default function Resources() {
  return (
    <PageWrapper pageKey="resources">
      <div className="min-h-screen px-4 py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <PageHeader
            title="Freedom Resources"
            subtitle="Continue the journey with the Kingdom Mandate Ministry ecosystem."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {RESOURCES.map((r) => (
              <a
                key={r.name}
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <GlassCard className="h-full transition-all group-hover:bg-yellow-900/25 group-hover:border-yellow-500/50 group-hover:shadow-[0_0_30px_rgba(200,160,40,0.25)]">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-cinzel text-sm font-bold text-yellow-200 group-hover:text-yellow-100 transition-colors mb-1">
                        {r.name}
                      </h3>
                      <p className="font-lora text-base text-white leading-relaxed">
                        {r.desc}
                      </p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-yellow-400/50 group-hover:text-yellow-300 flex-shrink-0 mt-1 transition-colors" />
                  </div>
                </GlassCard>
              </a>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
