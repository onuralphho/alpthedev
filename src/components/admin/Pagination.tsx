import React, { useState } from "react";

interface PaginationProps {
	totalCount: number;
	itemsPerPage: number;
	goToPage: (pageNum: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalCount, itemsPerPage, goToPage }) => {
	const totalPages: number = Math.ceil(totalCount / itemsPerPage);
	const [currentPage, setCurrentPage] = useState<number>(1);

	const pageNumbers: JSX.Element[] = [];
	for (let i = 1; i <= totalPages; i++) {
		pageNumbers.push(
			<button
				className={`${currentPage === i && "bg-green-300"} p-1 px-2 rounded`}
				key={i}
				onClick={() => {
					goToPage(i);
					setCurrentPage(i);
				}}>
				{i}
			</button>
		);
	}

	return (
		<div className="flex gap-2">
			{/* Sayfa numaralarını burada gösteriyoruz */}
			{pageNumbers}
		</div>
	);
};

export default Pagination;
