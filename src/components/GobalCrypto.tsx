import { useEffect, useState } from "react"

const Global= () => {

    type GlobalData = {
        active:number,
        markets:number,
        marketcap: any,
        volume:any
    }

    const [loading, setLoading] = useState<boolean>(true)
    const [globe, setGlobe] = useState<GlobalData>({
        active: 0,
        markets:0,
        marketcap:{},
        volume: {}
    })


    const fetchGlobalData = async () => {
        const response = await fetch("https://api.coingecko.com/api/v3/global", {
            headers: {
                "Accept" : "application/json"
            }
        })

        const data = await response.json()

        setGlobe({
            active: data.data.active_cryptocurrencies,
            markets: data.data.markets,
            marketcap: data.data.total_market_cap,
            volume: data.data.total_volume
        })

        setLoading(false)


    }


    useEffect(() => {
        fetchGlobalData()
    }, [])



    return (
      <div>
            {loading ? <div className="text-[#b63788] flex justify-center items-center min-h-screen text-6xl font-semibold"> loading. pls wait...</div> : 
            <div className="flex flex-col">
                <h1 className="md:text-7xl text-2xl text-center text-black font-bold my-4 hover:underline"> Global Crypto Data</h1>
                <div className="flex md:justify-around justify-between mt-3"> 
                <h1 className="text-blue-600 md:text-4xl text-xl hover:underline ">Number of active cryptocurrencies: {globe.active} </h1>
                <h1 className="text-pink-600 md:text-4xl text-xl hover:underline "> Number of markets active: {globe.markets}</h1>
                </div>
                <h1 className="text-orange-700 my-5 md:text-4xl my-4 text-center text-xl hover:underline">MarketCap:</h1>
                <div className="w-full flex-wrap flex md:ml-5 ">{Object.entries(globe.marketcap).map((one:any,index)=> {
                    return (
                        <div key={index} className="flex border hover:bg-pink-200 px-1 py-5 md:px-5 md:py-10 space-x-2" >
                           <div className="text-black font-bold md:text-lg"> {one[0]}: </div>
                           <div className="text-green-700 font-semibold md:text-lg"> {one[1]} </div>
                        </div>
                    )
                })}
                </div>
                </div>
            
}
      </div>
    )
}

export default Global