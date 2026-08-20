import { useState } from "react";
import PageWrapper from "../components/PageWrapper";
import PageHeader from "../components/PageHeader";
import GlassCard from "../components/GlassCard";
import { ChevronDown, ChevronUp } from "lucide-react";

const CHAINS = [
  {
    title: "Freedom from Fear",
    scripture: "\"For God has not given us a spirit of fear, but of power and of love and of a sound mind.\" — 2 Timothy 1:7",
    encouragement: "Fear is not from God. It is a weapon the enemy uses to paralyze you, silence you, and keep you from stepping into all God has prepared for you. But the Spirit within you is greater.",
    prayer: "Father, I come against every spirit of fear in my life. I declare that fear has no authority over me. I receive Your spirit of power, love, and a sound mind. Fill me with courage and peace. In Jesus' name, Amen.",
    declaration: "I am not controlled by fear. I walk in the power and authority of Jesus Christ. Fear must flee at the name of Jesus.",
    action: "Name your biggest fear. Speak this truth over it: 'God has not given me a spirit of fear.' Repeat it until your heart believes what your mouth is saying.",
  },
  {
    title: "Freedom from Shame",
    scripture: "\"Therefore, there is now no condemnation for those who are in Christ Jesus.\" — Romans 8:1",
    encouragement: "Shame tells you that you are your worst moment. But God says you are His beloved child. Shame has no place in the life of someone covered by the blood of Jesus.",
    prayer: "Lord, I release every shame I have carried. I am not defined by my past mistakes. I am defined by Your grace. Wash me clean and help me see myself the way You see me. In Jesus' name, Amen.",
    declaration: "I am free from shame. I am covered by the blood of Jesus. There is no condemnation for me because I am in Christ.",
    action: "Write down one thing you feel ashamed of. Then write Romans 8:1 over it. Let God's Word speak the final word.",
  },
  {
    title: "Freedom from Condemnation",
    scripture: "\"Who is he that condemns? Christ Jesus who died — more than that, who was raised to life — is at the right hand of God and is also interceding for us.\" — Romans 8:34",
    encouragement: "The accuser wants you to feel condemned, but Jesus is interceding for you right now. He is not pointing a finger at you — He is extending His hand to you.",
    prayer: "Jesus, I thank You that You do not condemn me. You intercede for me. I reject every accusing voice and receive Your mercy and grace. In Jesus' name, Amen.",
    declaration: "No weapon of condemnation formed against me shall prosper. Jesus is my advocate, and His blood speaks a better word.",
    action: "Every time a condemning thought enters your mind today, respond with: 'Jesus does not condemn me. He intercedes for me.'",
  },
  {
    title: "Freedom from Anxiety",
    scripture: "\"Cast all your anxiety on him because he cares for you.\" — 1 Peter 5:7",
    encouragement: "Anxiety tries to convince you that you are alone with your problems. But God invites you to cast every worry on Him. He cares deeply for you and your situation.",
    prayer: "Father, I cast every anxiety on You right now. I release my worries, my fears about tomorrow, and my need to control. I trust You completely. Give me Your peace that surpasses understanding. In Jesus' name, Amen.",
    declaration: "I cast all my anxiety on God because He cares for me. His peace guards my heart and mind. I will not be moved by worry.",
    action: "Write down everything causing you anxiety. Pray over the list, then physically set it down (or put it away) as a symbol of casting it on God.",
  },
  {
    title: "Freedom from Bitterness",
    scripture: "\"Get rid of all bitterness, rage and anger, brawling and slander, along with every form of malice. Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you.\" — Ephesians 4:31–32",
    encouragement: "Bitterness is a chain that keeps you anchored to the person who hurt you. Forgiveness is not about them — it is about your freedom. Let it go, and let God handle justice.",
    prayer: "Lord, I choose to forgive. I release every person who has hurt me. I let go of bitterness and receive Your peace. Heal the wounds and help me walk in freedom. In Jesus' name, Amen.",
    declaration: "I am free from bitterness. I choose forgiveness because Christ forgave me. My heart is free and my spirit is at peace.",
    action: "Name someone you need to forgive. Pray for them and release them to God. You are not excusing their behavior — you are freeing your own heart.",
  },
  {
    title: "Freedom from Bondage",
    scripture: "\"The Spirit of the Lord is on me, because he has anointed me to proclaim good news to the poor. He has sent me to proclaim freedom for the prisoners and recovery of sight for the blind, to set the oppressed free.\" — Luke 4:18",
    encouragement: "Whatever has held you captive — habits, addictions, toxic cycles, spiritual oppression — Jesus came specifically to set you free. This is His mission. This is His heart for you.",
    prayer: "Jesus, You came to set the captives free. I am one of those captives. Break every chain of bondage in my life. I receive the freedom You died to give me. In Jesus' name, Amen.",
    declaration: "I am no longer a prisoner. Jesus has proclaimed my freedom. Every chain of bondage is broken by His power and His blood.",
    action: "Identify the strongest bondage in your life. Declare Luke 4:18 over it. Seek prayer support from a trusted believer.",
  },
  {
    title: "Freedom from Lies",
    scripture: "\"Then you will know the truth, and the truth will set you free.\" — John 8:32",
    encouragement: "The enemy's greatest weapon is deception. He whispers lies about your identity, your worth, and your future. But God's truth is an unbreakable sword. When you know the truth, lies lose their power.",
    prayer: "Father, expose every lie I have believed. Open my eyes to see Your truth clearly. Let Your Word be the lens through which I see myself and my world. In Jesus' name, Amen.",
    declaration: "I reject every lie of the enemy. I know the truth of God's Word, and that truth sets me free. I will not believe what contradicts Scripture.",
    action: "Write down a lie you've been believing. Next to it, write the truth from Scripture. Carry it with you and read it throughout the day.",
  },
  {
    title: "Freedom from Heaviness",
    scripture: "\"To bestow on them a crown of beauty instead of ashes, the oil of joy instead of mourning, and a garment of praise instead of a spirit of despair.\" — Isaiah 61:3",
    encouragement: "Heaviness, depression, and despair are not God's plan for you. He wants to replace your ashes with beauty, your mourning with joy, and your despair with praise. Let Him minister to your heart.",
    prayer: "Lord, I cast off every spirit of heaviness. I receive Your joy, Your beauty, and Your praise. Lift the weight from my shoulders and fill me with Your presence. In Jesus' name, Amen.",
    declaration: "I wear a garment of praise, not a spirit of heaviness. God gives me beauty for ashes and joy for mourning. My heart is lifted in His presence.",
    action: "Put on worship music. Spend 10 minutes in praise — even if you don't feel like it. Praise shifts the atmosphere.",
  },
  {
    title: "Freedom from Rejection",
    scripture: "\"He predestined us for adoption to sonship through Jesus Christ, in accordance with his pleasure and will.\" — Ephesians 1:5",
    encouragement: "Rejection from people does not define your value. God chose you, adopted you, and delights in you. You are wanted. You are chosen. You belong.",
    prayer: "Father, I reject the lie of rejection. I am chosen by You. I am adopted into Your family. I am wanted, loved, and accepted. Heal every wound of rejection in my heart. In Jesus' name, Amen.",
    declaration: "I am not rejected. I am chosen and adopted by God. I belong to His family, and no human opinion can override His acceptance of me.",
    action: "Read Ephesians 1:3–8 slowly. Circle every word that describes who you are in Christ. Let it sink into your identity.",
  },
  {
    title: "Freedom from Spiritual Oppression",
    scripture: "\"Submit yourselves, then, to God. Resist the devil, and he will flee from you.\" — James 4:7",
    encouragement: "Spiritual oppression is real, but so is your authority in Christ. When you submit to God and resist the enemy, he must flee. You are not powerless — you carry the name above every name.",
    prayer: "Father, I submit every area of my life to You. I resist every spirit of oppression, darkness, and heaviness. In the name of Jesus, I command the enemy to flee. Fill every space with Your presence and peace. In Jesus' name, Amen.",
    declaration: "I submit to God and resist the devil. He must flee from me. No spiritual oppression can remain in the presence of the Holy Spirit within me.",
    action: "Pray through your home, your workplace, or your personal space. Declare the lordship of Jesus over every room and every area. Invite the Holy Spirit to fill the atmosphere.",
  },
];

export default function Chains() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <PageWrapper pageKey="chains">
      <div className="min-h-screen px-4 py-16 md:py-20">
        <div className="max-w-3xl mx-auto">
          <PageHeader
            title="Break Every Chain"
            subtitle="Jesus is greater than every stronghold."
          />

          <div className="space-y-3">
            {CHAINS.map((chain, i) => {
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
                        {chain.title}
                      </h3>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="relative z-20 px-6 pb-6 space-y-4 border-t border-yellow-600/20 pt-4">
                        <Detail label="Scripture" text={chain.scripture} italic />
                        <Detail label="Encouragement" text={chain.encouragement} />
                        <Detail label="Prayer" text={chain.prayer} />
                        <Detail label="Declaration" text={chain.declaration} />
                        <Detail label="Action Step" text={chain.action} />
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

function Detail({ label, text, italic }) {
  return (
    <div>
      <h4 className="font-cinzel text-xs font-bold text-yellow-400 uppercase tracking-wider mb-1">{label}</h4>
      <p className={`font-lora text-base text-white leading-relaxed ${italic ? "italic" : ""}`}>{text}</p>
    </div>
  );
}
