import {
  FolderStar,
  MicrosoftExcelLogo,
  ArrowSquareDown,
} from "phosphor-react";

import { Screen } from "./Screen";

import { useState } from "react";

interface CardProps {
  onFileSelect: () => void;
  onExcelSelect: () => void;
  onJoinerSelect: () => void;
}

export function Cards({
  onExcelSelect,
  onFileSelect,
  onJoinerSelect,
}: CardProps) {
  return (
    <>
      <button
        className="rounded border dorder-gray-500 p-4 mt-2 hover:border-blue-500 transition-colors"
        onClick={() => onFileSelect()}
      >
        <span className="flex items-center justify-center gap-2 hover:text-blue-500 transition-colors">
          <FolderStar size={20} /> File Reader
        </span>
      </button>

      <button
        className="rounded border dorder-gray-500 p-4 mt-2  hover:border-blue-500 transition-colors"
        onClick={() => onExcelSelect()}
      >
        <span className="flex items-center justify-center gap-2  hover:text-blue-500 transition-colors">
          <MicrosoftExcelLogo size={20} />
          Excel Reader
        </span>
      </button>

      <button
        className="rounded border dorder-gray-500 p-4 mt-2  hover:border-blue-500 transition-colors"
        onClick={() => onJoinerSelect()}
      >
        <span className="flex items-center justify-center gap-2  hover:text-blue-500 transition-colors">
          <ArrowSquareDown size={20} />
          Joiner
        </span>
      </button>
    </>
  );
}
