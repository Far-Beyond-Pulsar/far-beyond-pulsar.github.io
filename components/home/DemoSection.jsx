import Image from "next/image";

export default function DemoSection() {
  return (
    <section className="max-w-4xl mx-auto py-20 px-4 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">See Pulsar in Action</h2>
      <div className="w-full bg-black border border-white/10 rounded-xl shadow-2xl p-6 flex flex-col md:flex-row gap-8 items-center">
        <Image src="/engine_bps.png" alt="Engine Screenshot" width={400} height={240} className="rounded-lg shadow-lg" />
        <div className="flex-1">
          <pre className="bg-black border border-white/10 rounded-lg p-4 text-left text-sm overflow-x-auto text-[#0ea5e9] font-mono">
{`fn main() {
    pulsar::run();
}`}
          </pre>
          <p className="mt-4 text-slate-300">Minimal code, maximum power. Build your next world with Pulsar.</p>
        </div>
      </div>
    </section>
  );
}
