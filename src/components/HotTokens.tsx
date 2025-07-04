import { useEffect, useState } from "react"

const HotTokens = () => {
      type Coins = {
        symbol: string,
        name: string,
        price: any,
        marketCap: any
    }

    const [page, setPage] = useState<number>(1)
    const [coins, setCoins] = useState<Coins[]>([])
    const [loading, setLoading] = useState<boolean>(true)
 
    const per_page = 14;

    const fetchCoins = async () => {
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?page=${page}&per_page=${per_page}&vs_currency=inr`, {
            headers: {
                "Accept" : "application/json"
            }
        })

        const data = await response.json()
       
    const cleaned = data.map((coin: any) => ({
        symbol: coin.symbol,
        name: coin.name,
        price: coin.current_price,
        marketCap: coin.market_cap,
      }))

      setCoins(cleaned)
      setLoading(false)
    }

    useEffect(() => {
        fetchCoins()
    }, [page])
    return (
        <div>
            {loading ? <div className="text-[#b63788] flex justify-center items-center min-h-screen text-6xl font-semibold"> loading. pls wait...</div> : 
            <div className="flex text-black  ml-1 justify-center" >
                <div className="border-x flex py-2 border-blue-500 md:w-80 w-27 text-[#b63788] flex-col">
                    <h1 className="border-b border-blue-500 py-2 md:text-xl text-md font-bold">Name</h1>
                    <h2 className="flex flex-col text-black font-bold">
                        {coins.map((coin)=> {
                           return (
                                <div className="border-b h-16 border-blue-200 hover:bg-stone-200" key={coin.symbol}>
                                    {coin.name}
                                </div>
                            )
                        })}
                         <button className="bg-blue-200 py-3 hover:border-2" onClick={() => {if(page<1){return  }setPage((prev)=> (prev-1))}}> prev</button>
                    </h2>
                </div>
                <div className="border-r  md:w-90 py-2 ml-1 border-blue-500 w-17  text-[#b63788] flex flex-col">
                    <h1 className="border-b border-blue-500 md:text-xl py-2  text-md font-bold">symbol</h1>
                    <h2 className="flex flex-col text-black">
                           {coins.map((coin)=> {
                           return (
                            <div>
                                <div className="border-b h-16 border-blue-200 hover:bg-stone-200" key={coin.symbol}>
                                    {coin.symbol}
                                </div>
                               
                                </div>
                            )
                        })}
                       
                    </h2>
                </div>
                <div className="flex border-r  md:w-150 border-blue-500 w-27  py-2 ml-1 text-[#b63788] flex-col">
                    <h1 className="border-b border-blue-500 md:text-xl text-md py-2 font-bold">price(inr)</h1>
                      <h2 className="flex flex-col text-black">
                           {coins.map((coin)=> {
                           return (
                            <div>
                                <div className="border-b h-16 border-blue-200 hover:bg-stone-200">
                                    {coin.price}
                                </div>
                                
                            </div>
                            )
                            
                        })}
                        
                    </h2>
                </div>
                 <div className="flex md:w-100 py-2 ml-1  text-[#b63788] w-40 flex-col">
                    <h1 className="border-b border-blue-500 md:text-xl py-2 md:text-lg text-sm font-bold">marketcap(inr)</h1>
                      <h2 className="flex flex-col text-black">
                           {coins.map((coin)=> {
                           return (
                                <div className="border-b h-16 border-blue-200 hover:bg-stone-200">
                                    {coin.marketCap}
                                </div>
                            )
                        })}
  <button className="bg-pink-200 py-3 hover:border-2" onClick={() => setPage((prev)=> (prev+1))}>Next </button>
                    </h2>
                </div>
            </div>}
        </div>
    )
}

export default HotTokens