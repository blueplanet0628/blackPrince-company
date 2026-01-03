import Image from "next/image"

export default function Loading() {
  return (
    <div 
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{
        background: "linear-gradient(180deg, #e8f5e9 0%, #e0f2f1 30%, #e3f2fd 70%, #fafafa 100%)"
      }}
    >
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-15px) rotate(2deg); }
          }
          @keyframes pulse-glow {
            0%, 100% { 
              box-shadow: 0 0 30px rgba(20, 184, 166, 0.3), 0 0 60px rgba(20, 184, 166, 0.1);
              transform: scale(1);
            }
            50% { 
              box-shadow: 0 0 50px rgba(20, 184, 166, 0.5), 0 0 100px rgba(20, 184, 166, 0.2);
              transform: scale(1.05);
            }
          }
          @keyframes rotate-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes ring-expand {
            0% { transform: scale(0.8); opacity: 0.8; }
            100% { transform: scale(1.5); opacity: 0; }
          }
          .float-animation {
            animation: float 3s ease-in-out infinite;
          }
          .pulse-glow {
            animation: pulse-glow 2s ease-in-out infinite;
          }
          .rotate-slow {
            animation: rotate-slow 20s linear infinite;
          }
          .ring-expand {
            animation: ring-expand 2s ease-out infinite;
          }
          .ring-expand-delayed {
            animation: ring-expand 2s ease-out infinite 0.5s;
          }
          .ring-expand-delayed-2 {
            animation: ring-expand 2s ease-out infinite 1s;
          }
        `}
      </style>

      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-teal-300/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 2}s ease-in-out infinite ${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Rotating ring */}
      <div className="absolute w-48 h-48 border-2 border-teal-200/30 rounded-full rotate-slow" />
      <div className="absolute w-64 h-64 border border-cyan-200/20 rounded-full rotate-slow" style={{ animationDirection: 'reverse', animationDuration: '25s' }} />

      {/* Expanding rings */}
      <div className="absolute w-40 h-40 border-2 border-teal-400/30 rounded-full ring-expand" />
      <div className="absolute w-40 h-40 border-2 border-cyan-400/30 rounded-full ring-expand-delayed" />
      <div className="absolute w-40 h-40 border-2 border-emerald-400/30 rounded-full ring-expand-delayed-2" />

      {/* Logo container */}
      <div className="relative z-10 float-animation">
        <div className="relative w-40 h-40 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center pulse-glow">
          <Image
            src="/logo/logo.png"
            alt="BlackPrince株式会社 logo"
            width={120}
            height={120}
            priority
            className="object-contain"
          />
        </div>
      </div>

      {/* Loading text */}
      <div className="mt-8 text-center z-10">
        <p className="text-lg font-medium bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent tracking-widest">
          LOADING
        </p>
        <div className="flex justify-center gap-1 mt-2">
          <div className="w-2 h-2 rounded-full bg-teal-400 animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  )
}
