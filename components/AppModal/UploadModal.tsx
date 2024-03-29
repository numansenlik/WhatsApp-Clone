"use client";

import React, { use } from "react";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export type UploadModalProps = {
  handleClose: () => void;
};

const UploadModal: React.FC<UploadModalProps> = ({ handleClose }) => {
  const [file, setFile] = React.useState<File | null>(null);

  return (
    <div className="mt4 flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <Button variant="outlined" component="label">
          <input
            type="file"
            hidden
            accept="/image/*"
            multiple
            onChange={(e) => {
              if (e?.target?.files === null) return;
              setFile(e?.target?.files[0]);
            }}
          />
          Upload
        </Button>
        {file !== null ? (
          <>
            <span>{file?.name}</span>
            <CloseIcon
              className="cursor-pointer text-red-700"
              onClick={() => setFile(null)}
            />
          </>
        ) : null}
        <Button variant="contained" component="label" disabled={file === null}>
          Submit{" "}
        </Button>
      </div>
    </div>
  );
};

export default UploadModal;
