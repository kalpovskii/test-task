
export function Perfomance ({topG, topL}) {
   return (
       <div className="bg-slate-50 rounded-lg mt-6 w-full md:w-full xs:max-w-[280px]">
          <div className="p-5">
             <div>
                <h3 className="text-xl font-bold mb-[18px]">Perfomance</h3>

             </div>
             <div className="border-b pb-3 mb-3">
                <p className="text-sm font-medium text-slate-400 mb-1">Top Gainer</p>
                <div className="flex justify-between">
                   <div className="flex gap-2">
                      <img src={topG.image} alt="logo"/>
                      <p>{topG.shortName}</p></div>
                   {topG.day < 0 ? <p className="text-red-500 text-sm">{topG.day}%</p> : <p className="text-green-500 text-sm">{topG.day}%</p>}
                </div>
             </div>
             <div>
                <p className="text-sm font-medium text-slate-400 mb-1">Top Loser</p>
                <div className="flex justify-between">
                   <div className="flex gap-2">
                      <img src={topL.image} alt="logo"/>
                      <p>{topL.shortName}</p></div>
                   <p className="text-red-500 text-sm">{topL.day}%</p>
                </div>
             </div>
          </div>
       </div>
   );
}