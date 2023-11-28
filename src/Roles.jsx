import React from "react";
import { rolesPeople } from "./data";
import ReactangleTop from "./components/ReactangleTop";
import SearchBox from "./components/SearchBox";

const Roles = () => {
	sessionStorage.setItem("title", "Role");

	return (
		<>
			<ReactangleTop PageTitle='Role' />
			<SearchBox />

			<div className='  border  rounded-t-lg mt-8 mx-auto w-[80vw]'>
				<div className=' p-4 px-7 flex justify-around  border-b border-[#0a2f557d]    '>
					<p className='font-medium text-sm text-black w-1/3 text-center flex gap-4  justify-center items-center'>
						<img src='/images/group-1000003529.svg' alt='adminUpDown' />
						Full Name{" "}
					</p>
					<p className='font-medium text-sm text-black w-1/3 text-center flex gap-4  justify-center items-center'>
						<img src='/images/group-1000003529.svg' alt='adminUpDown' />
						Email
					</p>
					<p className='font-medium text-sm text-black w-1/3 text-center flex gap-4  justify-center items-center'>
						<img src='/images/group-1000003529.svg' alt='adminUpDown' />
						Actions
					</p>
				</div>
				<div className=' h-80 overflow-y-scroll '>
					{rolesPeople.map((rolePerson) => {
						const { id, name, users } = rolePerson;
						return (
							<div
								key={id}
								className='grow border flex justify-around py-2 px-4'>
								<p className='font-medium text-sm text-black text-center  w-[33%] '>
									{name}
								</p>
								<p className='font-medium text-sm text-black w-[33%] text-center  '>
									{users}
								</p>
								<div className='font-medium text-sm text-black w-[33%] flex gap-2 justify-center  items-center'>
									<button className='btn btn-primary text-white btn-sm'>
										View
									</button>
									<button className='btn bg-red-400 text-white border-none active:text-white btn-sm'>
										Edit
									</button>
									<button className='text-red-400 border-none bg-white btn btn-sm'>
										<img src='/images/DeleteSvg.svg' alt='Delete Icon' />
									</button>
								</div>
							</div>
						);
					})}{" "}
				</div>
			</div>
		</>
	);
};

export default Roles;
