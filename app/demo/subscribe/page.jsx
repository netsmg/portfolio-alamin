"use client";
import React, { useEffect } from 'react';


const PricingCard = () => {
  useEffect(() => {
    const planBtns = document.querySelectorAll(".card-btn-parent button");
    const plans = document.querySelectorAll(".card-body > div");

    planBtns.forEach(planBtn => {
      planBtn.addEventListener("click", function () {
        removeClass();
        this.classList.add("active");
        let btnVal = this.getAttribute("id");
        let btnId = "#card-" + btnVal;
        document.querySelector(btnId).classList.add("active");
      });
    });

    function removeClass() {
      planBtns.forEach(planBtn => {
        if (planBtn.classList.contains("active")) {
          planBtn.classList.remove("active");
        }
      });

      plans.forEach(plan => {
        if (plan.classList.contains("active")) {
          plan.classList.remove("active");
        }
      });
    }
  }, []);

  return (
  <><div> <div className="pricing-card"> <div className="card-header"> <div className="card-btn-parent"> <button id="basic-plan" className="active">Basic</button> <button id="standard-plan">Standard</button> <button id="premium-plan">Premium</button> <div className="overlay" /> </div> </div> <div className="card-body"> <div id="card-basic-plan" className="active"> <div className="card-plans"> <span className="plan-tag">Basic</span> <div className="card-plan"> <h3 className="plan-title">Icon Sets</h3> <h3 className="plan-price">$60</h3> </div> </div> <div className="card-content"> <p>Up to 50 creative &amp; professional icons + one color versions/themes</p> <div className="card-lists"> <div className="card-list"><img src="https://rvs-pricing-card.vercel.app/tick.svg" alt />Included source files</div> <div className="card-list"><img src="https://rvs-pricing-card.vercel.app/wrong.svg" alt />Converted to responsive components</div> </div> </div> <div className="card-button"> <button>Add to cart</button> </div> </div> <div id="card-standard-plan"> <div className="card-plans"> <span className="plan-tag">Standard</span> <div className="card-plan"> <h3 className="plan-title">Icon Sets</h3> <h3 className="plan-price">$120</h3> </div> </div> <div className="card-content"> <p>Up to 100 creative &amp; professional icons + two color versions/themes per month</p> <div className="card-lists"> <div className="card-list"><img src="https://rvs-pricing-card.vercel.app/tick.svg" alt />Included source files</div> <div className="card-list"><img src="https://rvs-pricing-card.vercel.app/tick.svg" alt />Converted to responsive components</div> </div> </div> <div className="card-button"> <button>Add to cart</button> </div> </div> <div id="card-premium-plan"> <div className="card-plans"> <span className="plan-tag">Premium</span> <div className="card-plan"> <h3 className="plan-title">Icon Sets</h3> <h3 className="plan-price">$180</h3> </div> </div> <div className="card-content"> <p>Up to 200 creative &amp; professional icons + four color versions/themes</p> <div className="card-lists"> <div className="card-list"><img src="https://rvs-pricing-card.vercel.app/tick.svg" alt />Included source files</div> <div className="card-list"><img src="https://rvs-pricing-card.vercel.app/tick.svg" alt />Converted to responsive components</div> </div> </div> <div className="card-button"> <button>Add to cart</button> </div> </div> </div> </div> <style dangerouslySetInnerHTML={{__html: "@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap\");\n* {\n padding: 0;\n margin: 0;\n -webkit-box-sizing: border-box;\n box-sizing: border-box;\n}\n\nbody {\n background-color: #abd1c6;\n width: 100%;\n height: 100vh;\n font-family: \"Roboto\", sans-serif;\n}\nbody .pricing-card {\n width: 400px;\n min-height: 300px;\n height: auto;\n background: #fff;\n border-radius: 10px;\n -webkit-box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.286);\n box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.286);\n padding: 50px;\n display: -webkit-box;\n display: -ms-flexbox;\n display: flex;\n -webkit-box-orient: vertical;\n -webkit-box-direction: normal;\n -ms-flex-direction: column;\n flex-direction: column;\n row-gap: 20px;\n position: absolute;\n top: 10%;\n left: 50%;\n -webkit-transform: translateX(-50%);\n transform: translateX(-50%);\n}\nbody .pricing-card .card-header {\n width: 100%;\n height: 60px;\n padding: 10px;\n border: 1px solid #ededed;\n border-radius: 10px;\n}\nbody .pricing-card .card-header .card-btn-parent {\n width: 100%;\n height: 100%;\n display: -webkit-box;\n display: -ms-flexbox;\n display: flex;\n position: relative;\n}\nbody .pricing-card .card-header .card-btn-parent button {\n width: calc(100%/3);\n height: 100%;\n border: 0;\n border-radius: 7px;\n background-color: transparent;\n cursor: pointer;\n z-index: 1;\n font-weight: 500;\n -webkit-transition: color 0.5s ease;\n transition: color 0.5s ease;\n}\nbody .pricing-card .card-header .card-btn-parent button:nth-of-type(1).active, body .pricing-card .card-header .card-btn-parent button:nth-of-type(1).active ~ div {\n left: 0px;\n color: #fff;\n}\nbody .pricing-card .card-header .card-btn-parent button:nth-of-type(2).active, body .pricing-card .card-header .card-btn-parent button:nth-of-type(2).active ~ div {\n left: calc(100%/3);\n color: #fff;\n}\nbody .pricing-card .card-header .card-btn-parent button:nth-of-type(3).active, body .pricing-card .card-header .card-btn-parent button:nth-of-type(3).active ~ div {\n left: calc(calc(100%/3)*2);\n color: #fff;\n}\nbody .pricing-card .card-header .card-btn-parent div {\n position: absolute;\n top: 0;\n left: 0;\n width: calc(100%/3);\n height: 100%;\n background: #45a69a;\n border-radius: 7px;\n -webkit-transition: left 0.5s ease;\n transition: left 0.5s ease;\n}\nbody .pricing-card .card-body {\n display: -webkit-box;\n display: -ms-flexbox;\n display: flex;\n width: 100%;\n padding: 10px 20px;\n}\nbody .pricing-card .card-body > div {\n width: 100%;\n height: auto;\n display: none;\n}\nbody .pricing-card .card-body > div .card-plans {\n width: 100%;\n display: -webkit-box;\n display: -ms-flexbox;\n display: flex;\n -webkit-box-orient: vertical;\n -webkit-box-direction: normal;\n -ms-flex-direction: column;\n flex-direction: column;\n row-gap: 5px;\n}\nbody .pricing-card .card-body > div .card-plans span {\n color: gray;\n font-weight: 500;\n font-size: 13px;\n letter-spacing: 0.5px;\n}\nbody .pricing-card .card-body > div .card-plans div {\n display: -webkit-box;\n display: -ms-flexbox;\n display: flex;\n -webkit-box-pack: justify;\n -ms-flex-pack: justify;\n justify-content: space-between;\n}\nbody .pricing-card .card-body > div .card-plans div h3 {\n font-size: 24px;\n}\nbody .pricing-card .card-body > div .card-content {\n margin-top: 25px;\n}\nbody .pricing-card .card-body > div .card-content > p {\n line-height: 20px;\n font-size: 14px;\n font-weight: 400;\n}\nbody .pricing-card .card-body > div .card-content .card-lists {\n margin-top: 20px;\n display: -webkit-box;\n display: -ms-flexbox;\n display: flex;\n -webkit-box-orient: vertical;\n -webkit-box-direction: normal;\n -ms-flex-direction: column;\n flex-direction: column;\n row-gap: 10px;\n}\nbody .pricing-card .card-body > div .card-content .card-lists .card-list {\n display: -webkit-box;\n display: -ms-flexbox;\n display: flex;\n -webkit-column-gap: 10px;\n -moz-column-gap: 10px;\n column-gap: 10px;\n font-size: 14px;\n}\nbody .pricing-card .card-body > div .card-content .card-lists .card-list img {\n width: 15px;\n}\nbody .pricing-card .card-body > div .card-button {\n margin-top: 35px;\n}\nbody .pricing-card .card-body > div .card-button button {\n border: 0;\n width: 100%;\n height: 40px;\n background-color: #45a69a;\n border-radius: 20px;\n color: #fff;\n font-size: 14px;\n cursor: pointer;\n -webkit-box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.286);\n box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.286);\n letter-spacing: 0.5px;\n font-weight: 500;\n}\nbody .pricing-card .card-body > div.active {\n display: block;\n}\n\n@media screen and (max-width: 400px) {\n body .pricing-card {\n width: 320px;\n padding: 25px;\n }\n}" }} /> </div>
    </>
  );
}

export default PricingCard;

