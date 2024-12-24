"use client";
import { getCurrent } from "@/features/auth/actions";
import { redirect } from "next/navigation";

const WorkspaceIdPage = () => {
  const user = getCurrent();

  if (!user) redirect("/sign-in");
  return <div>WorkspaceId Page</div>;
};

export default WorkspaceIdPage;
