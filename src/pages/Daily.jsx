import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PageWrapper from "../components/PageWrapper";
import PageHeader from "../components/PageHeader";
import GlassCard from "../components/GlassCard";

const DAYS = [
  {
    theme: "Freedom in Christ",
    scripture: "\"So if the Son sets you free, you will be free indeed.\" — John 8:36",
    encouragement: "Freedom is not something you earn. It is a gift already purchased by Jesus. He has already broken the chains. Today, choose to believe it and walk in it.",
    prayer: "Lord Jesus, I thank You that You came to set me free. I receive Your freedom today — not because I deserve it, but because You paid for it. Help me walk in the liberty You have already given me. In Jesus' name, Amen.",
    declaration: "I am free in Christ. No chain can hold me. No bondage defines me. I walk in the freedom the Son has given me, and it is real and lasting.",
    action: "Write down one area where you need to receive freedom today. Surrender it to Jesus in prayer.",
    reflection: "Where in my life am I still living as if I'm bound, even though Jesus says I'm free?",
  },
  {
    theme: "No Longer a Slave to Fear",
    scripture: "\"For God has not given us a spirit of fear, but of power and of love and of a sound mind.\" — 2 Timothy 1:7",
    encouragement: "Fear is a liar. It tells you that God is not enough, that you are not safe, that tomorrow is uncertain. But the Spirit of God within you is greater than any fear.",
    prayer: "Father, I renounce the spirit of fear. I receive Your spirit of power, love, and a sound mind. Where fear has spoken, let Your truth speak louder. In Jesus' name, Amen.",
    declaration: "I am not a slave to fear. I am a child of God. I have been given power, love, and a sound mind. Fear has no authority over me.",
    action: "Name one fear that has been controlling your thoughts. Speak 2 Timothy 1:7 over it out loud three times.",
    reflection: "What fear have I been treating as truth instead of recognizing it as a lie?",
  },
  {
    theme: "Renewed Mind",
    scripture: "\"Do not conform to the pattern of this world, but be transformed by the renewing of your mind.\" — Romans 12:2",
    encouragement: "Your mind is the battlefield. The enemy wants to keep you thinking old thoughts, believing old lies. But God's Word transforms you from the inside out.",
    prayer: "Lord, renew my mind today. Remove every thought that contradicts Your Word. Replace every lie with Your truth. Let my thinking be aligned with heaven. In Jesus' name, Amen.",
    declaration: "My mind is being renewed by the Word of God. I do not conform to the pattern of this world. I think with the mind of Christ.",
    action: "Choose one lie you've been believing. Write down the truth from Scripture that replaces it. Meditate on it throughout the day.",
    reflection: "What thought pattern has been holding me back from experiencing God's best?",
  },
  {
    theme: "Forgiven and Free",
    scripture: "\"As far as the east is from the west, so far has He removed our transgressions from us.\" — Psalm 103:12",
    encouragement: "Guilt and shame try to keep you chained to the past. But Jesus has removed your sin completely. He doesn't hold it against you. Receive His forgiveness and walk forward.",
    prayer: "Father, I thank You that my sins are forgiven — completely, permanently, and freely. I release every guilt and shame that has kept me stuck. I receive Your grace today. In Jesus' name, Amen.",
    declaration: "I am forgiven. My past does not define me. God has removed my transgressions as far as the east is from the west. I walk in His grace today.",
    action: "Write a letter of surrender to God, releasing one thing you've been carrying guilt about. Then tear it up or delete it as a symbol of letting go.",
    reflection: "Am I still carrying guilt that God has already forgiven? What would it look like to truly let it go?",
  },
  {
    theme: "Breaking Old Patterns",
    scripture: "\"Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!\" — 2 Corinthians 5:17",
    encouragement: "Old habits, cycles, and patterns do not define your future. In Christ, you are a brand-new creation. The old ways can be broken by the power of the Holy Spirit.",
    prayer: "Lord, I surrender my old patterns to You. Break the cycles that have kept me stuck. I choose the new thing You are doing in my life. I step into who You say I am. In Jesus' name, Amen.",
    declaration: "I am a new creation in Christ. Old patterns are broken. Old cycles are finished. I walk in the newness of life that God has prepared for me.",
    action: "Identify one old pattern or cycle in your life. Write down the new pattern God is calling you into. Take one step toward it today.",
    reflection: "What old pattern keeps pulling me back? What does the 'new creation' version of this area look like?",
  },
  {
    theme: "Walking in Authority",
    scripture: "\"Behold, I give you the authority to trample on serpents and scorpions, and over all the power of the enemy.\" — Luke 10:19",
    encouragement: "You are not a victim. Jesus gave you authority over the enemy. Every lie, every attack, every temptation must submit to the name of Jesus when you stand in faith.",
    prayer: "Lord Jesus, I thank You for the authority You have given me. I stand against every scheme of the enemy. I resist fear, doubt, and oppression. I walk in the victory You have already won. In Jesus' name, Amen.",
    declaration: "I have authority in Jesus Christ. The enemy has no power over me. I trample on every lie, every fear, and every attack in the name of Jesus.",
    action: "Speak out loud: 'In the name of Jesus, I take authority over [name the struggle].' Stand firm and do not back down.",
    reflection: "Where in my life have I been living as a victim instead of standing in the authority Christ gave me?",
  },
  {
    theme: "Living Free and Staying Free",
    scripture: "\"It is for freedom that Christ has set us free. Stand firm, then, and do not let yourselves be burdened again by a yoke of slavery.\" — Galatians 5:1",
    encouragement: "Freedom is not a one-time event — it is a daily walk. Guard what God has given you. Stay in the Word. Stay in prayer. Stay in community. Stand firm.",
    prayer: "Father, I thank You for the freedom I have in Christ. Help me guard it fiercely. Keep me rooted in Your Word, connected to Your Spirit, and surrounded by faith. In Jesus' name, Amen.",
    declaration: "I stand firm in freedom. I will not be burdened again by a yoke of slavery. Christ has set me free, and I choose to stay free every single day.",
    action: "Create a personal 'freedom guard' plan: daily Scripture, daily prayer, weekly accountability, and a worship routine that keeps your spirit strong.",
    reflection: "What practical steps can I take this week to guard the freedom God has given me?",
  },
];

export default function Daily() {
  const [day, setDay] = useState(0);
  const d = DAYS[day];

  return (
    <PageWrapper pageKey="daily">
      <div className="min-h-screen flex items-start justify-center px-4 py-16 md:py-20">
        <div className="max-w-3xl w-full">
          <PageHeader
            title="Daily Freedom Word"
            subtitle="Scripture. Prayer. Declaration. Action."
          />

          {/* Day selector */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <button
              onClick={() => setDay(Math.max(0, day - 1))}
              disabled={day === 0}
              className="p-2 rounded-full bg-red-950/50 border border-yellow-600/30 text-yellow-300 hover:bg-red-900/60 disabled:opacity-30 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="font-cinzel text-sm text-yellow-200 font-semibold">
              Day {day + 1} of {DAYS.length}
            </span>
            <button
              onClick={() => setDay(Math.min(DAYS.length - 1, day + 1))}
              disabled={day === DAYS.length - 1}
              className="p-2 rounded-full bg-red-950/50 border border-yellow-600/30 text-yellow-300 hover:bg-red-900/60 disabled:opacity-30 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <GlassCard className="space-y-6">
            <h2 className="font-cinzel text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200 text-center">
              {d.theme}
            </h2>

            <Section label="Scripture" content={d.scripture} />
            <Section label="Encouragement" content={d.encouragement} />
            <Section label="Prayer" content={d.prayer} />
            <Section label="Declaration" content={d.declaration} />
            <Section label="Action Step" content={d.action} />
            <Section label="Reflection" content={d.reflection} />
          </GlassCard>
        </div>
      </div>
    </PageWrapper>
  );
}

function Section({ label, content }) {
  return (
    <div>
      <h3 className="font-cinzel text-sm font-bold text-yellow-400 uppercase tracking-wider mb-2">
        {label}
      </h3>
      <p className="font-lora text-yellow-50/90 leading-relaxed text-sm md:text-base">
        {content}
      </p>
    </div>
  );
}