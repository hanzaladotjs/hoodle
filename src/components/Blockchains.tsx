import { useEffect, useState } from "react"

const Blockchains = () => {

    

    const [loading, setLoading] = useState<boolean>(true)
    const [blockchain, setBlockchain] = useState<any>([])


    const fetchBlockchain = async () => {

        const response = await fetch("https://api.diadata.org/v1/blockchains")
        const data = await response.json()

        setBlockchain(data)
        setLoading(false)
    }

    useEffect(()=> {
        fetchBlockchain()
    }, [blockchain])


    return (
        <div>
              {loading ? <div className="text-[#b63788] flex justify-center items-center min-h-screen text-6xl font-semibold"> loading. pls wait...</div>: 
              <div className="flex flex-col">
                <div className="md:text-7xl text-xl text-black  my-10">
                    List of popular blockchains/ecosystems
                </div> 
                <div className="space-y-3">
                {blockchain.map((block :any, index:any)=> {
                    return (
                        <div key={index} className="text-blue-600 hover:text-pink-500 text-xl md:text-3xl mx-10"> ➡ {block} </div>
                    )
                })}
                </div>
              </div>
               }
        </div>
    )
}

export default Blockchains