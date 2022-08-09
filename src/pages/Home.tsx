import { useState } from "react";
import { Cards } from "../components/Cards";
import { Screen } from "../components/Screen";
import { Header } from "../components/Header";

export function Home() {
  const [isFileSelected, setIsFileSelected] = useState(false);
  const [isExcelReaderSelected, setIsExcelReaderSelected] = useState(false);
  const [isJoinerSelected, setIsJoinerSelected] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1 ">
        <aside className="w-[348px] bg-white p-6 border-r border-gray-200">
          <div className="flex flex-col gap-8">
            <Cards
              onExcelSelect={() => setIsExcelReaderSelected(true)}
              onFileSelect={() => setIsFileSelected(true)}
              onJoinerSelect={() => setIsJoinerSelected(true)}
            />
          </div>
        </aside>
        <Screen
          isExcelReaderSelected={isExcelReaderSelected}
          isFileSelected={isFileSelected}
          isJoinerSelected={isJoinerSelected}
        />
      </main>
    </div>
  );
}
