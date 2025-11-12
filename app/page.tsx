import { Mail, Linkedin, Github } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      
      <img
        src="/perfil.png" 
        alt="Mario Sánchez"
        className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-gray-300 dark:border-gray-700 mb-6 shadow-lg"
      />

      <h1 className="text-4xl font-semibold tracking-tight">
        Mario Sánchez
      </h1>

      <p className="mt-3 text-lg text-neutral-600">
        Data & Cloud Engineering
      </p>

      <p className="mt-6 max-w-xl text-neutral-500">
        I build reliable data pipelines, serverless architectures, and interactive dashboards using AWS and modern web technologies.
      </p>

     <div className="mt-10 flex gap-4">
        <a
          href="https://www.linkedin.com/in/malejandrosan/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-md border border-neutral-300 hover:bg-neutral-50 transition"
        >
          <Linkedin className="w-5 h-5" />
        </a>

        <a
          href="mailto:malejandrosan@hotmail.com"
          className="p-3 rounded-md border border-neutral-300 hover:bg-neutral-50 transition"
        >
          <Mail className="w-5 h-5" />
        </a>

        <a
          href="https://github.com/malejandrosan"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-md border border-neutral-300 hover:bg-neutral-50 transition"
        >
          <Github className="w-5 h-5" />
        </a>
      </div>

      {/*
      <a
        href="/projects"
        className="mt-10 inline-block px-5 py-2 rounded-md border border-neutral-300 hover:bg-neutral-50 transition"
      >
        View Projects
      </a>
      */}
    </main>
  );
}
