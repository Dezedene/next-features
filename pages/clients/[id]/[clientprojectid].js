import { useRouter } from 'next/router'


const SelectedProject = () => {
  const router = useRouter();
  console.log('🤖💬 ~ SelectedProject ~ router:', router.query);
  console.log('🤖💬 ~ SelectedProject ~ router ID:', router.query.id);

  
  return (
    <div>
      <h1>Project page for a specific client</h1>
    </div>
  );
};

export default SelectedProject;
