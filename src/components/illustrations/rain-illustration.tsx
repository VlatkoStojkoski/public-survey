import React from "react";

export type RainIllustrationProps = {} & React.SVGProps<SVGSVGElement>;

export function RainIllustration({ ...props }: RainIllustrationProps) {
	return (
		<svg version="1.1" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
			<title>rain-2</title>
			<defs />
			<g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
				<g fill="currentColor" transform="translate(-153.000000, -827.000000)">
					<path d="M175,849 L161,849 C161,849 154.962,848.381 155,843 C155.021,839.964 157.813,837.25 161,837 C161,832.858 163.651,829 168,829 C171.433,829 173.723,831.096 174.539,834.014 C179.493,833.798 182.844,837.718 183,841 C183.21,845.413 178.601,849 175,849 L175,849 Z M176.067,832.028 C174.599,829.053 171.543,827 168,827 C163.25,827 159.37,830.682 159.033,835.345 C155.542,836.34 153,839.39 153,843 C153,847.26 156.54,850.731 161,850.977 C161,850.977 174.831,851 175,851 C180.247,851 185,846.747 185,841.5 C185,836.445 181.048,832.323 176.067,832.028 L176.067,832.028 Z M178,854 C177.448,854 177,854.447 177,855 L177,858 C177,858.553 177.448,859 178,859 C178.552,859 179,858.553 179,858 L179,855 C179,854.447 178.552,854 178,854 L178,854 Z M172,854 C171.448,854 171,854.447 171,855 L171,858 C171,858.553 171.448,859 172,859 C172.552,859 173,858.553 173,858 L173,855 C173,854.447 172.552,854 172,854 L172,854 Z M160,854 C159.448,854 159,854.447 159,855 L159,858 C159,858.553 159.448,859 160,859 C160.552,859 161,858.553 161,858 L161,855 C161,854.447 160.552,854 160,854 L160,854 Z M166,854 C165.448,854 165,854.447 165,855 L165,858 C165,858.553 165.448,859 166,859 C166.552,859 167,858.553 167,858 L167,855 C167,854.447 166.552,854 166,854 L166,854 Z" />
				</g>
			</g>
		</svg>
	);
}