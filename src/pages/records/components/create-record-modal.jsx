import React, { useState } from "react";
import Modal from "./Modal";

const CreateRecordModal = ({ isOpen, onClose, onCreate }) => {
  const [foldername, setFoldername] = useState("");

  const handleCreate = () => {
    onCreate(foldername);
    setFoldername("");
  };
  return (
    <Modal
      title="Create Record"
      isOpen={isOpen}
      onClose={onClose}
      onAction={handleCreate}
      actionLabel={"Create Folder"}
    >
      <div className="grid gap-y-4">
        <div>
          <label
            htmlFor="folder-name"
            className="mb-2 block text-sm text-white"
          >
            Record Name
          </label>
          <div className="relative">
            <input
              type="text"
              value={foldername}
              onChange={(e) => {
                setFoldername(e.target.value);
                          }}
                          required
                          
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};
