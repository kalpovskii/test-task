export function Header () {
   return (
       <header>
          <div className="container border-b">
             <nav className="flex justify-between items-center pt-6 pb-6 content-center">
                <ul className="font-medium flex gap-4 items-center">
                   <li><a href="#"><img src="images/logo.svg" alt="logo"/></a></li>
                   <li className="hover:bg-slate-100 p-2 rounded-xl active:bg-slate-200 focus:text-blue-600"><a href="#">Coins</a></li>
                   <li className="hover:bg-slate-100 p-2 rounded-xl active:bg-slate-200"><a href="#">Exchanges</a></li>
                </ul>
                <input className="bg-slate-100 w-[240px] h-[40px] rounded-lg pl-2" type="text" placeholder="Search"/>
             </nav>
          </div>
       </header>
   );
}