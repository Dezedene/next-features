import { useRouter } from 'next/router'


const ClientsProjectsPage = () => {
  const router = useRouter();
  console.log('🤖💬 ~ ClientsProjectsPage ~ router:', router.query);

  return (
    <div>
      <h1>Project of a given client Page</h1>
    </div>
  );
};

export default ClientsProjectsPage;
