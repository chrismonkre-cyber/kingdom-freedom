const FOOTER_LINKS = [
  { label: "Main Site", href: "https://kingdommandateministry.com" },
  { label: "Pathway", href: "https://pathway.kingdommandateministry.com" },
  { label: "Declarations", href: "https://declarations.kingdommandateministry.com" },
  { label: "Healing Room", href: "https://healing.kingdommandateministry.com" },
  { label: "Purpose Finder", href: "https://purpose.kingdommandateministry.com" },
  { label: "Identity", href: "https://identity.kingdommandateministry.com" },
  { label: "Gift Finder", href: "https://gifts.kingdommandateministry.com" },
  { label: "Battle Plan", href: "https://battle.kingdommandateministry.com" },
  { label: "Grace Vault", href: "https://grace.kingdommandateministry.com" },
  { label: "Revival Fire", href: "https://revival.kingdommandateministry.com" },
  { label: "Family Altar", href: "https://family.kingdommandateministry.com" },
  { label: "Marketplace Mandate", href: "https://marketplace.kingdommandateministry.com" },
  { label: "Bible Companion", href: "https://thebiblecompanion.online" },
  { label: "YouTube", href: "https://www.youtube.com/@KingdomMandateMinistry" },
  { label: "Contact", href: "mailto:kingdommm.chris@gmail.com" },
  { label: "Partner / Sow", href: "https://www.paypal.com/donate/?business=kingdommm.chris%40gmail.com" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 backdrop-blur-md bg-red-950/50 border-t border-yellow-600/30 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-6">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-lora text-yellow-200/70 hover:text-yellow-300 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <p className="text-center text-xs font-lora text-yellow-200/50">
          © 2026 Kingdom Mandate Ministry | Built for the Glory of GOD, by the Grace of GOD
        </p>
      </div>
    </footer>
  );
}