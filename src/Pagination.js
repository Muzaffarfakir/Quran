import React, { useState } from "react";
export default function Pagenition({ setCurentpage,curentpage }) {
    let [s,t]=useState(setCurentpage)
    let c = [];

    for (let i = 0; i <= 10; i++) {
        c.push(i)



    }
    function handle (el,i,e){

        console.log(e.target.value)
       setCurentpage(e.target.value)


    }





    return (

        <>
            {c.map((el,i) => {
                return <div>
                    <button value={i} key={i} onClick={(e)=>{handle(el,i,e)}}>{el}</button>

                </div>
            })}





        </>


    )
}