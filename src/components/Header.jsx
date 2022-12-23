export function Header () {
   return (
       <header>
          <div className="container border-b">
             <nav className="flex justify-between items-center pt-6 pb-6 content-center">
                <ul className="font-medium flex gap-4 items-center">
                   <li><a href="#"><img src="images/logo.svg" alt="logo"/></a></li>
                   <li><a href="#">Coins</a></li>
                   <li><a href="#">Exchanges</a></li>
                </ul>
                <input className="border-2 rounded-lg pl-2" type="text" placeholder="Search"/>
             </nav>
          </div>
       </header>
   );
}