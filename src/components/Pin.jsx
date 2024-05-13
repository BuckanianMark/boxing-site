/* eslint-disable react/prop-types */
import { Marker, Popup } from "react-leaflet"
import { Link } from "react-router-dom"

const Pin = ({item}) => {
  return (
    <Marker position={[item.latitude,item.longitude]}>
      <Popup>
        <div className="popupContainer flex flex-col">
          <img src={item.images[0]} alt="image" />
          <div className="textContainer">
            <Link to={`/registered-gyms/${item.id}`} >{item.title}</Link>
          </div>
        </div>
      </Popup>
    </Marker>
  )
}

export default Pin