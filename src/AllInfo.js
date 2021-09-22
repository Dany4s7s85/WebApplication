import React from "react";
import Table from "./Table";

function AllInfo(){

    return(
        <div className="container">
            <div className="bg-white d-flex row justify-content-md-center m-4 p-4">
                <div className="card bg-light m-4 shadow-lg" style={{width: "500px"}}><br />
                    <img src="./Sperm.jpg" className="card-img-top rounded-circle mx-auto d-block" alt="..." style={{width:"130px"}} /><br />
                    <div class="card-body">
                        <h5 class="card-title">Sperma</h5>
                        <p class="card-text text-capitalize">
                            this acts on germ line cells of mails and femails and increases the sperm and egg production and also strengthens
                            the endometrium wall in femail so that after fertilization of egg fusion could occure.this drug can increase sperm
                            count in normal healthy person from 1-60% with in 40 days. this drug will not act if there is inborn fault of germ line 
                            cells inactiveness cells. in females if there is weak production of egg cells, egg nutrition, ovulation or endometrial
                            weakness. this drug can treat any of these cause but if there is inborn germs line cells defect it cannot be treated
                            with this drug.
                        </p>
                    </div>
                </div>

                <div className="card bg-light m-4 shadow-lg" style={{width: "500px"}}><br />
                    <img src="./death.png" className="card-img-top rounded-circle mx-auto d-block" alt="..." style={{width:"130px"}} /><br />
                    <div class="card-body">
                        <h5 class="card-title">Cancer</h5>
                        <p class="card-text text-capitalize">
                            this cancer drug is able to dry out and remove any type of cancer from body with good prognosis. any out grouth of body
                            including muscular tendaneious or bony cells including benign mass and unresolve wound which needs to be removed surgically
                            can be cured chemotherapeutically with this drug. first, second and third stage can be cured and metastasis can be deceased
                            with in days of dozing. as stage 4 is a critical condition and can only be survived if any vital organ is not damaged.
                            there are more chances of a stage 4 patient to get cured if he/she survives more then 20-days on chemotherapy without any vital
                            organ is damaged.
                        </p>
                    </div>
                </div>

                <div className="card bg-light m-4 shadow-lg" style={{width: "500px"}}><br />
                    <img src="./dragon.jpg" className="card-img-top rounded-circle mx-auto d-block" alt="..." style={{width:"130px"}} /><br />
                    <div class="card-body">
                        <h5 class="card-title">Heart</h5>
                        <p class="card-text text-capitalize">
                            this drug is able to cure any heart diseases including internal valves obstruction and blockage pace maker
                            insertion heart weaknesses and stents insertion, heart attack prevention, myocardial infraction recovery and
                            blood vessels diseases. this drug is gold standerd cure of heart as it strengthens its myocardial muscles. 
                        </p>
                    </div>
                </div>

                <div className="card bg-light m-4 shadow-lg" style={{width: "500px"}}><br />
                    <img src="./iron.jpg" className="card-img-top rounded-circle mx-auto d-block" alt="..." style={{width:"130px"}} /><br />
                    <div class="card-body">
                        <h5 class="card-title">Renal</h5>
                        <p class="card-text text-capitalize">this drug is helpfull in inflamentry and degnerative kidney diseases recovery. any pus production
                         or swelling condition of kidney can be recoverd. this drug is more effective in conditions prior to dialysis. this drug mainly acts on 
                         damaged part of glomerular area of bowman's capsules and so can act on damaged part of kidney and helps its recovery. this drug eradicates 
                         the use of stents as it removes the bliockage. a complete uremic kidney cannot be recovered as it is considered as dead because podocytes 
                         are not considered as alive. this drug does not
                          have lithotripsic effects for stones.    </p>
                    </div>
                </div>

                <div className="card bg-light m-4 shadow-lg" style={{width: "500px"}}><br />
                    <img src="./mercury.png" className="card-img-top rounded-circle mx-auto d-block" alt="..." style={{width:"130px"}} /><br />
                    <div class="card-body">
                        <h5 class="card-title">Paralysis and Palsey</h5>
                        <p class="card-text text-capitalize">this drug provides energy and stimulation to muscles and neurons to the part of body which is affected 
                        by paralysis or palsey. it strengthens and so help in recovery of damaged area. </p>
                    </div>
                </div>

                <div className="card bg-light m-4 shadow-lg" style={{width: "500px"}}><br />
                    <img src="./Sodium.png" className="card-img-top rounded-circle mx-auto d-block" alt="..." style={{width:"130px"}} /><br />
                    <div class="card-body">
                        <h5 class="card-title">Asthma</h5>
                        <p class="card-text text-capitalize">this drug reduces the allergic effects of lungs and increases the mucous production of lungs in phyrnx whic 
                        has anti-intusive effect of contagious cough and so helps in recovry of asthma patients.</p>
                    </div>
                </div>
                <div style={{backgroundImage:`url(./bgLogin.jpg)`, backgroundSize:"cover"}}>
                <Table />
                </div>
            </div>
        </div>
    )
}

export default AllInfo;