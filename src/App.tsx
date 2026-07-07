import Hero from './sections/Hero';
import TopologyMap from './components/TopologyMap';
import Capabilities from './sections/Capabilities';
import Benchmarks from './sections/Benchmarks';

export default function App() {
  return (
    /* Enforces mobile bounds over all children layers safely */
    <main className="bg-background min-h-screen text-foreground font-sans selection:bg-[#a855f7]/30 selection:text-white max-w-full overflow-x-hidden">
      <Hero />
      <TopologyMap />
      <Capabilities />
      <Benchmarks />
    </main>
  );
}