import React from 'react';
import {Header} from "./components/Header";
import {Cryptocurrencies} from "./components/Cryptocurrencies";
import {Statistics} from "./components/Statistics";
import {Perfomance} from "./components/Perfomance";

export function App () {
  return (
      <div className="container">
        <Header />
         <div className="grid grid-cols-3">
            <div className="col-span-2"><Cryptocurrencies /></div>
            <div>
               <Statistics />
               <Perfomance />
            </div>
         </div>
      </div>
  )
}
