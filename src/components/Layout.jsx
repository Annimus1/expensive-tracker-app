import { Link, useLocation, } from "react-router";

export default function Layout({ children }) {
  let { pathname } = useLocation();
  let active = "text-blue-500";
  let user = localStorage.getItem("user");
  user = JSON.parse(user);

  return (
    <div className="h-[100vh] w-[100vw]">
      <div className="md:ml-[5rem]">

        {children}
      </div>

      <nav className=" w-full fixed bottom-0 flex justify-center items-center gap-10 border-t border-blue-400 p-4 bg-stone-100
            md:left-0 md:top-0 md:w-20 md:py-10 md:flex md:flex-col md:gap-y-[8rem] md:h-full md:justify-center md:items-center md:shadow-md md:shadow-blue-400">
        <Link
          to={`/${user.uid}/transactions`}
          className={`flex flex-col justify-center items-center gap-2 hover:text-blue-500 ${pathname == "/" + user.uid + "/transactions" ? active : ""}`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
          </svg>

          <p>Txns</p>
        </Link>

        <Link
          to={`/${user.uid}/stats`}
          className={`flex flex-col justify-center items-center gap-2 hover:text-blue-500 ${pathname == "/" + user.uid + "/stats" ? active : ""}`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
          </svg>
          Stats
        </Link>

        <Link
          to={`/${user.uid}/account`}
          className={`flex flex-col justify-center items-center gap-2 hover:text-blue-500 ${pathname == "/" + user.uid + "/account" ? active : ""}`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
          </svg>

          Accounts
        </Link>

        <Link
          to={`/${user.uid}/user`}
          className={`flex flex-col justify-center items-center gap-2 hover:text-blue-500 ${pathname == "/" + user.uid + "/user" ? active : ""}`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>

          User
        </Link>
      </nav>
    </div>
  );
}


