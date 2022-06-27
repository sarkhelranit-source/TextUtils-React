import React from 'react'

export default function About(propa) {
    return (

        <div className={`px-3 py-3 mt-3 bg-${propa.mode === "dark" ? "#343a40" : "transparent"} text-${propa.mode === "dark" ? "white" : "black"}`}>
            <center><h1 className='text-bold mt-2'>About Us</h1></center>
            <div className="accordion accordion-flush mt-3" id="accordionFlushExample">
                <div className={`accordion-item bg-${propa.mode === "dark" ? "#343a40" : "transparent"} text-${propa.mode === "dark" ? "white" : "black"}`}>
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className={`accordion-button collapsed bg-${propa.mode === "dark" ? "#343a40" : "transparent"} text-${propa.mode === "dark" ? "white" : "black"}`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className={`accordion-collapse collapse bg-${propa.mode === "dark" ? "#343a40" : "transparent"} text-${propa.mode === "dark" ? "white" : "black"}`} aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className={`accordion-body bg-${propa.mode === "dark" ? "#343a40" : "transparent"} text-${propa.mode === "dark" ? "white" : "black"}`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat est nostrum commodi quia reiciendis nemo totam iusto officia dignissimos consectetur odit at illo, nobis, quae vero. Perferendis obcaecati, harum aut eaque unde beatae in possimus ipsam expedita autem voluptatibus laudantium animi sequi modi eos alias maxime id ad mollitia odio.</div>
                    </div>
                </div>
                <div className={`accordion-item bg-${propa.mode === "dark" ? "#343a40" : "transparent"} text-${propa.mode === "dark" ? "white" : "black"}`}>
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button className={`accordion-button collapsed bg-${propa.mode === "dark" ? "#343a40" : "transparent"} text-${propa.mode === "dark" ? "white" : "black"}`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className={`accordion-collapse collapse bg-${propa.mode === "dark" ? "#343a40" : "transparent"} text-${propa.mode === "dark" ? "white" : "black"}`} aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className={`accordion-body bg-${propa.mode === "dark" ? "#343a40" : "transparent"} text-${propa.mode === "dark" ? "white" : "black"}`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat est nostrum commodi quia reiciendis nemo totam iusto officia dignissimos consectetur odit at illo, nobis, quae vero. Perferendis obcaecati, harum aut eaque unde beatae in possimus ipsam expedita autem voluptatibus laudantium animi sequi modi eos alias maxime id ad mollitia odio.</div>
                    </div>
                </div>
                <div className={`accordion-item bg-${propa.mode === "dark" ? "#343a40" : "transparent"} text-${propa.mode === "dark" ? "white" : "black"}`}>
                    <h2 className="accordion-header" id="flush-headingThree">
                        <button className={`accordion-button collapsed bg-${propa.mode === "dark" ? "#343a40" : "transparent"} text-${propa.mode === "dark" ? "white" : "black"}`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className={`accordion-collapse collapse bg-${propa.mode === "dark" ? "#343a40" : "transparent"} text-${propa.mode === "dark" ? "white" : "black"}`} aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className={`accordion-body bg-${propa.mode === "dark" ? "#343a40" : "transparent"} text-${propa.mode === "dark" ? "white" : "black"}`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat est nostrum commodi quia reiciendis nemo totam iusto officia dignissimos consectetur odit at illo, nobis, quae vero. Perferendis obcaecati, harum aut eaque unde beatae in possimus ipsam expedita autem voluptatibus laudantium animi sequi modi eos alias maxime id ad mollitia odio.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
