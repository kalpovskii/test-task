export function Cryptocurrencies ({currency, getCurrency}) {
   return (
      <div className="">
         <h1 className="font-bold text-3xl pt-6 pb-6">Cryptocurrencies</h1>
         <table className="min-w-full">
            <thead className="border-b">
            <tr>
               <th className="">
                  <button>
                     <img src="images/star.svg" alt="star"/>
                  </button>
               </th>
               <th scope="col"
                   className="w-2 text-xs font-medium text-gray-900 px-6 py-4 text-left">
                  #
               </th>
               <th scope="col"
                   className="text-xs font-medium text-gray-900 px-6 py-4 text-left">
                  Asset
               </th>
               <th scope="col"
                   className="text-xs font-medium text-gray-900 px-6 py-4 text-left">
                  Price
               </th>
               <th scope="col"
                   className="text-xs font-medium text-gray-900 px-6 py-4 text-left">
                  24h %
               </th>
               <th scope="col"
                   className="text-xs font-medium text-gray-900 px-6 py-4 text-left">
                  7d %
               </th>
            </tr>
            </thead>
            <tbody>
            {currency.map(curr =>
                <tr className="border-b">
                   <td className="text-center">
                      <button>
                         <img src="images/star.svg" alt="star"/>
                      </button>
                   </td>
                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{curr.id+1}</td>
                   <td className="flex items-center gap-3 text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      <img className="w-[24px] h-[24px]" src={curr.image} alt="btc"/>
                      <div>
                         <p className="font-semibold">{curr.shortName}</p>
                         <p className="text-xs text-zinc-400">{curr.name}</p>
                      </div>
                   </td>
                   <td className="text-blue-600 text-sm font-light px-6 py-4 whitespace-nowrap">
                      ${curr.price}
                   </td>
                   {curr.day < 0 ? <td className="text-sm text-red-500 font-light px-5 py-4 whitespace-nowrap">
                      {curr.day}%
                   </td> : <td className="text-sm text-green-500 font-light px-5 py-4 whitespace-nowrap">
                      {curr.day}%
                   </td> }
                   {curr.week < 0 ? <td className="w-1.5 text-sm text-red-500 font-light px-5 py-4 whitespace-nowrap">
                      {curr.week}%
                   </td> : <td className="w-1.5 text-sm text-green-500 font-light px-5 py-4 whitespace-nowrap">
                      {curr.week}%
                   </td>}
                </tr>
            )}
            </tbody>
         </table>
         <button onClick={getCurrency} className="w-[118px] h-[40px] border-2 rounded-xl mt-4 mb-4 hover:bg-slate-100 active:bg-slate-200">
            Show more
         </button>
      </div>
   );
}