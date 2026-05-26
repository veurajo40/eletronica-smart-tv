interface LogoProps {
  dark?: boolean
  className?: string
}

export function Logo({ dark = false, className }: LogoProps) {
  const iconFill = dark ? "white" : "#CC0000"
  const wifiFill = dark ? "#CC0000" : "white"
  const textMain = dark ? "white" : "#1A1A1A"
  const textAccent = dark ? "white" : "#CC0000"

  return (
    <div className={`flex items-center gap-3 ${className ?? ""}`}>
      <svg width="40" height="44" viewBox="0 0 44 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Corpo da TV */}
        <rect width="44" height="31" rx="5" fill={iconFill} />
        {/* Ponto central do WiFi */}
        <circle cx="22" cy="20" r="2.5" fill={wifiFill} />
        {/* Arco WiFi pequeno */}
        <path d="M17 20 A5 5 0 0 1 27 20" stroke={wifiFill} strokeWidth="2.2" strokeLinecap="round" fill="none" />
        {/* Arco WiFi médio */}
        <path d="M12 20 A10 10 0 0 1 32 20" stroke={wifiFill} strokeWidth="2.2" strokeLinecap="round" fill="none" />
        {/* Arco WiFi grande */}
        <path d="M7 20 A15 15 0 0 1 37 20" stroke={wifiFill} strokeWidth="2.2" strokeLinecap="round" fill="none" />
        {/* Haste do suporte */}
        <rect x="18" y="31" width="8" height="8" fill={iconFill} />
        {/* Base do suporte */}
        <rect x="11" y="39" width="22" height="5" rx="2.5" fill={iconFill} />
      </svg>

      <div className="leading-none">
        <p className={`font-black ${dark ? "text-white" : "text-gray-800"}`}
          style={{ fontSize: "10px", letterSpacing: "0.22em" }}>
          ELETRÔNICA
        </p>
        <p className={`font-black mt-1 ${dark ? "text-white" : "text-[#CC0000]"}`}
          style={{ fontSize: "15px", letterSpacing: "0.12em" }}>
          SMART TV
        </p>
      </div>
    </div>
  )
}
