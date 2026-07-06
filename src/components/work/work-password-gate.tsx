"use client";

import { useRouter } from "next/navigation";
import { WorkPasswordPrompt } from "@/components/work/work-password-prompt";

type WorkPasswordGateProps = {
  projectName: string;
};

export function WorkPasswordGate({ projectName }: WorkPasswordGateProps) {
  const router = useRouter();

  return (
    <main
      id="main"
      className="flex min-h-screen items-center justify-center bg-page px-6 py-16 text-neutral-30"
    >
      <WorkPasswordPrompt
        title={`View ${projectName}`}
        description="Enter the password to open this case study."
        onSuccess={() => router.refresh()}
      />
    </main>
  );
}
