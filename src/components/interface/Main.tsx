"use client";

import { ReactNode } from "react";
import AlertBox from "../AlertBox";
import { useAlertContext } from "@/providers/AlertProvider";

type Props = {
	children: ReactNode;
};

function Main({ children }: Props) {
	const alertCtx = useAlertContext();
	return (
		<div className="bg-[#00000033]">
			<AlertBox
				message={alertCtx?.alert.type}
				isShown={alertCtx?.alert.shown}
				closeBox={alertCtx?.setAlert}
			/>
			{children}
		</div>
	);
}

export default Main;
