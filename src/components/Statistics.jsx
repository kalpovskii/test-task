import React from "react";
export function Statistics ({currency, totalPrice, srt }) {
   return (
       <div className="bg-slate-50 rounded-lg mt-6 w-[320px] h-[205px]">
          <div className="pt-5 pl-4 pb-4 pr-4">
             <div>
                <h3 className="text-xl font-bold mb-[18px]">Statistics</h3>
                <p className="text-sm text-slate-400 mb-1">Assets Total Value</p>
                <div className="flex justify-between border-b pb-3 mb-3">
                   <p>{totalPrice}</p>
                   <p className="text-sm">{currency.length} Assets</p>
                </div>
             </div>
                 <div>
                <p className="text-sm font-medium text-slate-400 mb-1">Biggest Price</p>
                <div className="flex justify-between">
                   <div className="flex gap-2">
                      <img src={srt.image} alt="logo"/>
                      <p>{srt.name}</p>
                   </div>
                   <p className="text-sm">${srt.price}</p>
                </div>
             </div>
          </div>
       </div>
   );
}