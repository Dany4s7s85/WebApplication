import React from "react";

function ContectUs(){

    return(
        <div className="container">
            <div className="bg-white d-flex row justify-content-md-center m-4 p-4">
                <div className="card m-3 text-white" style={{width: "300px", backgroundImage:`url(./bgContectUs.jpg)`, backgroundSize:"cover"}}>
                <br />
                <br />
                    <p>email:</p>
                    <p>Phone:</p>
                    <p>Address:</p>
                    <br />
                    <br />
                    <br />
                    <p className="text-capitalize">
                        you can use phone number to get all information.
                        our asistent will provide information that you want.
                        you can use our email to send your reports, required information and condition of patient.
                        you can also use Address to apear physically on clinic thanks to visit our blog.
                        you can send reports on email and get medicine throw TCS.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ContectUs;