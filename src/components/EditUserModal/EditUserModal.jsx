import React from "react";
import { AddUserModal } from "../../components/AddUserModal";
import "./EditUserModal.css";

export const EditUserModal = () => {
  return (
    <div className="editUserModal">
      <AddUserModal text="Edit user" text1="Save" />
    </div>
  );
};
