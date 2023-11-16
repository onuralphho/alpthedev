"use client";
import React, { ChangeEvent, ChangeEventHandler, useEffect, useRef } from "react";
import { MdSearch } from "react-icons/md";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

type Props = {};

export default function BlogSearchInput({}: Props) {
	const inputRef = useRef<HTMLInputElement | null>(null);
	const router = useRouter();
	const searchParams = useSearchParams();
    const searchQuery = searchParams.get("search");
    
	const keyDownHandler = (event: KeyboardEvent) => {
		if (event.key === "/") {
			event.preventDefault();
			if (inputRef.current) {
				inputRef.current.focus();
			}
		}
	};

	useEffect(() => {
		window.addEventListener("keydown", keyDownHandler);

		return () => {
			window.removeEventListener("keydown", keyDownHandler);
		};
	}, []);

	const searchInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
		router.push(`?search=${event.target.value}`);
        
	};

	return (
		<label className="focus-within:border-purple-500 relative flex items-center gap-1 border rounded-lg text-xs lg:text-lg">
			<MdSearch className="w-8 h-8 ml-2 cursor-pointer text-gray-400" />
			<input
				ref={inputRef}
				className="p-2 px-1 peer z-10 bg-transparent outline-none"
				placeholder=" "
				type="text"
				onChange={searchInputHandler}
			/>

			<span className="peer-placeholder-shown:opacity-100 opacity-0 absolute left-12 top-1/2 transform -translate-y-1/2 text-gray-400">
				Type <span className="border border-gray-400 px-1.5 rounded ">/</span> for search
			</span>
		</label>
	);
}
