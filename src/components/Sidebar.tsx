const Sidebar = () => {
    return (
        <div className="min-h-screen bg-[#7d6ac9] w-90 md:flex flex-col text-white font-bold justify-between hidden ">
            <div className="flex flex-col text-center">
                <h2 className="py-6 text-md hover:bg-[#998dc9] w-full">Trending Tokens</h2>
                <h2  className="py-6 text-md hover:bg-[#998dc9] w-full">Explore Tokens</h2>
                <h2  className="py-6 text-md hover:bg-[#998dc9] w-full">Navigate prices</h2>
            </div>
                <h1 className="mb-22 text-stone-300 text-center hover:text-white italic"> hanzala 2025</h1>
        </div>
    )
}


export default Sidebar