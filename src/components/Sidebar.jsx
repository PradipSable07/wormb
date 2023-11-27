import React from "react";
import { sidebarList } from "../data";
import { Link } from "react-router-dom";
import profileIcon from "../../public/images/sidebar-icon.svg";
const Sidebar = () => {
	return (
		<div className='sidebar  w-[16%] h-screen flex justify-center items-center flex-col bg-[#0A3055] '>
			<div className='text-center w-full -mt-72'>
				<h3 className='text-[2.54169rem] font-bold text-red-400'>Womb</h3>
				<div className='text-center w-16 m-auto flex justify-center items-end pt-2 '>
					<img src={profileIcon} alt='sidebar-svg' />
				</div>
				<h3 className=' text-xs font-semibold font-poppins mt-3 text-white '>
					Alexandra Robert
				</h3>
				<p className=' text-[0.625rem] font-poppins mt-1 text-white opacity-[0.9]'>
					alexandrarobert@gmail.com{" "}
				</p>
				<div className='w-full h-[1px] mt-5 bg-[#FFEEDD] opacity-[0.5]'></div>
			</div>
			<div className='flex flex-col justify-center items-start mt-6 gap-8 '>
				{sidebarList.map((list) => {
					const { id, icon, name, link, fun } = list;
					return (
						<button
							key={id}
							className='btn btn-ghost grow text-white px-3 text-[1.125rem] text font-medium font-lato hover:bg-[#F66] active:bg-[#F66] hover:text-white flex '
							onClick={() => {
								fun();
							}}>
							<img className='w-6 ' src={icon} alt={name} />
							<Link to={link}>
								{" "}
								<p className='text-md'>{name}</p>{" "}
							</Link>
						</button>
					);
				})}
			</div>
		</div>
	);
};

export default Sidebar;
