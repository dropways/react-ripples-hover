import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
import Link from "../../../lib/Components/Link";

const LinksRippleColor = () => {
	const codeString = `import Link from 'react-ripples-hover';

function TypesExample() {
	return (
		<>
			<Link href="/" rippleColor="#FCE4EC">Ripples Hover</Link>
			<Link href="/" rippleColor="#D3D7EE">Ripples Hover</Link>
			<Link href="/" rippleColor="#F3E5F5">Ripples Hover</Link>
			<Link href="/" rippleColor="#C5E7E5">Ripples Hover</Link>
			<Link href="/" rippleColor="#B8E0BB">Ripples Hover</Link>
			<Link href="/" rippleColor="#FFF1C2">Ripples Hover</Link>
			<Link href="/" rippleColor="#FAC6E3">Ripples Hover</Link>
			<Link href="/" rippleColor="#EEEEEE">Ripples Hover</Link>
		</>
	);
}

export default TypesExample;`;
	return (
		<>
			<div className="demo-wrap style-1">
				<div className="demo-title">
					<h3 className="h3">
						Link Ripple{" "}
						<span style={{ color: "#f57c00" }}>Background Color</span>
					</h3>
				</div>
				<div className="demo-preview">
					<div className="preview-box">
						<div className="preview-body">
							<div className="example-area">
								<div className="btn-list">
									<ul>
										<li>
											<Link href="/" rippleColor="#FCE4EC">
												Ripples Hover
											</Link>
										</li>
										<li>
											<Link href="/" rippleColor="#D3D7EE">
												Ripples Hover
											</Link>
										</li>
										<li>
											<Link href="/" rippleColor="#F3E5F5">
												Ripples Hover
											</Link>
										</li>
										<li>
											<Link href="/" rippleColor="#C5E7E5">
												Ripples Hover
											</Link>
										</li>
										<li>
											<Link href="/" rippleColor="#B8E0BB">
												Ripples Hover
											</Link>
										</li>
										<li>
											<Link href="/" rippleColor="#FFF1C2">
												Ripples Hover
											</Link>
										</li>
										<li>
											<Link href="/" rippleColor="#FAC6E3">
												Ripples Hover
											</Link>
										</li>
										<li>
											<Link href="/" rippleColor="#EEEEEE">
												Ripples Hover
											</Link>
										</li>
									</ul>
								</div>
							</div>
							<div className="code-area">
								<SyntaxHighlighter language="jsx" style={nightOwl}>
									{codeString}
								</SyntaxHighlighter>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default LinksRippleColor;
