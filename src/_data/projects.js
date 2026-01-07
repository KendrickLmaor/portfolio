module.exports = [
  {
    name: "GameBoy Color Emulator",
    tech: ["C++", "SDL3"],
    description: "This is a Game Boy Color emulator written in modern C++, built with a clean separation of CPU, memory, and graphics systems. It currently implements the LR35902 CPU core, memory‑mapped I/O, and background tile rendering using real GBC tile data. The video demo shows the emulator correctly decoding and displaying background tiles as colored squares, which confirms that VRAM access, tile indexing, and palette handling are working. The next steps involve implementing the full PPU scanline pipeline, sprite rendering, and full background composition.",
    video: "assets/video/gb.mp4"
  },
  {
    name: "Minecraft server bot",
    tech: ["Python", "Google Cloud Platform"],
    description: "This project is a Discord bot built in Python that uses simple HTTP handling and the Google Cloud SDK to spin up a dedicated Minecraft server VM on demand. When users in the Discord server request it, the bot authenticates with GCP, launches the VM instance, and returns the server’s IP so everyone can join and play together. It’s designed to keep costs low by only running the VM when needed, and it automates the entire lifecycle—from startup to shutdown—so players can jump into a shared world without any manual server management.",
    video: "assets/video/mc.mp4"
  },
  {
    name: "Pong",
    tech: ["C++", "Raylib"],
    description: "This is a classic Pong remake built in C++ using the Raylib library, focusing on clean architecture and smooth, responsive gameplay. It implements simple physics for paddle movement and ball collisions, a lightweight game loop, and a minimal UI that keeps the experience true to the original arcade feel. The project was a great way to explore Raylib’s rendering and input systems while building a small, self‑contained game that demonstrates core game‑dev fundamentals like timing, collision detection, and state management.",
    video: "assets/video/pong.mp4"
  }
];

