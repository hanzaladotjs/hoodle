import { Link } from "react-router-dom"
const Sidebar = () => {
    return (


        <div className="min-h-25000 bg-yellow-100 z-50 border-r text-black w-110 md:flex flex-col font-bold hidden ">
          
            <div className="flex flex-col fixed text-2xl text-center justify-center w-100">
               <Link to={"/"}> <h2 className="py-6 hover:text-3xl hover:border-2 w-110 text-center hover:bg-blue-200">Home</h2> </Link>
               <Link to={"/trend"} ><h2 className="py-6  w-110 hover:border-2   hover:text-3xl text-center hover:bg-yellow-200">Top Coins</h2></Link>
               <Link to ="/ex" ><h2 className="py-6 w-110 hover:border-2  hover:text-3xl text-center hover:bg-green-200">Explore Exchnages</h2></Link>
                
               <Link to={"/global"}><h2 className="py-6 w-110 hover:border-2  hover:text-3xl text-center hover:bg-orange-200 ">Global Crypto Market</h2> </Link>
               <Link to={"/chains"} ><h2 className="py-6  w-110 hover:border-2  hover:text-3xl text-center  hover:bg-pink-200 ">Explore Blockchains</h2></Link>
            </div>
            
        </div>
    )
}


export default Sidebar