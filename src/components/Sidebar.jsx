import Twitter from "../assets/twitter.png"

const Sidebar = () => {
  return (
    <div className="flex items-center justify-center my-6">

        <h1 className="flex bg-white rounded-full py-3 px-4 items-center gap-6 text-xl text-teal-800 font-semibold capitalize"><img src={Twitter} alt="twitter" width={100} /> Twitter space</h1>
    </div>
  )
}

export default Sidebar