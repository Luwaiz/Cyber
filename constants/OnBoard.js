import ApplicationSec from "../assets/svg/applicationSec.svg";
import EndPoint from "../assets/svg/endpoint.svg";
import Cloud from "../assets/svg/Cloud.svg";
import Network from "../assets/svg/networkSec.svg";

export const Preference = [
	{ number: 1, title: "Please pick a topic of interest" },
	{ number: 2, title: "Network security" },
	{ number: 3, title: "How much do you know?" },
	{ number: 4, title: "How much time would like to spend learning?" },
];

export const interest = [
	{ topic: "Block chain", image: <EndPoint /> },
	{ topic: "Network security", image: <Network /> },
	{ topic: "Application security", image: <ApplicationSec /> },
	{ topic: "Endpoint security", image: <EndPoint /> },
	{ topic: "Cloud security", image: <Cloud/> },
	{ topic: "Industrial control system security", image: <Network /> },
];

