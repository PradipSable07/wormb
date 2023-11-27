import React from "react";
import Sidebar from "./components/Sidebar";
import { Outlet, useParams } from "react-router-dom";

import SearchBox from "./components/SearchBox";
import { toast } from "react-toastify";

const HomePage = () => {
	toast.success("Success Notification !", {
		position: toast.POSITION.TOP_RIGHT,
	});

	return (
		<section className='bg-[#FFF] w-screen  h-screen  flex overflow-hidden'>
			<Sidebar />
			<div className=' flex  w-[80vw] h-full flex-wrap  items-center justify-center  grow'>
				<Outlet />
			</div>
		</section>
	);
};

export default HomePage;
