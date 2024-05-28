
import { ClassNames } from "@emotion/react";
import Clock from "react-live-clock";

export default function ClockPage() {


  return (<>
    <Clock format={"ddd, MMMM Do, YYYY"} 
  ticking={true} timezone={"Rok"} className="bg-green-200 flex justify-center items-center"/>
  <div>
 <Clock format={"HH:mm:ss"}
  ticking={true}
    className="bg-red-100 flex justify-end items-center"  timezone={"Rok"}/ >
  </div>
  </>);
}