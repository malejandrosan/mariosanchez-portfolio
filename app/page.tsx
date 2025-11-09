export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl font-semibold tracking-tight">
        Mario Sánchez
      </h1>

      <p className="mt-3 text-lg text-neutral-600">
        Data & Cloud Engineering
      </p>

      <p className="mt-6 max-w-xl text-neutral-500">
        I build reliable data pipelines, serverless architectures, and interactive dashboards using AWS and modern web technologies.
      </p>

      <a
        href="/projects"
        className="mt-10 inline-block px-5 py-2 rounded-md border border-neutral-300 hover:bg-neutral-50 transition"
      >
        View Projects
      </a>
    </main>
  );
}
