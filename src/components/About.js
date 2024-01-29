import React from 'react'

function About(props) {
    let myStyle = {
        backgroundColor: props.mode==='light'?'white':'#2b485e', 
        color: props.mode==='light'?'black':'white'
    }

    let mydivStyle = {
        backgroundColor: props.mode==='light'?'white':'#3c6082', 
        color: props.mode==='light'?'black':'white'
    }

    return (
    <div className='container' style={{color: props.mode==='light'?'black':'white'}}>
        <h1 className='my-3'>About Us</h1>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <strong>Analyze Your Text</strong>
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={mydivStyle}>
                    TextUtils empowers you to dissect and understand your text effortlessly.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong>Free to Use</strong>
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={mydivStyle}>
                    Enjoy the benefits of our powerful text tools without any cost. TextUtils is here to enhance your text experience at no charge.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong>Browser Compatible</strong>
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={mydivStyle}>
                    Access TextUtils seamlessly on any browser, ensuring a smooth and hassle-free text manipulation experience.
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
