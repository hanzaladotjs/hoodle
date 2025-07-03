import { Link } from "react-router-dom"
const Sidebar = () => {
    return (


        <div className="min-h-screen bg-blue-200 border-r text-black w-120  md:flex flex-col font-bold hidden ">
          
            <div className="flex flex-col fixed text-2xl text-center justify center w-100">
               <Link to={"/"}> <h2 className="py-6 hover:text-3xl text-center">Home</h2> </Link>
               <Link to={"/trend"} ><h2 className="py-6   hover:text-3xl text-center">Top Coins</h2></Link>
               <Link to ="/ex" ><h2 className="py-6  hover:text-3xl text-center">Explore Exchnages</h2></Link>
                
               <Link to={"/global"}><h2 className="py-6 hover:text-3xl text-center  ">Global Crypto Market</h2> </Link>
               <Link to={"/chains"} ><h2 className="py-6 hover:text-3xl text-center  ">Explore Blockchains</h2></Link>
            </div>
            
        </div>
    )
}


export default Sidebar