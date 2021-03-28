import { Map, GoogleApiWrapper } from 'google-maps-react';
//types
import { MapStyles } from '../types.d'

type Props = {
    style: MapStyles;
    google: any;
}

const containerStyle = {
    width: "35%",
    height: "40%",
}

//replace initial center with location
//to implement: marker
const LocationContainer:React.FC<Props> = (props) => {
    return(
        <div className = "LocationIntegration">
            <Map
                google= {props.google}
                style = {props.style}
                containerStyle = {containerStyle}
                initialCenter={{ lat: 47.444, lng: -122.176}}
            />
        </div>
    )
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyA-SSEPOfbkCkAPA9Vaw3BlaBEy3sdm_84")
  })(LocationContainer)
