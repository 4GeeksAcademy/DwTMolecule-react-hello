import React from "react";
import Navbar from "./navbar";
//include images into your bundle
import Jumbotron from "./jumbotron";
import Card from "./Card";
import Bajada from "./bajada";

//create your first component

const Home = () => {
	return (
		<div className="">
			<Navbar/>
			<Jumbotron/>
			<div className="row">
				<Card/> 
			    <Card/>
			<Card/>
			<Card/>
			</div>
			<Bajada/>
		</div>
	);
};

export default Home;
