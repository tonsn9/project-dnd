import { Logo } from "../components/Logo";

export function Header() {
  return (
    <header className="w-full py-2 px-2  bg-white border-b border-gray-100 flex items-center justify-center gap-2">
        <span className="text-lg font-medium size-">Projeto Drang and Drop</span>
      <Logo />
    </header>
  );
}
