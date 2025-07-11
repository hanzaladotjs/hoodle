
import { useState } from "react"

import NeubrutalismButton from "./Button"
import { Link } from "react-router-dom"



const Navbar = () => {
    const [open, setOpen] = useState<boolean>(false)


    function Openit() {
       if(open){
        setOpen(false)
       }else{
        setOpen(true)
       }
    }
    return (
        <div>
        <nav className=" w-full md:h-25 h-17 px-2 md:px-0 text-black bg-[#ffafe2] border-b border-[#62003e] opacity-85 flex justify-between md:justify-around md:space-x-100 items-center">

            <div className="flex space-x-2  items-center">
                <svg width="34px" height="34px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000" stroke-width="1.9"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM15.75 9.5C15.75 8.73697 15.5678 8.0837 15.1673 7.56443C14.7698 7.04908 14.2196 6.74662 13.6352 6.56475C13.3606 6.4793 13.0634 6.41656 12.75 6.37066V5.5C12.75 5.08579 12.4142 4.75 12 4.75C11.5858 4.75 11.25 5.08579 11.25 5.5V6.25782C10.7764 6.24612 10.291 6.24929 9.81006 6.25243H9.81004L9.59566 6.25379C8.85407 6.25813 8.25003 6.85975 8.25003 7.60591V7.60593L8.25 12V12.0001V16.3941C8.25 17.1403 8.85404 17.7419 9.59559 17.7462L9.81003 17.7476C10.2909 17.7507 10.7764 17.7539 11.25 17.7422V18.5C11.25 18.9142 11.5858 19.25 12 19.25C12.4142 19.25 12.75 18.9142 12.75 18.5V17.6293C13.0634 17.5834 13.3606 17.5207 13.6352 17.4353C14.2196 17.2534 14.7698 16.9509 15.1673 16.4356C15.5677 15.9163 15.75 15.263 15.75 14.5C15.75 13.6694 15.5186 12.9776 15.0407 12.449C14.8822 12.2736 14.7049 12.1255 14.5145 12C14.7049 11.8745 14.8822 11.7264 15.0407 11.551C15.5186 11.0224 15.75 10.3306 15.75 9.5ZM12.9426 11.0513C12.393 11.1891 11.7378 11.2357 11.0012 11.2496C10.5848 11.2414 10.1634 11.2435 9.75001 11.2463L9.75003 7.75291C11.2172 7.74444 12.3752 7.7436 13.1895 7.997C13.5843 8.11985 13.8279 8.28395 13.9795 8.48048C14.128 8.67309 14.25 8.97702 14.25 9.5C14.25 10.0412 14.1064 10.3478 13.928 10.5451C13.7364 10.7571 13.4256 10.9303 12.9426 11.0513ZM11.0012 12.7504C10.5848 12.7586 10.1634 12.7565 9.75 12.7537V16.2471C11.2172 16.2556 12.3752 16.2564 13.1895 16.003C13.5842 15.8802 13.8279 15.7161 13.9795 15.5195C14.128 15.3269 14.25 15.023 14.25 14.5C14.25 13.9588 14.1064 13.6522 13.928 13.4549C13.7364 13.2429 13.4256 13.0697 12.9426 12.9487C12.393 12.8109 11.7378 12.7643 11.0012 12.7504Z" fill="#000000"></path></svg>
                <Link to={"/"}><h1 className="text-4xl hover:underline font-bold"> Hoodle</h1></Link>
            </div>
            <div>

                <input className="hidden md:mt-7 md:flex border border-2 text-black bg-blue-200  h-15 outline-none focus:ring-0 focus:outline-none w-100 placeholder-black text-2xl rounded-sm pl-1" type="search" placeholder=" 🔍  Search..." />
                <NeubrutalismButton props={Openit} />
                
            </div> </nav>
            {open? <div className="  absolute top-20 bg-white left-1 flex md:hidden  border-2 py-2 justify-center items-center">
                    <Link to={"/trend"} onClick={() => setOpen(false)} ><div className="border-r bg-green-200  w-14"> Coins  </div></Link>
                   <Link to={"/ex"} onClick={() => setOpen(false)} > <div className="p-1 border-r bg-blue-200 px-2 w-30 "> Exchanges </div> </Link>
                   <Link to={"/chains"} onClick={() => setOpen(false)}  ><div className="p-1  border-r bg-yellow-200 w-30 "> Blockchains </div></Link>
                   <Link  to={"/global"} onClick={() => setOpen(false)} ><div className="p-1  w-30 px-1 bg-pink-200"> Global data</div> </Link>
                </div> : null}
            </div>

    )
}


export default Navbar