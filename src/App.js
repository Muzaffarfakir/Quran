import React, { useEffect, useState } from "react"
import "bootstrap/dist/css/bootstrap.css"
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Pagenition from "./Pagination"
export default function App() {

    let [text, setText] = useState([]);
    let [postperpage, setCpostperpage] = useState(0)
    let [find, setFind] = useState("");

    let c = [];
    for (let i = 0; i <= 114; i++) {
        c.push(i)



    }
    useEffect(() => {
        fetch("https://api.alquran.cloud/v1/quran/en.asad").then((res) => res.json()).then((data) => {
            setText([data.data.surahs[postperpage]])
        })
    }, [postperpage])
    function handle(el, i, e) {

        setCpostperpage(parseInt(e.target.value))


    }
    console.log(find)




    return (
        <>
            <h3 className="text-center my-3">
                Holly Quran
            </h3>
            {/* <div > */}
            <div className="input-group mb-3 mx-3 my-3 text-center m-auto ">
                <input onChange={(e) => { setCpostperpage(e.target.value) }} type="text" className="form-control" placeholder="Serach Ayat Number here" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <div className="input-group-append">
                    <button className="input-group-text btn mx-3 btn-primary " id="basic-addon2 ">Search</button>
                </div>
                {/* </div> */}
                <div className="card mx-3 my-3 m-auto text-center">


                    {text.map((el) => {
                        return el.ayahs.map((ell) => {
                            return <div className="card ">
                                <hr />
                                <h6>{ell.text}</h6>
                            </div>
                        })
                    })}

                </div>


               
                {c.map((el, i) => {
                    return <div className="card m-auto text-center mx-2 my-2">
                        <div className="position-relative  mx-3 my-3 text-center ">
                            <button className="btn btn-secondary" value={i} key={i} onClick={(e) => { handle(el, i, e) }}>{el}</button>

                        </div>
                    </div>
                })}

                {/* <Pagenition curentpage={currentPage} setCurentpage={setCurrentpage} /> */}







            </div >



        </>
    )
} 