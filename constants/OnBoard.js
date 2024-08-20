import ApplicationSec from "../assets/svg/applicationSec.svg";
import EndPoint from "../assets/svg/endpoint.svg";
import Network from "../assets/svg/networkSec.svg";

export const Preference = [
	{ number: 1, title: "Please pick a topic of interest" },
	{ number: 2, title: "Network security" },
	{ number: 3, title: "How much do you know?" },
	{ number: 4, title: "How much time would like to spend learning?" },
];

export const interest = [
	{ topic: "Block chain",rate:20, image: <EndPoint /> },
	{ topic: "Network security",rate:78, image: <Network /> },
	{ topic: "Internet of Things",rate:50, image: <ApplicationSec /> },
];

