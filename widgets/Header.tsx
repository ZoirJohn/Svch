import { Link } from "react-router";

export default function Header() {
	return (
		<header className="mt-3 px-3">
			<div className="container component">
				<Link to={"/"}>
					<img
						src="shared/icons/logo-light.svg"
						alt="Logo"
						loading="eager"
					/>
				</Link>
				<div>
					<Link
						to={"/auth/sign-up"}
						className="nav-button group"
					>
						Find a spouse
						<svg
							fill="#fff"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							stroke="#fff"
							className="absolute w-8 top-1/2 -translate-1/2 left-5/4 group-hover:left-13/15 transition-all"
						>
							<g
								id="SVGRepo_bgCarrier"
								strokeWidth="0"
							></g>
							<g
								id="SVGRepo_tracerCarrier"
								strokeLinecap="round"
								strokeLinejoin="round"
							></g>
							<g id="SVGRepo_iconCarrier">
								<path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
							</g>
						</svg>
					</Link>
				</div>
			</div>
		</header>
	);
}
