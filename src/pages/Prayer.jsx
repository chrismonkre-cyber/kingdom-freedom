import { useState } from "react";
import PageWrapper from "../components/PageWrapper";
import PageHeader from "../components/PageHeader";
import GlassCard from "../components/GlassCard";
import { ChevronDown, ChevronUp } from "lucide-react";

const PRAYERS = [
  {
    title: "Prayer of Surrender",
    text: "Father God, I come before You with an open heart. I surrender every area of my life to You — my fears, my plans, my struggles, my future. I lay it all at Your feet. I trust that You are good, that You love me, and that Your plans for me are better than anything I could design. Take the lead, Lord. I follow You. In Jesus' name, Amen.",
  },
  {
    title: "Prayer for Freedom from Fear",
    text: "Lord Jesus, I come against every spirit of fear that has tried to control me. You have not given me a spirit of fear, but of power, love, and a sound mind. I reject fear's voice. I receive Your peace. Surround me with Your presence and remind me that You are with me wherever I go. I am safe in Your hands. In Jesus' name, Amen.",
  },
  {
    title: "Prayer for Healing the Heart",
    text: "Father, You know every wound I carry — every hurt, every broken place, every memory that still aches. I bring my heart to You and ask for Your healing touch. Bind up what is broken. Restore what was stolen. Pour Your oil of joy into the places of mourning. You are the God who heals, and I trust You with my heart. In Jesus' name, Amen.",
  },
  {
    title: "Prayer to Forgive",
    text: "Lord, I choose to forgive those who have hurt me. This is hard, and I cannot do it without Your grace. But I release them into Your hands. I let go of bitterness, resentment, and the desire for revenge. Set my heart free. Help me love the way You love — with mercy and grace. I forgive as You have forgiven me. In Jesus' name, Amen.",
  },
  {
    title: "Prayer to Renounce Lies",
    text: "Father, I renounce every lie I have believed about myself, about You, and about my future. I reject the voice of the accuser. I declare that Your Word alone is the truth I will build my life on. Expose every deception. Shine Your light on every dark place. Let truth reign in my mind and heart. In Jesus' name, Amen.",
  },
  {
    title: "Prayer for Peace",
    text: "Prince of Peace, I ask for Your peace to fill my heart, my mind, and my home. Calm the storm within me. Quiet the anxiety, the racing thoughts, and the restlessness. Let Your peace — the peace that surpasses all understanding — guard my heart and my mind in Christ Jesus. I receive Your rest. In Jesus' name, Amen.",
  },
  {
    title: "Prayer for Strength",
    text: "Lord, I need Your strength today. I am weary, and my own power is not enough. But You promise to give strength to the weary and power to the weak. I lean on You. Fill me with supernatural endurance. Help me to stand, to keep going, and to trust that Your grace is sufficient. In Jesus' name, Amen.",
  },
  {
    title: "Prayer for Holy Spirit Guidance",
    text: "Holy Spirit, I invite You to lead me today. Guide my steps, my words, and my decisions. Open my ears to hear Your voice. Open my eyes to see what You are doing. Give me wisdom beyond my own understanding. I surrender my plans and follow Yours. Lead me in the path of life. In Jesus' name, Amen.",
  },
  {
    title: "Prayer for Protection",
    text: "Father, I plead the blood of Jesus over my life, my family, my mind, and my home. I put on the full armor of God. I ask for Your angels to surround me and guard me in all my ways. No weapon formed against me shall prosper. I dwell in the secret place of the Most High and rest in the shadow of the Almighty. In Jesus' name, Amen.",
  },
  {
    title: "Prayer for Walking in Victory",
    text: "Lord Jesus, I thank You that I am more than a conqueror through You. I do not walk in defeat — I walk in victory. Every battle belongs to You. Every stronghold is broken by Your power. I stand firm in faith, clothed in Your armor, empowered by Your Spirit. I live as a victor, not a victim. In Jesus' name, Amen.",
  },
];

export default function Prayer() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <PageWrapper pageKey="prayer">
      <div className="min-h-screen px-4 py-16 md:py-20">
        <div className="max-w-3xl mx-auto">
          <PageHeader
            title="Prayer & Deliverance"
            subtitle="Gentle, biblical prayers for freedom and healing."
          />

          <div className="space-y-3">
            {PRAYERS.map((p, i) => {
              const isOpen = openIdx === i;
              return (
                <div key={i} className="relative z-10">
                  <GlassCard className="p-0 overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setOpenIdx(isOpen ? null : i)}
                      className="relative z-20 w-full flex items-center justify-between px-6 py-4 text-left cursor-pointer select-none"
                    >
                      <h3 className="font-cinzel text-sm md:text-base font-bold text-yellow-200 pr-4">
                        {p.title}
                      </h3>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="relative z-20 px-6 pb-6 border-t border-yellow-600/20 pt-4">
                        <p className="font-lora text-sm text-yellow-50/90 leading-relaxed italic">
                          {p.text}
                        </p>
                      </div>
                    )}
                  </GlassCard>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}