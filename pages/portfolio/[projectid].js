import { useRouter } from 'next/router'

const PortfolioProjectPage = () => {
  const router = useRouter();

  router.pathname
  console.log('🤖💬 router.pathname:', router.pathname);
  console.log('🤖💬 router.query:', router.query);

  return (
    <div>
      <h1>
        Portfolio Project Page
      </h1>
    </div>
  )
}

export default PortfolioProjectPage

// when in [...], a file name will be called no matter what is used after
// http://localhost:3000/portfolio/[something], its prioritized