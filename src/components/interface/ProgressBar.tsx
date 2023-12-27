"use client";

import React, { useEffect, useState } from "react";

const ProgressBar = () => {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setProgress((prev) => (prev + 10));
		}, 300);
		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<div className="loadingContainer">
			<div className="loadingBar" style={{ width: `${progress}%` }}></div>
		</div>
	);
};

export default ProgressBar;
