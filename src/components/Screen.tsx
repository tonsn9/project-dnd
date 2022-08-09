import { FolderStar, MicrosoftExcelLogo } from "phosphor-react";
import Draggable from "react-draggable";

interface ScreenProps {
  isFileSelected: boolean;
  isExcelReaderSelected: boolean;
  isJoinerSelected: boolean;
}

export function Screen({
  isFileSelected,
  isExcelReaderSelected,
  isJoinerSelected,
}: ScreenProps) {
  return (
    <>
      {isFileSelected && (
        <Draggable>
          <div className="text-center  pt-50 m-10  flex items-center justify-center">
            <span className="flex items-center justify-center gap-2 hover:text-blue-500 transition-colors">
              <FolderStar size={20} />
              File Selected
            </span>
          </div>
        </Draggable>
      )}
      {isExcelReaderSelected && (
        <Draggable>
          <div className="text-center pt-20 m-10  flex items-center justify-center">
            <span className="flex items-center justify-center gap-2 hover:text-blue-500 transition-colors">
              <MicrosoftExcelLogo size={20} />
              Excel Reader
            </span>
          </div>
        </Draggable>
      )}
      {isJoinerSelected && (
        <Draggable>
          <div className="text-center  p-50 m-10  flex items-center justify-center">
            <span className="flex items-center justify-center gap-2 hover:text-blue-500 transition-colors">
              <FolderStar size={20} />
              Joiner
            </span>
          </div>
        </Draggable>
      )}
    </>
  );
}
