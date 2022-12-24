import React from "react";

export function Perfomance({topGainer, topLoser}) {

   return (
       <div
           className="bg-slate-50 rounded-lg mt-6 w-full md:w-full xs:max-w-[280px]">
          <div className="p-5">
             <div className="flex justify-between align-center">
                <h3 className="text-xl font-bold mb-[18px]">Perfomance</h3>
                <ul className="grid h-full grid-flow-col gap-x-1 rounded-xl bg-gray-100 p-1 dark:bg-zinc-700 h-8">
                   <li className="overflow-x-auto rounded-lg shadow-sm">
                      <button
                          className="block w-full truncate rounded-lg font-medium ring-offset-0 focus-visible:ring focus-visible:ring-inset focus-visible:ring-blue-300 focus-visible:ring-offset-0 py-1 text-xs px-2 cursor-default bg-white text-blue-600 dark:bg-zinc-800 dark:text-blue-500">24h
                      </button>
                   </li>
                   <li>
                      <button type="button" tabIndex="0"
                              className="block w-full truncate rounded-lg font-medium ring-offset-0 focus-visible:ring focus-visible:ring-inset focus-visible:ring-blue-300 focus-visible:ring-offset-0 py-1 text-xs px-2 text-gray-600 hover:bg-gray-200 active:bg-gray-300 dark:text-zinc-300 dark:hover:bg-zinc-600 dark:active:bg-zinc-500">7d
                      </button>
                   </li>
                </ul>
             </div>
             <div className="border-b pb-3 mb-3">
                <p className="text-sm font-medium text-slate-400 mb-1">Top
                   Gainer</p>
                <div className="flex justify-between">
                   <div className="flex gap-2">
                      <img src={topGainer.image} alt="logo"/>
                      <p>{topGainer.shortName}</p></div>
                   {topGainer.day < 0 ?
                       <p className="text-red-500 text-sm">{topGainer.day}%</p> :
                       <p className="text-green-500 text-sm">{topGainer.day}%</p>}
                </div>
             </div>
             <div>
                <p className="text-sm font-medium text-slate-400 mb-1">Top
                   Loser</p>
                <div className="flex justify-between">
                   <div className="flex gap-2">
                      <img src={topLoser.image} alt="logo"/>
                      <p>{topLoser.shortName}</p></div>
                   <p className="text-red-500 text-sm">{topLoser.day}%</p>
                </div>
             </div>
          </div>
       </div>
   );
}