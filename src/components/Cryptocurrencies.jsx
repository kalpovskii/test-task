export function Cryptocurrencies () {
   return (
      <div className="container">
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
            <tr className="border-b">
               <td className="text-center">
                  <button>
                     <img src="images/star.svg" alt="star"/>
                  </button>
               </td>
               <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
               <td className="flex items-center gap-3 text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  <img className="w-[24px] h-[24px]" src="images/btc.png" alt="btc"/>
                  <div>
                     <p className="font-semibold">BTC</p>
                     <p className="text-xs text-zinc-400">Bitcoin</p>
                  </div>
               </td>
               <td className="text-blue-600 text-sm font-light px-6 py-4 whitespace-nowrap">
                  $49,372.49
               </td>
               <td className="text-sm text-red-500 font-light px-5 py-4 whitespace-nowrap">
                  -0.20%
               </td>
               <td className="w-1.5 text-sm text-red-500 font-light px-5 py-4 whitespace-nowrap">
                  -0.20%
               </td>
            </tr>
            </tbody>
         </table>
      </div>
   );
}