import type { ReactNode } from "react";

export default function Main({ children }: { children: ReactNode }) {
	return <main className="shrink-0 grow">{children}</main>;
}
