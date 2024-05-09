// Filename - components/SidebarData.js

import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
	{
		title: "Profile",
		path: "/about-us/aim",
		icon: <AiIcons.AiFillHome />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,

		subNav: [
			{
				title: "Dashboard",
				path: "/about-us/aim",
				icon: <IoIcons.IoIosPaper />,
			},
			
		],
	},
	{
		title: "Events",
		path: "/about-us/aim",
		icon: <IoIcons.IoIosPaper />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,

		subNav: [
			{
				title: "Create Event",
				path: "/services/services1",
				icon: <IoIcons.IoIosPaper />,
				cName: "sub-nav",
			},
			{
				title: "Award RP",
				path: "/services/services2",
				icon: <IoIcons.IoIosPaper />,
				cName: "sub-nav",
			},
			{
				title: "View Events",
				path: "/services/services3",
				icon: <IoIcons.IoIosPaper />,
			},
		],
	},
	// {
	// 	title: "Contact",
	// 	path: "/contact",
	// 	icon: <FaIcons.FaPhone />,
	// },
	// {
	// 	title: "Events",
	// 	path: "/events",
	// 	icon: <FaIcons.FaEnvelopeOpenText />,

	// 	iconClosed: <RiIcons.RiArrowDownSFill />,
	// 	iconOpened: <RiIcons.RiArrowUpSFill />,

	// 	subNav: [
	// 		{
	// 			title: "Event 1",
	// 			path: "/events/events1",
	// 			icon: <IoIcons.IoIosPaper />,
	// 		},
	// 		{
	// 			title: "Event 2",
	// 			path: "/events/events2",
	// 			icon: <IoIcons.IoIosPaper />,
	// 		},
	// 	],
	// },
	// {
	// 	title: "Support",
	// 	path: "/support",
	// 	icon: <IoIcons.IoMdHelpCircle />,
	// },
];
