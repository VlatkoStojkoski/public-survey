import React from "react";

export type CleanIllustrationProps = {} & React.SVGProps<SVGSVGElement>;

export function CleanIllustration({ ...props }: CleanIllustrationProps) {
	return (
		<svg version="1.1" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" {...props}>
			<path className="linesandangles_een" fill="currentColor" d="M21,10V8.236l1-2V3H10v3.721l2.735,0.912l-0.684,2.051l1.897,0.633l0.684-2.052L15,8.387V10&#xD;&#xA;&#x9;c0,0-1,5-2,6c-1,1-3,3-3,7c0,2,0,6,0,6h13c0,0,0-4,0-8C23,17,21,10,21,10z M12,5h8v0.764L19.382,7h-2.221L12,5.279V5z M17,9h2v1h-2&#xD;&#xA;&#x9;V9z M21,27h-9v-4c0-3.171,1.511-4.683,2.414-5.586c0.943-0.943,1.679-3.231,2.197-5.414h2.854C20.026,14.192,21,18.37,21,21V27z" />
		</svg>
	);
}