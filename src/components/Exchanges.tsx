import { useEffect, useState } from "react"

const Exchanges = () => {

    type Exchange = {
        id: string,
        name: string
    }

    const [loading, setLoading] = useState<boolean>(true)
    const [exchange, setExchange] = useState<Exchange[]>([])
   

    const fetchEx = async() => {
        const response = await fetch("https://api.coingecko.com/api/v3/exchanges/list", {
            headers : {
                'Accept' : "application/json"
            }
        })

        const data = await response.json()

        setExchange((data.map((ex:any) => ({
            id: ex.id,
            name: ex.name
        }))))
        setLoading(false)

    }

    useEffect(() => {fetchEx()} , [])
    return(
        <div>
{loading ? <div className="text-[#b63788] flex justify-center  items-center min-h-screen text-6xl font-semibold"> loading. pls wait...</div> : 
            <div className="flex text-black min-h-150 md:ml-10 ml-1 justify-center items-center">
                <div className="border-x flex py-2 border-blue-500 w-60 md:w-200 ml-1 text-[#b63788] flex-col">
                    <h1 className="border-b border-blue-500 text-xl py-2 font-bold">Exchange id</h1>
                    <h2 className="flex flex-col text-black font-bold">
                        {exchange.map((ex)=> {
                           return (
                                <div className="border-b h-18 ml-1 border-blue-200 hover:bg-stone-200" key={ex.id}>
                                    {ex.id}
                                </div>
                            )
                        })}
                        
                    </h2>
                </div>
                   <div className="border-r flex py-2 border-blue-500 w-60 md:w-200 ml-1 text-[#b63788] flex-col">
                    <h1 className="border-b border-blue-500 text-xl py-2 font-bold">Exchange name</h1>
                    <h2 className="flex flex-col text-black font-bold">
                        {exchange.map((ex)=> {
                           return (
                                <div className="border-b h-18 border-blue-200 ml-1 hover:bg-stone-200"key={ex.id}>
                                    {ex.name}
                                </div>
                            )
                        })}
                        
                    </h2>
                </div>
  </div>
}
  </div>
    )
}

export default Exchanges