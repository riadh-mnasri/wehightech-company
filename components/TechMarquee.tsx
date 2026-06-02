"use client";

const techs = [
  "Next.js", "React", "TypeScript", "Node.js", "Python", "FastAPI",
  "LangChain", "OpenAI", "AWS", "Docker", "Kubernetes", "PostgreSQL",
  "Redis", "Terraform", "Flutter", "React Native",
];

export default function TechMarquee() {
  const items = [...techs, ...techs];
  return (
    <div className="border-y border-white/5 bg-[#050508] py-4 overflow-hidden select-none">
      <div className="flex marquee-track">
        {items.map((t, i) => (
          <div key={i} className="flex items-center gap-8 px-8 flex-shrink-0">
            <span className="text-[11px] font-bold text-[#6A6A85]/50 tracking-[0.18em] uppercase whitespace-nowrap">
              {t}
            </span>
            <span className="w-1 h-1 rounded-full bg-[#BEFF47]/25 flex-shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}
