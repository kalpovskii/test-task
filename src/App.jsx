import React, {useEffect, useState} from 'react';
import {Header} from "./components/Header";
import {Cryptocurrencies} from "./components/Cryptocurrencies";
import {Statistics} from "./components/Statistics";
import {Perfomance} from "./components/Perfomance";
import axios from "axios";

export function App() {
   const [currency, setCurrency] = useState([])
   const [maxNum, setMaxNum] = useState({
      id: null,
      name: null,
      shortName: null,
      image: null,
      price: null,
      day: null,
      week: null
   })
   const [gainer, setGainer] = useState({
      id: null,
      name: null,
      shortName: null,
      image: null,
      price: null,
      day: null,
      week: null
   })
   const [loser, setLoser] = useState({
      id: null,
      name: null,
      shortName: null,
      image: null,
      price: null,
      day: null,
      week: null
   })
   const [page, setPage] = useState(1)

   // Get total price
   let totalPrice = currency.reduce((acc, cur) => acc + cur.price, 0).toFixed(2)

   useEffect(() => {
      if (currency.length > 0) {
         // Getting the max price
         let sorted = currency.slice().sort((x1, x2) => x2.price - x1.price)
         let maximum = sorted.slice(0, 1)[0]
         setMaxNum(maximum)

         // Top gainer 24h
         let topG = currency.slice().sort((x1, x2) => x2.day - x1.day)
         let maxTopG = topG.slice(0, 1)[0]
         setGainer(maxTopG)

         //Top loser 24h
         let topL = currency.slice().sort((x1, x2) => x1.day - x2.day)
         let lowTopL = topL.slice(0, 1)[0]
         setLoser(lowTopL)
      }
   }, [currency])

   useEffect(() => {
      axios.get(`https://63a5d692f8f3f6d4ab0123eb.mockapi.io/crypto?page=1&limit=5`)
          .then((response) => {
             setCurrency(response.data)
          })
          .catch((err) => {
             console.log(err);
          })
   }, [])
   function getCurrency() {
      if (page < 2) {
         axios.get(`https://63a5d692f8f3f6d4ab0123eb.mockapi.io/crypto?page=2&limit=5`)
             .then((response) => {
                setCurrency([...currency, ...response.data])
                setPage(prevState => prevState + 1)
             })
             .catch((err) => {
                console.log(err);
             })
      } else {
         console.log('There are no more items')
      }
   }

   return (
       <div className="container">
          <Header/>
          <div className="flex md:flex-col-reverse">
             <div className="w-full"><Cryptocurrencies currency={currency}
                                                           getCurrency={getCurrency}/>
             </div>
             <div className="min-w-[320px] md:flex md:gap-4 sm:flex-col xs:min-w-[280px] xs:gap-0">
                <Statistics currency={currency} totalPrice={totalPrice}
                            srt={maxNum}/>
                <Perfomance topG={gainer} topL={loser}/>
             </div>
          </div>
       </div>
   )
}
