import Hero from './sections/Hero';
import Capabilities from './sections/Capabilities';
import Benchmarks from './sections/Benchmarks';

export default function App() {
  return (
    <main className="bg-background min-h-screen text-foreground font-sans selection:bg-[#a855f7]/30 selection:text-white">
      <Hero />
      <Capabilities />
      <Benchmarks />
    </main>
  );
}