import { useState } from "react";
import PageWrapper from "../components/PageWrapper";
import PageHeader from "../components/PageHeader";
import GlassCard from "../components/GlassCard";
import { ChevronDown, ChevronUp } from "lucide-react";

const STEPS = [
  {
    title: "1. Recognize the Chain",
    teaching: "Freedom begins with honesty. You cannot break what you refuse to name. Ask the Holy Spirit to reveal the areas of your life where bondage still exists — fear, unforgiveness, shame, addiction, wrong beliefs, or spiritual oppression.",
    scripture: "\"Search me, God, and know my heart; test me and know my anxious thoughts.\" — Psalm 139:23",
    prayer: "Lord, I ask You to search my heart. Show me where I am still bound. Give me the courage to face it honestly. I trust You to lead me to freedom. In Jesus' name, Amen.",
    action: "Sit quietly and ask the Holy Spirit: 'Where am I still bound?' Write down whatever comes to your heart.",
  },
  {
    title: "2. Bring It Into the Light",
    teaching: "The enemy thrives in secrecy. When you bring your struggle into the light — before God and trusted community — its power begins to break. Confession is not weakness; it is warfare.",
    scripture: "\"But if we walk in the light, as he is in the light, we have fellowship with one another, and the blood of Jesus, his Son, purifies us from all sin.\" — 1 John 1:7",
    prayer: "Father, I bring my struggle into the light before You. I refuse to hide. I trust that Your blood covers me and Your grace meets me here. In Jesus' name, Amen.",
    action: "Share your struggle with God in prayer. If possible, confide in a trusted believer who can pray with you.",
  },
  {
    title: "3. Surrender It to Jesus",
    teaching: "You were never meant to carry it alone. Jesus invites you to lay every burden at His feet. Surrender is not defeat — it is the doorway to divine intervention.",
    scripture: "\"Come to me, all you who are weary and burdened, and I will give you rest.\" — Matthew 11:28",
    prayer: "Jesus, I surrender this burden to You. I cannot carry it anymore. I give You full access to this area of my life. Take it, Lord. I trust You completely. In Jesus' name, Amen.",
    action: "Physically open your hands in prayer as a symbol of releasing your burden to Jesus. Speak it out: 'I surrender this to You, Lord.'",
  },
  {
    title: "4. Receive the Truth",
    teaching: "Every chain is reinforced by a lie. Freedom comes when the lie is replaced with God's truth. Let the Word of God become your new foundation — not feelings, not circumstances, not the past.",
    scripture: "\"Then you will know the truth, and the truth will set you free.\" — John 8:32",
    prayer: "Lord, speak Your truth over my life. Replace every lie with Your Word. Let Your truth be the foundation I build my freedom on. In Jesus' name, Amen.",
    action: "Find a Scripture that directly speaks to your situation. Write it down and meditate on it throughout the day.",
  },
  {
    title: "5. Speak the Word",
    teaching: "There is power in your mouth. When you declare God's Word out loud, it shifts the atmosphere. It silences the enemy. It builds your faith. Speak life. Speak truth. Speak freedom.",
    scripture: "\"Death and life are in the power of the tongue.\" — Proverbs 18:21",
    prayer: "Father, let my words align with Yours. I choose to speak life, truth, and freedom. Let my declarations carry the power of heaven. In Jesus' name, Amen.",
    action: "Choose 3 freedom declarations and speak them out loud every morning this week.",
  },
  {
    title: "6. Walk in New Obedience",
    teaching: "Freedom is sustained by obedience. As you follow the leading of the Holy Spirit — in small choices, daily habits, and renewed thinking — you build a life of lasting freedom.",
    scripture: "\"If you love me, keep my commands. And I will ask the Father, and he will give you another advocate to help you and be with you forever.\" — John 14:15–16",
    prayer: "Holy Spirit, guide my steps. Help me walk in new obedience — not in my own strength, but in Your power. Let every choice I make honor the freedom Christ has given me. In Jesus' name, Amen.",
    action: "Identify one area where God is asking you to take a new step of obedience. Do it today, even if it's small.",
  },
  {
    title: "7. Guard Your Freedom",
    teaching: "The enemy will test your freedom. He will try to lure you back into old patterns, old thinking, old habits. But you are not defenseless. Stay in the Word. Stay in prayer. Stay in community. Stand firm.",
    scripture: "\"It is for freedom that Christ has set us free. Stand firm, then, and do not let yourselves be burdened again by a yoke of slavery.\" — Galatians 5:1",
    prayer: "Lord, help me guard the freedom You have given me. Keep me alert, grounded in Your Word, and surrounded by truth. I refuse to go back to bondage. In Jesus' name, Amen.",
    action: "Create a weekly freedom plan: daily Scripture, daily prayer, weekly accountability, and a worship habit that keeps your spirit strong.",
  },
];

export default function Journey() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <PageWrapper pageKey="journey">
      <div className="min-h-screen px-4 py-16 md:py-20">
        <div className="max-w-3xl mx-auto">
          <PageHeader
            title="Freedom Journey"
            subtitle="A guided path from bondage into breakthrough."
          />

          <div className="space-y-4">
            {STEPS.map((step, i) => {
              const isOpen = openIdx === i;
              return (
                <GlassCard key={i} className="p-0 overflow-hidden">
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer"
                  >
                    <h3 className="font-cinzel text-base md:text-lg font-bold text-yellow-200">
                      {step.title}
                    </h3>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 space-y-4 border-t border-yellow-600/20 pt-4">
                      <div>
                        <h4 className="font-cinzel text-xs font-bold text-yellow-400 uppercase tracking-wider mb-1">Teaching</h4>
                        <p className="font-lora text-base text-white0 leading-relaxed">{step.teaching}</p>
                      </div>
                      <div>
                        <h4 className="font-cinzel text-xs font-bold text-yellow-400 uppercase tracking-wider mb-1">Scripture</h4>
                        <p className="font-lora text-base text-white italic leading-relaxed">{step.scripture}</p>
                      </div>
                      <div>
                        <h4 className="font-cinzel text-xs font-bold text-yellow-400 uppercase tracking-wider mb-1">Prayer</h4>
                        <p className="font-lora text-base text-white leading-relaxed">{step.prayer}</p>
                      </div>
                      <div>
                        <h4 className="font-cinzel text-xs font-bold text-yellow-400 uppercase tracking-wider mb-1">Action Step</h4>
                        <p className="font-lora text-base text-white leading-relaxed">{step.action}</p>
                      </div>
                    </div>
                  )}
                </GlassCard>
              );
            })}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
