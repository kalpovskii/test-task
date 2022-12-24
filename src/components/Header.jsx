export function Header() {
   return (
       <header className="relative">
          <div className="border-b">
             <nav
                 className="flex justify-between items-center pt-6 pb-6 content-center">
                <ul className="font-medium flex gap-4 items-center">
                   <li>
                      <a href="#">
                         <img className="block lg:hidden" src="images/logo.svg"
                              alt="logo"/>
                         <img className="hidden lg:block w-[35px] h-[32px]"
                              src="images/logow.svg" alt="logo"/>
                      </a>
                   </li>
                   <li className="hover:bg-slate-100 p-2 rounded-xl active:bg-slate-200 md:hidden">
                      <a href="#">Coins</a></li>
                   <li className="hover:bg-slate-100 p-2 rounded-xl active:bg-slate-200 md:hidden">
                      <a href="#">Exchanges</a></li>
                </ul>
                <input
                    className="focus:outline-none focus:ring focus:bg-white bg-slate-100 w-[240px] h-[40px] rounded-lg pl-4 md:w-full md:ml-4"
                    type="text" placeholder="Search"/>

                {/*burger menu*/}
                <button className="hidden md:block pr-2 ml-4 xs:p-0 m-0">
                   <img src="images/menu.svg" alt="x"/>
                </button>
             </nav>
          </div>
       </header>
   );
}