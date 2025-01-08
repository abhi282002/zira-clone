import { getCurrent } from "@/features/auth/queries";
import { CreateWorkspacesForm } from "@/features/workspaces/components/create-workspaces-form";
import { redirect } from "next/navigation";

const WorkspaceCreatePage = () => {
  const user = getCurrent();
  if (!user) redirect("/sign-in");
  return (
    <div className="w-full lg:max-w-screen-xl">
      <CreateWorkspacesForm />
    </div>
  );
};

export default WorkspaceCreatePage;
