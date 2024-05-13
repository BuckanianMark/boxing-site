import { useParams } from "react-router-dom"
import { registeredGyms } from "../lib/dummyData"
import { useState } from "react"

const Gym = () => {
    const [imageIndex,setImageIndex] = useState(null)
    const data = registeredGyms
    const params = useParams()
    const gymId = parseInt(params.id);
    const gym  = data.filter((item )=> item.id === gymId)
    console.log(gym)
  return (
    <div className="w-full relative flex items-center pb-12 mt-10 flex-col justify-center">
        <a href="/registered-gyms" className=" top-[140px] right-10 bg-red-300 py-1 px-4 rounded-md fixed z-10">back</a>
        <div className="flex flex-col w-[100%] gap-2">
            <h1 className="text-lg text-teal-800 font-bold"> {gym[0].title}</h1>
            <div >
            {imageIndex ? 
                (<img src={gym[0].images[imageIndex]} alt=""  />) 
                : 
                (<img src={gym[0].images[0]} alt=""  />)}
            </div>
            <div className="flex gap-4 items-center">
            {gym[0].images.slice(1).map((image,index) => (
                    <img className="w-[150px]" key={index} src={image} onClick={() => setImageIndex(index + 1)}/>
                ))}
            </div>
        </div>
        <div className="mt-6">
            <div>
                <h1 className="font-semibold text-gray-700 w-max border-b-2 border-gray-700">Description</h1>
           <p className="w-[80%] text-teal-800">{gym[0].description}</p>
            </div>
            <div>
                <h1 className="font-semibold text-gray-700 w-max border-b-2 border-gray-700">Features/Sections</h1>
                <div className="flex flex-wrap items-center gap-4 mt-3 ">
                {gym[0].features.map((feature,index) => (
                    <span className="bg-teal-100 px-4 rounded-md border-2 border-teal-800 text-teal-800" key={index}>{feature}</span>
                ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Gym