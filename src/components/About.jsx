import React,{useState} from 'react'

export default function About(props) {

//   const [myStyle, setMyStyle] = useState({
//     color: 'black',
//     backgroundColor: 'white',
//     border:"1px solid white"
//   })

let myStyle = {
    color: props.mode === "dark" ? "white": "black",
    backgroundColor: props.mode === "dark" ? "#254661": "white",

}
 
  

  


  return (
    <div className='container mt-5' style={{color: props.mode === "dark" ? "white": "black"}}>
        <h2>About Us</h2>
       <div className="accordion" id="accordionExample" style={myStyle}>
            <div className="accordion-item" style={{
    borderColor: props.mode === "light" ? "black" : "",  // only change the outline
  }}>
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Analyze your text
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>This is really helpful for analyzing text and apply other operations.</strong>
                </div>
                </div>
            </div>
            <div className="accordion-item" style={{
    borderColor: props.mode === "light" ? "black" : "",  // only change the outline
  }}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Free to use
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>Instructions are really clear and concise. A really easy to use website.</strong>
                </div>
                </div>
            </div>
            <div className="accordion-item" style={{
    borderColor: props.mode === "light" ? "black" : "",  // only change the outline
  }}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Browser Compatible
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>It works in all kinds of browser like chrome, edge, mozilla etc</strong>
                </div>
            </div>
        </div>
        {/* <div className="container my-4">
            <button onClick={toggleStyle} className='btn btn-primary'>{btnStyle}</button>
        </div> */}
     </div>
    </div>
  )
}
