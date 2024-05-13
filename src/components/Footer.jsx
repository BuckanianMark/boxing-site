
const Footer = () => {
  return (
    <div className="bg-[#e6fcfc] z-[999999]  flex items-center justify-between fixed right-0 left-0  bottom-0 px-20 py-6">
        <div>
        <h2 className=" italic bg-emerald-100 logo py-4 px-1"> 
            Boxi<span className="text-emerald-600 ">Lads</span> 
            </h2>
        </div>
        <div>
            <h1 className="w-max border-b-2 border-gray-800 text-gray-800">Quick Links</h1>
            <ul className="flex flex-col sm:flex-row sm:gap-4 text-[14px] font-bold text-gray-700">
                <li><a href="/">Home</a></li>
                <li><a href="/registered-gyms">Registerd Gyms</a></li>
                <li><a href="/videos">Videos</a></li>
            </ul>
        </div>
        </div>
  )
}

export default Footer