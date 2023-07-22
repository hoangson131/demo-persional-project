import { useState } from "react";
import Button from "~/components/Button";
import { dataBase } from "~/database";

function SlideMall() {

    const [data,setData] = useState(dataBase.shopeeMall.slider)

    return ( 
        <div>
            <div>
                {data.map((item,index) => {
                    return(
                        <div key={index}>
                            <img src={item.imgUrl} alt={item.id}/>
                        </div> 
                    )
                })}

                <div>
                    {data.map((items,index) => {
                        return(
                            <span key={index}>{items}</span>
                        )
                    })}
                </div>
            </div>
            <Button></Button>
            <Button></Button>
        </div>
     );
}

export default SlideMall;