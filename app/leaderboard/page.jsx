"use client";
import { useEffect } from "react";
import Link from "next/link";

export default function Page() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	
	const handleBack = () => {
		window.location.href = "/";
	};
	return (
		<>
			 <div>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap" rel="stylesheet" />
  <main>
    <div id="header">
      <h1>Ranking</h1>
      <button className="share">
        <i className="ph ph-share-network" />
      </button>
    </div>
    <div id="leaderboard">
      <div className="ribbon" />
      <table>
        <tbody><tr>
            <td className="number">1</td>
            <td className="name">Mohammad al-amin</td>
            <td className="points">
              258.244 <img className="gold-medal" src="https://github.com/malunaridev/Challenges-iCodeThis/blob/master/4-leaderboard/assets/gold-medal.png?raw=true" alt="gold medal" />
            </td>
          </tr>
          <tr>
            <td className="number">2</td>
            <td className="name">Assaduzzaman Sarker Ashad</td>
            <td className="points">258.242 <img className="gold-medal" src="https://github.com/malunaridev/Challenges-iCodeThis/blob/master/4-leaderboard/assets/gold-medal.png?raw=true" alt="gold medal" /></td>
          </tr>
          <tr>
            <td className="number">3</td>
            <td className="name">Abdullah Al-asik</td>
            <td className="points">258.223 <img className="gold-medal" src="https://github.com/malunaridev/Challenges-iCodeThis/blob/master/4-leaderboard/assets/gold-medal.png?raw=true" alt="gold medal" /></td>
          </tr>
          <tr>
            <td className="number">4</td>
            <td className="name">Sabbir Hossen</td>
            <td className="points">258.212</td>
          </tr>
          <tr>
            <td className="number">5</td>
            <td className="name">Salman Khan</td>
            <td className="points">258.208</td>
          </tr>
          <tr>
            <td className="number">6</td>
            <td className="name">Amir Khan</td>
            <td className="points">257.212</td>
          </tr>
          <tr>
            <td className="number">7</td>
            <td className="name">Sakib Khan</td>
            <td className="points">256.208</td>
          </tr>
          <tr>
            <td className="number">8</td>
            <td className="name">Aron paul</td>
            <td className="points">255.212</td>
          </tr>
          <tr>
            <td className="number">9</td>
            <td className="name">Mamunur Rashid</td>
            <td className="points">254
              .208</td>
          </tr>
          <tr>
            <td className="number">10</td>
            <td className="name">Ashik khan</td>
            <td className="points">254
              .208</td>
          </tr>
        </tbody></table>
      <div id="buttons">
        <button className="exit">Exit</button>
        <button className="continue">Continue</button>
      </div>
    </div>
  </main>
  <style dangerouslySetInnerHTML={{__html: "* {\n  font-size: 62, 5%;\n  box-sizing: border-box;\n  margin: 0;\n}\n\nbody {\n  height: 100%;\n  width: 100%;\n  min-height: 100vh;\n  background-color: #fbfaff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nmain {\n  width: 40rem;\n  height: 60rem;\n  background-color: #ffffff;\n  -webkit-box-shadow: 0px 5px 15px 8px #e4e7fb;\n  box-shadow: 0px 5px 15px 8px #e4e7fb;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border-radius: 0.5rem;\n}\n\n#header {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 2.5rem 2rem;\n}\n\n.share {\n  width: 4.5rem;\n  height: 3rem;\n  background-color: #f55e77;\n  border: 0;\n  border-bottom: 0.2rem solid #c0506a;\n  border-radius: 2rem;\n  cursor: pointer;\n}\n\n.share:active {\n  border-bottom: 0;\n}\n\n.share i {\n  color: #fff;\n  font-size: 2rem;\n}\n\nh1 {\n  font-family: \"Rubik\", sans-serif;\n  font-size: 1.7rem;\n  color: #141a39;\n  text-transform: uppercase;\n  cursor: default;\n}\n\n#leaderboard {\n  width: 100%;\n  position: relative;\n}\n\ntable {\n  width: 100%;\n  border-collapse: collapse;\n  table-layout: fixed;\n  color: #141a39;\n  cursor: default;\n}\n\ntr {\n  transition: all 0.2s ease-in-out;\n  border-radius: 0.2rem;\n}\n\ntr:not(:first-child):hover {\n  background-color: #fff;\n  transform: scale(1.1);\n  -webkit-box-shadow: 0px 5px 15px 8px #e4e7fb;\n  box-shadow: 0px 5px 15px 8px #e4e7fb;\n}\n\ntr:nth-child(odd) {\n  background-color: #f9f9f9;\n}\n\ntr:nth-child(1) {\n  color: #fff;\n}\n\ntd {\n  height: 5rem;\n  font-family: \"Rubik\", sans-serif;\n  font-size: 1.4rem;\n  padding: 1rem 2rem;\n  position: relative;\n}\n\n.number {\n  width: 1rem;\n  font-size: 2.2rem;\n  font-weight: bold;\n  text-align: left;\n}\n\n.name {\n  text-align: left;\n  font-size: 1.2rem;\n}\n\n.points {\n  font-weight: bold;\n  font-size: 1.3rem;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.points:first-child {\n  width: 10rem;\n}\n\n.gold-medal {\n  height: 3rem;\n  margin-left: 1.5rem;\n}\n\n.ribbon {\n  width: 42rem;\n  height: 5.5rem;\n  top: -0.5rem;\n  background-color: #5c5be5;\n  position: absolute;\n  left: -1rem;\n  -webkit-box-shadow: 0px 15px 11px -6px #7a7a7d;\n  box-shadow: 0px 15px 11px -6px #7a7a7d;\n}\n\n.ribbon::before {\n  content: \"\";\n  height: 1.5rem;\n  width: 1.5rem;\n  bottom: -0.8rem;\n  left: 0.35rem;\n  transform: rotate(45deg);\n  background-color: #5c5be5;\n  position: absolute;\n  z-index: -1;\n}\n\n.ribbon::after {\n  content: \"\";\n  height: 1.5rem;\n  width: 1.5rem;\n  bottom: -0.8rem;\n  right: 0.35rem;\n  transform: rotate(45deg);\n  background-color: #5c5be5;\n  position: absolute;\n  z-index: -1;\n}\n\n#buttons {\n  width: 100%;\n  margin-top: 3rem;\n  display: flex;\n  justify-content: center;\n  gap: 2rem;\n}\n\n.exit {\n  width: 11rem;\n  height: 3rem;\n  font-family: \"Rubik\", sans-serif;\n  font-size: 1.3rem;\n  text-transform: uppercase;\n  color: #7e7f86;\n  border: 0;\n  background-color: #fff;\n  border-radius: 2rem;\n  cursor: pointer;\n}\n\n.exit:hover {\n  border: 0.1rem solid #5c5be5;\n}\n\n.continue {\n  width: 11rem;\n  height: 3rem;\n  font-family: \"Rubik\", sans-serif;\n  font-size: 1.3rem;\n  color: #fff;\n  text-transform: uppercase;\n  background-color: #5c5be5;\n  border: 0;\n  border-bottom: 0.2rem solid #3838b8;\n  border-radius: 2rem;\n  cursor: pointer;\n}\n\n.continue:active {\n  border-bottom: 0;\n}\n\n@media (max-width: 740px) {\n    * {\n      font-size: 70%;\n    }\n}\n\n@media (max-width: 500px) {\n    * {\n      font-size: 55%;\n    }\n}\n\n@media (max-width: 390px) {\n    * {\n      font-size: 45%;\n    }\n}" }} />
</div>
					
		</>
	);
}
