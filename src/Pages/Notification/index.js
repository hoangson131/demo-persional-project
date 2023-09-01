import { useEffect, useContext } from "react";
import { DataContext } from "~/DataProvider/dataProvider";

function Notification() {

  const data = useContext(DataContext)

  console.log(data);

  return ( 
    <div>
      {data && <div>{data.application.appMobile.map((item,index) => <li key={index}>{item.name}</li>)}</div>}
    </div>
   );
}

export default Notification;