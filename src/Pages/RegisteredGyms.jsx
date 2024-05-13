import Map from "../components/Map"
import { registeredGyms } from "../lib/dummyData"

const RegisteredGyms = () => {
  const data = registeredGyms
  console.log(data)
  return (
    <div className="w-[80%] h-[80%]">
      <h1 className=" border-b-2 mb-2 w-max border-teal-800 text-teal-800">GeoLocation Of Registered Gyms</h1>
    <div className="w-[100%] h-[100%]">
      <Map gyms={data} />
    </div>
    </div>
  )
}

export default RegisteredGyms