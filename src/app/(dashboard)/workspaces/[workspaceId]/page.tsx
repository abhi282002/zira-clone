"use client";
import React from "react";
import { getCurrent } from "@/features/auth/queries";
import { redirect } from "next/navigation";

const WorkspaceIdPage = () => {
  const user = getCurrent();

  if (!user) redirect("/sign-in");
  return <div>WorkspaceId Page</div>;
};

export default WorkspaceIdPage;
