
const games = [
  {
    title: "Snake",
    description: "Grow your snake, collect food, and avoid hitting yourself.",
    icon: "🐍",
    category: "CLASSIC",
    color: "bg-[#d8f3dc]",
    difficulty: "Easy",
  },
  {
    title: "Brick Breaker",
    description: "Break every brick using your paddle and bouncing ball.",
    icon: "🧱",
    category: "ARCADE",
    color: "bg-[#ffe5b4]",
    difficulty: "Medium",
  },
  {
    title: "Space Shooter",
    description: "Defend the galaxy against waves of enemy ships.",
    icon: "🚀",
    category: "ACTION",
    color: "bg-[#dbeafe]",
    difficulty: "Medium",
  },
  {
    title: "Pong",
    description: "Challenge the computer in this classic arcade game.",
    icon: "🏓",
    category: "CLASSIC",
    color: "bg-[#f5d0fe]",
    difficulty: "Easy",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf7ed] text-[#252525]">
      {/* Navigation */}
      <header className="border-b-4 border-[#252525] bg-[#fffdf5]">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl border-2 border-[#252525] bg-[#ffcc4d] text-2xl shadow-[3px_3px_0_#252525]">
              🕹️
            </span>
            <span className="text-xl font-black tracking-tight">
              RETRO<span className="text-[#e85d4a]">ARCADE</span>
            </span>
          </a>

          <div className="hidden items-center gap-8 font-bold md:flex">
            <a href="#" className="text-[#e85d4a]">Home</a>
            <a href="#games" className="hover:text-[#e85d4a]">Games</a>
            <a href="#scores" className="hover:text-[#e85d4a]">High Scores</a>
          </div>

          <a
            href="#games"
            className="rounded-lg border-2 border-[#252525] bg-[#ffcc4d] px-5 py-2 font-black shadow-[3px_3px_0_#252525] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
          >
            PLAY NOW →
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <div>
          <div className="mb-6 inline-block -rotate-2 rounded-md border-2 border-[#252525] bg-[#b7e4c7] px-4 py-2 text-sm font-black shadow-[3px_3px_0_#252525]">
            ✦ THE ARCADE IS OPEN!
          </div>

          <h1 className="max-w-xl text-5xl font-black leading-[1.05] tracking-tight md:text-7xl">
            YOUR NEXT
            <span className="block text-[#e85d4a]">HIGH SCORE</span>
            STARTS HERE.
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-[#66615a]">
            Step into a world of classic arcade fun. Play nostalgic games,
            beat your personal records, and make every game count.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#games"
              className="rounded-lg border-2 border-[#252525] bg-[#e85d4a] px-7 py-4 font-black text-white shadow-[5px_5px_0_#252525] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
            >
              EXPLORE GAMES →
            </a>
            <a
              href="#about"
              className="rounded-lg border-2 border-[#252525] bg-white px-7 py-4 font-black shadow-[5px_5px_0_#252525] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
            >
              ABOUT ARCADE
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-8 text-sm font-bold text-[#66615a]">
            <span>🎮 SINGLE PLAYER</span>
            <span>⭐ PERSONAL RECORDS</span>
            <span>🕹️ CLASSIC FUN</span>
          </div>
        </div>

        {/* Decorative arcade illustration */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -right-3 -top-5 h-full w-full rotate-3 rounded-3xl border-4 border-[#252525] bg-[#ffcc4d]" />
          <div className="relative rounded-3xl border-4 border-[#252525] bg-[#252525] p-5 shadow-[8px_8px_0_#252525]">
            <div className="mb-4 flex items-center justify-between text-xs font-black tracking-widest text-white">
              <span>RETRO ARCADE MACHINE</span>
              <span className="text-[#ffcc4d]">● ONLINE</span>
            </div>

            <div className="flex aspect-square flex-col items-center justify-center rounded-xl border-4 border-[#252525] bg-[#b7e4c7] p-5 text-center">
              <div className="text-8xl md:text-9xl">👾</div>
              <p className="mt-5 text-2xl font-black tracking-widest">
                INSERT FUN
              </p>
              <p className="mt-2 text-sm font-bold text-[#526b58]">
                PRESS START TO PLAY
              </p>
            </div>

            <div className="flex items-center justify-between px-3 pt-5">
              <div className="flex gap-3">
                <span className="h-5 w-5 rounded-full bg-[#e85d4a]" />
                <span className="h-5 w-5 rounded-full bg-[#ffcc4d]" />
                <span className="h-5 w-5 rounded-full bg-[#b7e4c7]" />
              </div>
              <span className="text-xs font-black tracking-widest text-white">
                PLAYER 01
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Games */}
      <section id="games" className="border-y-4 border-[#252525] bg-[#fffdf5]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-2 font-black tracking-widest text-[#e85d4a]">
                ✦ PICK YOUR GAME
              </p>
              <h2 className="text-4xl font-black md:text-5xl">
                FEATURED GAMES
              </h2>
              <p className="mt-3 text-[#66615a]">
                Choose your favorite and get ready to play.
              </p>
            </div>
            <span className="rounded-md border-2 border-[#252525] bg-[#ffcc4d] px-4 py-2 text-sm font-black shadow-[3px_3px_0_#252525]">
              04 GAMES
            </span>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {games.map((game) => (
              <article
                key={game.title}
                className="group overflow-hidden rounded-xl border-2 border-[#252525] bg-white shadow-[5px_5px_0_#252525] transition hover:-translate-y-1 hover:shadow-[7px_7px_0_#252525]"
              >
                <div className={`flex h-44 items-center justify-center ${game.color}`}>
                  <span className="text-7xl transition group-hover:scale-110">
                    {game.icon}
                  </span>
                </div>

                <div className="p-5">
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <span className="rounded bg-[#252525] px-2 py-1 text-[10px] font-black tracking-wider text-white">
                      {game.category}
                    </span>
                    <span className="text-xs font-bold text-[#777]">
                      {game.difficulty}
                    </span>
                  </div>

                  <h3 className="text-xl font-black">{game.title}</h3>
                  <p className="mt-2 min-h-16 text-sm leading-6 text-[#66615a]">
                    {game.description}
                  </p>

                  <div className="mt-5 rounded-lg border-2 border-dashed border-[#b8b1a5] bg-[#faf7ed] px-3 py-2 text-center text-xs font-black text-[#777]">
                    GAME COMING SOON
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* High score preview */}
      <section id="scores" className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-2xl border-4 border-[#252525] bg-[#b7e4c7] p-8 shadow-[7px_7px_0_#252525] md:p-12">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="font-black tracking-widest">🏆 YOUR ARCADE JOURNEY</p>
              <h2 className="mt-3 text-3xl font-black md:text-4xl">
                EVERY PLAYER HAS A HIGH SCORE.
              </h2>
              <p className="mt-3 max-w-xl text-[#526b58]">
                Keep playing, improve your skills, and save your personal best
                scores right in your browser.
              </p>
            </div>
            <div className="rounded-xl border-2 border-[#252525] bg-[#fffdf5] px-8 py-5 text-center">
              <p className="text-xs font-black tracking-widest text-[#777]">
                PLAYER STATUS
              </p>
              <p className="mt-2 text-2xl font-black">PLAYER 01</p>
              <p className="mt-1 text-sm font-bold text-[#e85d4a]">
                READY TO PLAY
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="about" className="border-t-4 border-[#252525] bg-[#252525] px-6 py-8 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <div>
            <p className="font-black tracking-wide">
              🕹️ RETRO<span className="text-[#ffcc4d]">ARCADE</span>
            </p>
            <p className="mt-1 text-xs text-[#c7c2b8]">
              Classic games. New memories.
            </p>
          </div>
          <p className="text-xs text-[#c7c2b8]">
            © 2026 Retro Arcade. Made for fun.
          </p>
        </div>
      </footer>
    </main>
  );
}
