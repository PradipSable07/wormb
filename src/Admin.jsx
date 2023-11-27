import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { adminPeople } from "./data";
import TableRow from "./components/TableRow";
import ReactangleTop from "./components/ReactangleTop";
import SearchBox from "./components/SearchBox";
const Admin = () => {
	return (
		<>
			<ReactangleTop PageTitle='Admin' />
			<SearchBox />

			<div className='   border  rounded-t-lg mt-8  '>
				<div className=' p-4 px-7 flex justify-around  border-b border-[#0a2f557d]   '>
					<p className='font-medium text-sm text-black w-[12%]  flex gap-4'>
						<img
							src='../public/images/group-1000003529.svg'
							alt='adminUpDown'
						/>
						Full Name{" "}
					</p>
					<p className='font-medium text-sm text-black w-[16%] flex gap-4'>
						<img
							src='../public/images/group-1000003529.svg'
							alt='adminUpDown'
						/>
						Email
					</p>
					<p className='font-medium text-sm text-black w-[12%] flex gap-4'>
						<img
							src='../public/images/group-1000003529.svg'
							alt='adminUpDown'
						/>
						Contact No
					</p>
					<p className='font-medium text-sm text-black w-[12%] flex gap-4 text-center '>
						<img
							src='../public/images/group-1000003529.svg'
							alt='adminUpDown'
						/>
						Role
					</p>
					<p className='font-medium text-sm text-black w-[12%] flex gap-4'>
						<img
							src='../public/images/group-1000003529.svg'
							alt='adminUpDown'
						/>
						Status
					</p>
					<p className='font-medium text-sm text-black w-[16%] flex gap-4'>
						<img
							src='../public/images/group-1000003529.svg'
							alt='adminUpDown'
						/>
						Action
					</p>
				</div>
				<div className=' h-80 overflow-y-scroll '>
					{adminPeople.map((adminPerson) => {
						const { id, full_name, icon, email, contact_no, role } =
							adminPerson;
						return <TableRow {...adminPerson}></TableRow>;
					})}
				</div>
			</div>
		</>
	);
};

export default Admin;
