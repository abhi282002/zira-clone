import { getCurrent } from '@/features/auth/actions';
import { CreateWorkspacesForm } from '@/features/workspaces/components/create-workspaces-form';
import { redirect } from 'next/navigation';

export default async function Home() {
  const user = await getCurrent();
  if (!user) redirect('/sign-in');

  return (
    <div className="bg-neutral-500">
      <CreateWorkspacesForm />
    </div>
  );
}
