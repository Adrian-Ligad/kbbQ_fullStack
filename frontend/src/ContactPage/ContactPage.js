import Location from '../Integrations/Location'

import './ContactPage.css'

const mapStyles = {
    position: "relative",
    width: '100%',
    height: '100%',
  };
  
export default function ContactPage() {
    return (
        <div className = "ContactPage">
            <div className = "Header">Contact Us</div>
            <div className = "ContactWrapper">
                <div className = "LocationWrapper">
                    <Location style = {mapStyles}/>
                </div>
                <div className = "HoursContainer">
                    <div className = "HoursHeader">Location and Hours</div>
                        <div className = "HoursContent">
                            <div>
                                12345 Danny Buscemi Ave <br/>
                                Godly Men, CA 92345 <br/>
                                US <br/>
                                <br/>
                                (909)631-3417<br/>
                                DannyBuscems@gmail.com<br/>
                            </div>
                            <div>
                            Monday 11:00 am - 9:30 pm<br/>
                            Tuesday 11:00 am - 9:30 pm<br/>
                            Wednesday 11:00 am - 9:30 pm<br/>
                            Thursday 11:00 am - 9:30 pm<br/>
                            Friday 11:00 am - 9:30 pm<br/>
                            Saturday 11:00 am - 9:30 pm<br/>
                            Sunday 11:00 am - 9:30 pm
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}