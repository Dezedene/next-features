import { useRouter } from 'next/router'


const ClientsProjectsPage = () => {
  const router = useRouter();
  console.log('🤖💬 ~ ClientsProjectsPage ~ router:', router.query);

  function loadProjectHandler () {
    // load data ...
    console.log('hellothere')
    router.push({
      pathname: '/clients/[id]/[clientpprojectid]',
      query: { id: 'max', clientprojectid: 'projecta' }
    })
  }

  return (
    <div>
      <h1>Project of a given client Page</h1>
      <button onClick={ loadProjectHandler }>Load a project</button>
    </div>
  );
};

export default ClientsProjectsPage;
