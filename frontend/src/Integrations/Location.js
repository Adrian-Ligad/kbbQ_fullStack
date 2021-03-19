import { Map, GoogleApiWrapper } from 'google-maps-react';

const containerStyle = {
    width: "35%",
    height: "40%",
}

//replace initial center with location
//to implement: marker
export  function LocationContainer(props) {
    return(
        <div className = "LocationIntegration">
            <Map
                google= {props.google}
                zoom= {8}
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