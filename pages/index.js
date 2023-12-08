import Link from "next/link";

function Home() {
  // <li>
  //   <a href="/portfolio">Portfolio</a>
  // </li>;
  // with this kind of link we send a new http request to load this new page
  // this mean that any application state that we might have when we load this page would be lost as
  // we send a brand new request, and the is not the idea when building a react/ next app

  // <li>
  //   <Link href="/portfolio">Portfolio</Link>
  // </li>;
  // by using Link from nextjs, we dont send a new http request, so we dont lose any app state during the process,
  // we are still on the same page
  return (
    <>
      <div>
        <h1>Home Page</h1>
        <ul>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="/clients">Clients</Link>
          </li>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Home;
