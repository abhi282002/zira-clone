"use client";
import React from 'react';
import { ResponsiveModel } from "@/components/ui/responsive-model";

import { CreateWorkspacesForm } from "./create-workspaces-form";
import { useCreateWorkspaceModel } from "../hooks/use-create-workspace-model";

export const CreateWorkspacesModel = () => {
  const { isOpen, setIsOpen, close } = useCreateWorkspaceModel();

  return (
    <ResponsiveModel open={isOpen} onOpenChange={setIsOpen}>
      <CreateWorkspacesForm onCancel={close} />
    </ResponsiveModel>
  );
};
