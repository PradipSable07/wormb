import React from "react";

const TableRow = (props) => {
	const { id, full_name, icon, email, contact_no, role } = props;
	return (
		<>
			<div
				key={id}
				className='tableRow flex items-center justify-around rounded-t-lg py-4 px-7 w-[1200px] pl-7 border-b'>
				<div className=' flex items-center gap-4 w-[12%] '>
					<img className='rounded-full  border w-8 ' src={`${icon}`} alt='' />
					<p className=' font-medium text-sm text-black'>{full_name}</p>
				</div>
				<div className='gap-4 flex w-[16%]'>
					<p className=' font-medium text-sm text-black'> {email}</p>
				</div>
				<div className={` w-[12%] `}>
					<p className=' font-medium text-sm mx-auto text-black'>
						{contact_no}
					</p>
				</div>
				<p className='font-medium text-sm   text-black w-[12%]'>{role}</p>
				<button className='btn btn-natural btn-sm  font-medium text-sm text-[yellow] w-[12%]'>
					Active
				</button>

				<div className='font-medium text-sm text-black w-[16%] flex gap-3 justify-center items-center'>
					<button className='btn btn-primary text-white btn-sm'>View</button>
					<button className='btn bg-red-400 text-white btn-sm border-none'>
						Edit
					</button>
					<button className=''>
						<img src='/images/DeleteSvg.svg' alt='' />
					</button>
				</div>
			</div>
		</>
	);
};

export default TableRow;
