import { useEffect, useState } from "react"

const HotTokens = () => {
      type Coins = {
        symbol: string,
        name: string,
        price: any,
        marketCap: any
    }

    const [page] = useState<Number>(1)
    const [coins, setCoins] = useState<Coins[]>([])
    const [loading, setLoading] = useState<boolean>(false)
 
    const per_page = 20;

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
            {loading ? <div className="text-[#b63788] flex justify-center items-center min-h-200 text-6xl font-semibold"> loading. pls wait...</div> : 
            <div className="flex text-black">
                <div className="border-r flex h-screen py-2 border-blue-500 md:w-150 w-25 ml-1 text-[#b63788] flex-col">
                    <h1 className="border-b border-blue-500 text-xl font-bold">Name</h1>
                    <h2 className="flex flex-col text-black">
                        {coins.map((coin)=> {
                           return (
                                <div className="border-b h-13 border-blue-200 hover:bg-stone-200">
                                    {coin.name}
                                </div>
                            )
                        })}
                    </h2>
                </div>
                <div className="border-r h-screen  md:w-90 py-2 ml-1 border-blue-500 w-20  text-[#b63788] flex flex-col">
                    <h1 className="border-b border-blue-500 text-xl font-bold">symbol</h1>
                    <h2 className="flex flex-col text-black">
                           {coins.map((coin)=> {
                           return (
                            <div>
                                <div className="border-b h-13 border-blue-200 hover:bg-stone-200">
                                    {coin.symbol}
                                </div>
                               
                                </div>
                            )
                        })}
                        <button className="bg-blue-200"> prev</button>
                    </h2>
                </div>
                <div className="flex border-r  md:w-150 h-screen border-blue-500 w-30  py-2 ml-1 text-[#b63788] flex-col">
                    <h1 className="border-b border-blue-500 text-xl font-bold">price</h1>
                      <h2 className="flex flex-col text-black">
                           {coins.map((coin)=> {
                           return (
                            <div>
                                <div className="border-b h-13 border-blue-200 hover:bg-stone-200">
                                    {coin.price}[inr]
                                </div>
                                
                            </div>
                            )
                            
                        })}
                        <button className="bg-pink-200 ">Next </button>
                    </h2>
                </div>
                 <div className="flex h-screen md:w-150 py-2 ml-1  text-[#b63788] w-45 flex-col">
                    <h1 className="border-b border-blue-500 text-xl font-bold">marketcap</h1>
                      <h2 className="flex flex-col text-black">
                           {coins.map((coin)=> {
                           return (
                                <div className="border-b h-13 border-blue-200 hover:bg-stone-200">
                                    {coin.marketCap}[inr]
                                </div>
                            )
                        })}
                    </h2>
                </div>
            </div>}
        </div>
    )
}

export default HotTokens