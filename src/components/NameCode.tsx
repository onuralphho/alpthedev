const NameCode = () => {
	return (
		<div className="flex w-full col-span-2 lg:col-span-3 rounded-lg hover:z-50 border border-transparent transition-all flex-col max-md:flex-col-reverse  gap-20 ">
			<div className="rounded-lg shadow-md  relative">
				
				<code className="text-white flex flex-col text-start lg:text-lg typewriter">
					<h1 className="max-w-fit ">
						<span className="text-blue-600">
							{"<h1 "}
							<span className="text-orange-500">
								id<span className="text-red-500">=</span>
								<span className="text-orange-300">{"'name'"}</span>
							</span>
							{">"}
						</span>
						<br />
					</h1>
					<h1 className="max-w-fit pl-5">
						<span>Onuralp Hacıhamzaoğlu</span>
						<br />
					</h1>
					<h1 className="max-w-fit">
						<span className="text-blue-600">{" </h1>"}</span>
					</h1>
				</code>
			</div>
		</div>
	);
};

export default NameCode;
