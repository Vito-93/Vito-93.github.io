
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
	name: "Vito",
	links: [
		{
			title: "About",
			link: "#about",
		},
		{
			title: "Projects",
			link: "#projects",
		},
		{
			title: "Contact",
			link: "#contact",
		},
		{
			title: "Links",
			link: "/links",
		},
	],
}
export const intro = {
	title: "Hey, I'm Vito",
	description: " I hold the role of Solution Architect at Olivetti S.p.A. and I'm specialized in IoT solutions." +
		" I have a degree in Aerospace and Mechatronic Engineer," +
		" and I've always had a passion for Information Technology.",
	image: profile.src,
	buttons: [
		{
			title: "Contact Me",
			link: "#contact",
			isPrimary: true,
		},
		{
			title: "Resume",
			//link: require("./resume.pdf"),
			link: "https://drive.google.com/file/d/10zvHqUttik2eGCo9VR0U0F3Pi2ddrTB8/view?usp=sharing",
			isPrimary: false,
		},
	],
}

export const about = {
	title: "Who I am",
	description: [
		"As a Solution Architect I deal with the design of IoT service architectures, " +
		"I draw up the functional requirements for the design and I analyze the available technologies" +
		" and which software product must be developed to provide the best solution to the problem that must be solved." +
			"I began my university career studying Aerospace Engineering at the Politecnico di Torino. " +
		"After earning my bachelor's degree, I graduated from the master's degree course in Mechatronics " +
		"Engineering, also at the Politecnico di Torino."+
		" I am currently pursuing a high apprenticeship 1st level Specializing Master’s diploma called" +
		" 'Smart Product Design 4.0' " +
		"provided by the Politecnico di Torino in collaboration with Olivetti S.p.A."+
			"The master is aimed at training on technologies and methodologies\n" +
		"for the conception and development of Smart Products."+
			"During the\n" +
		"{rst year we attended targeted courses such as: Python\n" +
		"programming, Computer Networks, IoT and Sensors, Databases and\n" +
		"Data Analysis, Product Life Cycle Management (HW/SW), Design\n" +
		"Thinking, Digital Transformation Management, GDPR. While, during\n" +
		"the second year I dedicated myself to the development of a project\n" +
		"work based on the architecture and development of IoT Cloud native\n" +
		"applications."

	],
}

export const work = {
	title: "What I do",
	cards: [
		{
			title: "Solution Architect",
			description: " I provide recommendations and roadmaps for proposed solutions." +
				" I deal with the design, debugging and performance analysis on solutions." +
				" I write documentation and share knowledge of best practices for new solutions." +
				" I support process improvement and help develop solutions." +
				" I regularly communicate new features and benefits to partners, customers and other interested parties.\n" +
				"Development of proof-of-concept projects to validate proposed solutions",
			icons: null,
		}
	],
}

export const projects = {
	title: "Education",
	cards: [
		{
			title: "Smart Product Design 4.0",
			description: "1st level Specializing Master’s diploma\n" +
				"Politecnico di Torino",
			// icons: [
			// 	{
			// 		icon: faAppStore,
			// 		link: "https://apps.apple.com/us/app/starbook-journal-ai-diary/id1552418289",
			// 	},
			// 	{
			// 		icon: faGithub,
			// 		link: "https://github.com/hashirshoaeb/star_book",
			// 	},
			// ]
		},
		{
			title: "Master of Science in Mechatronic Engineering",

			description: "Master Thesis: Modeling and Identi{cation of Wheel-soil Interaction\n" +
				"for precision Agriculture Robotics.",
		},
		{
			title: "Bachelor of Science in Aerospace Engineering",
			description: "Thesis: Development of a Numerical Model to simulate Dry Friction\n" +
				"phenomena: application on an electrohydraulic servomechanism.",
		},
	],
}

export const contact = {
	title: "Get in touch",
	description: "Please do not hesitate to schedule a meeting. Alternatively, feel free to reach out directly by email at v_vattiata@outlook.it.",
	buttons: [
		{
			title: "Email Me",
			link: "mailto:v_vattiata@outlook.it",
			isPrimary: true,
		},
		// {
		// 	title: "Schedule Meeting",
		// 	link: "",
		// 	isPrimary: false,
		// },
	]
}

// SEARCH ENGINE 
export const SEO = {
	// 50 - 60 char  
	title: "Vattiata | Solution Architect | Mechatronic Engineer | Aerospace Engineer",
	description: "I am a Mechatronic Engineer, with a passion for computer science since ever." +
		" I graduated from Politecnico di Torino" +
		" in 2020 with a Master degree in Mechatronic Engineering" +
		" and and in January 2023, again with the Politecnico di Torino, I will complete another" +
		" master's course named Smart Product Design 4.0",
	image: profile.src,
}

export const links = {
	image: profile.src,
	title: "@vitovattiata",
	description: "Solution Architect | Mechatronic Engineer",
	cards: [

		{
			title: "My GitHub",
			link: "https://github.com/Vito-93",
		},
		{
			title: "My LinkedIn",
			link: "https://www.linkedin.com/in/vvattiata/",
		},
	]
}