import { LOGO } from "./PageWrapper";

export default function PageHeader({ title, subtitle }) {
  return (
    <div className="text-center mb-8 md:mb-10">
      <img
        src={LOGO}
        alt="Kingdom Mandate Ministry"
        className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover mx-auto mb-4 shadow-[0_0_20px_rgba(200,160,40,0.5)]"
      />
      <h1 className="font-cinzel text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200 drop-shadow-lg mb-3">
        {title}
      </h1>
      {subtitle && (
        <p className="font-lora text-lg md:text-xl text-white italic max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
