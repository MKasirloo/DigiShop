import './Container.css'

export default function Container({ children }) {
	return(
			<div className="container mt-5">
					{children}
			</div>
	);
}