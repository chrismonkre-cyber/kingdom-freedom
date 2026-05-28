import PageWrapper from "../components/PageWrapper";
import PageHeader from "../components/PageHeader";
import GlassCard from "../components/GlassCard";

const LIES_TRUTHS = [
  { lie: "I am trapped.", truth: "\"Whom the Son sets free is free indeed.\" — John 8:36" },
  { lie: "I am condemned.", truth: "\"There is now no condemnation for those in Christ Jesus.\" — Romans 8:1" },
  { lie: "I am alone.", truth: "\"The Lord will never leave me nor forsake me.\" — Hebrews 13:5" },
  { lie: "I cannot change.", truth: "\"If anyone is in Christ, he is a new creation.\" — 2 Corinthians 5:17" },
  { lie: "I am not enough.", truth: "\"I can do all things through Christ who strengthens me.\" — Philippians 4:13" },
  { lie: "God is disappointed in me.", truth: "\"The Lord your God is with you, the Mighty Warrior who saves. He will take great delight in you.\" — Zephaniah 3:17" },
];

const IDENTITY = [
  "I am a child of God. (John 1:12)",
  "I am chosen and dearly loved. (Colossians 3:12)",
  "I am more than a conqueror. (Romans 8:37)",
  "I am the righteousness of God in Christ. (2 Corinthians 5:21)",
  "I am fearfully and wonderfully made. (Psalm 139:14)",
  "I am seated with Christ in heavenly places. (Ephesians 2:6)",
  "I am forgiven and free. (Ephesians 1:7)",
  "I am a royal priesthood. (1 Peter 2:9)",
];

const MEDITATIONS = [
  "\"Be still, and know that I am God.\" — Psalm 46:10",
  "\"The Lord is my shepherd, I lack nothing.\" — Psalm 23:1",
  "\"He gives strength to the weary and increases the power of the weak.\" — Isaiah 40:29",
  "\"The name of the Lord is a fortified tower; the righteous run to it and are safe.\" — Proverbs 18:10",
];

const DECLARATIONS = [
  "My mind is being renewed by the Word of God every day.",
  "I take every thought captive and make it obedient to Christ.",
  "I do not conform to the pattern of this world.",
  "I have the mind of Christ.",
  "Every lie is being replaced with God's truth in my life.",
  "I choose to think on what is true, noble, right, pure, lovely, and admirable.",
];

export default function Mind() {
  return (
    <PageWrapper pageKey="mind">
      <div className="min-h-screen px-4 py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <PageHeader
            title="Renew Your Mind"
            subtitle="Replace every lie with God's truth."
          />

          {/* Lie vs Truth */}
          <GlassCard className="mb-6">
            <h2 className="font-cinzel text-xl md:text-2xl font-bold text-yellow-200 mb-4 text-center">
              Lie vs. Truth
            </h2>
            <div className="space-y-4">
              {LIES_TRUTHS.map((lt, i) => (
                <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-red-950/40 border border-red-500/30 rounded-lg p-4">
                    <span className="font-cinzel text-xs text-red-400 uppercase tracking-wider font-bold">The Lie</span>
                    <p className="font-lora text-yellow-50/90 mt-1 text-sm">{lt.lie}</p>
                  </div>
                  <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4">
                    <span className="font-cinzel text-xs text-yellow-400 uppercase tracking-wider font-bold">God's Truth</span>
                    <p className="font-lora text-yellow-50/90 mt-1 italic text-sm">{lt.truth}</p>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Identity */}
          <GlassCard gold className="mb-6">
            <h2 className="font-cinzel text-xl md:text-2xl font-bold text-yellow-200 mb-4 text-center">
              Your Identity in Christ
            </h2>
            <ul className="space-y-2">
              {IDENTITY.map((item, i) => (
                <li key={i} className="font-lora text-sm text-yellow-50/90 flex items-start gap-2">
                  <span className="text-yellow-400 mt-0.5">✦</span>
                  {item}
                </li>
              ))}
            </ul>
          </GlassCard>

          {/* Scripture Meditation */}
          <GlassCard className="mb-6">
            <h2 className="font-cinzel text-xl md:text-2xl font-bold text-yellow-200 mb-4 text-center">
              Scripture Meditation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {MEDITATIONS.map((m, i) => (
                <div key={i} className="bg-yellow-900/15 border border-yellow-600/20 rounded-lg p-4">
                  <p className="font-lora text-sm text-yellow-50/90 italic leading-relaxed">{m}</p>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Declarations */}
          <GlassCard gold>
            <h2 className="font-cinzel text-xl md:text-2xl font-bold text-yellow-200 mb-4 text-center">
              Daily Declarations
            </h2>
            <div className="space-y-2">
              {DECLARATIONS.map((d, i) => (
                <p key={i} className="font-lora text-sm text-yellow-50/90 leading-relaxed">
                  <span className="text-yellow-400 font-bold mr-2">{i + 1}.</span>
                  {d}
                </p>
              ))}
            </div>
          </GlassCard>

          {/* Daily Practice */}
          <GlassCard className="mt-6">
            <h2 className="font-cinzel text-xl md:text-2xl font-bold text-yellow-200 mb-3 text-center">
              Daily Renewal Practice
            </h2>
            <p className="font-lora text-sm text-yellow-50/90 leading-relaxed text-center max-w-2xl mx-auto">
              Each morning, choose one lie you've been believing. Find the Scripture that speaks truth over it. 
              Write it down, speak it aloud, and carry it with you through the day. As you consistently replace 
              lies with truth, your mind is transformed and freedom becomes your daily reality.
            </p>
          </GlassCard>
        </div>
      </div>
    </PageWrapper>
  );
}