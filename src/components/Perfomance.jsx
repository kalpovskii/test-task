
export function Perfomance () {
   return (
       <div className="bg-slate-50 rounded-lg mt-6 w-[320px] h-[205px]">
          <div className="pt-5 pl-4 pb-4 pr-4">
             <div>
                <h3 className="text-xl font-bold mb-[18px]">Perfromance</h3>

             </div>
             <div className="border-b pb-3 mb-3">
                <p className="text-sm font-medium text-slate-400 mb-1">Top Gainer</p>
                <div className="flex justify-between">
                   <div className="flex gap-2">
                      <img src="images/btc.png" alt="logo"/>
                      <p>BTC</p></div>
                   <p className="text-red-500 text-sm">-0.20%</p>
                </div>
             </div>
             <div>
                <p className="text-sm font-medium text-slate-400 mb-1">Top Loser</p>
                <div className="flex justify-between">
                   <div className="flex gap-2">
                      <img src="images/btc.png" alt="logo"/>
                      <p>BTC</p></div>
                   <p className="text-red-500 text-sm">-0.20%</p>
                </div>
             </div>
          </div>
       </div>
   );
}