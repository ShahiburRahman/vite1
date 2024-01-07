import React, { useState } from "react";
import { Button, Drawer, Flex, Layout } from "antd";
import {
	CloseOutlined,
	MenuFoldOutlined,
	MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Header } from "antd/es/layout/layout";
import { Link } from "react-router-dom";

const NavOptions = [
	{
		name: "Home",
		path: "/home",
		icon: "home",
	},
	{
		name: "About",
		path: "/about",
	},
	{
		name: "Contact",
		path: "/contact",
		icon: "phone",
	},
	{
		name: "Settings",
		path: "/settings",
	},
];

const NavBar: React.FC = () => {
	const [open, setOpen] = useState(false);
	const [selected, setSelected] = useState(0);

	const toggleCollapsed = () => {
		setOpen(!open);
	};

	const onClose = () => {
		setOpen(false);
	};

	const st = (index: number) => {
		return {
			backgroundColor: selected === index ? "white" : "transparent",// : "#ececec",
			padding: "12px",
			border: selected === index ? "1px solid #0000ff" : "none",
			borderRadius: selected=== index?"4px": 0,
			color: selected === index ? "#fff !important" : "#000",
		};
	};

	const DrawerHeader = () => (
		<div
			style={{
				margin: "-16px -4px",
				display: "flex",
				justifyContent: "space-between",
			}}
		>
			<p>Choose Your Option</p>
			{/* Close Icon to close the drawer */}
			<Button
				style={{
					marginTop: "12px",
					border: "none",
				}}
				onClick={onClose}
				/*button title is the tooltip*/
				title="Close"
			>
				<CloseOutlined />
			</Button>
		</div>
	);

	return (
		<>
			<Layout>
				<Header
					style={{
						position: "sticky",
						top: 0,
						zIndex: 1,
						width: "100%",
						display: "flex",
						alignItems: "center",
						backgroundColor: "#ececec",
						boxShadow: "0px 0px 5px #ccc",
					}}
				>
					<Button
						style={{
							border: "none",
							backgroundColor: "transparent",
						}}
						onClick={toggleCollapsed}
					>
						{!open ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
					</Button>
					<Flex
						style={{
							flex: 1,
							justifyContent: "center",
							alignItems: "center",
							padding: "0 16px",
							margin: "0 -16px",
						}}
					>
						<h2>{NavOptions[selected].name.toUpperCase()}</h2>
					</Flex>
				</Header>
			</Layout>
			<Drawer
				title={<DrawerHeader />}
				placement="left"
				closable={false}
				onClose={onClose}
				open={open}
				style={{
					height: "100%",
					maxWidth: "75vw",
					padding: 0,
				}}
				// add break point to make it open in wide screen
				maskClosable={true}
			>
				{NavOptions.map((option, index) => (
					<div
						key={index}
						style={st(index)}
						onClick={() => {
							setSelected(index);
							onClose();
						}}
					>
						<b>
							<Link to={`${option.path}`}>{option.name.toUpperCase()}</Link>
						</b>
					</div>
				))}
			</Drawer>
		</>
	);
};

export default NavBar;
