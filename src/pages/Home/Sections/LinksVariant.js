import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
import Link from "../../../lib/Components/Link";

const LinksVariant = () => {
	const codeString = `import Link from 'react-ripples-hover';

function TypesExample() {
	return (
		<>
			<Link href="/" label="Ripples Hover" />
			<Link href="/" label="Ripples Hover" variant="primary" />
			<Link href="/" label="Ripples Hover" variant="secondary" />
			<Link href="/" label="Ripples Hover" variant="success" />
			<Link href="/" label="Ripples Hover" variant="warning" />
			<Link href="/" label="Ripples Hover" variant="danger" />
			<Link href="/" label="Ripples Hover" variant="info" />
			<Link href="/" label="Ripples Hover" variant="light" />
		</>
	);
}

export default TypesExample;`;
	return (
		<>
			<div className="demo-wrap">
				<div className="demo-title">
					<h3 className="h3">
						Ripple Links <span style={{ color: "#44198A" }}>Variant</span>
					</h3>
				</div>
				<div className="demo-preview">
					<div className="preview-box">
						<div className="preview-body">
							<div className="example-area">
								<div className="btn-list">
									<ul>
										<li>
											<Link href="/" label="Ripples Hover" />
										</li>
										<li>
											<Link href="/" label="Ripples Hover" variant="primary" />
										</li>
										<li>
											<Link
												href="/"
												label="Ripples Hover"
												variant="secondary"
											/>
										</li>
										<li>
											<Link href="/" label="Ripples Hover" variant="success" />
										</li>
										<li>
											<Link href="/" label="Ripples Hover" variant="danger" />
										</li>
										<li>
											<Link href="/" label="Ripples Hover" variant="warning" />
										</li>
										<li>
											<Link href="/" label="Ripples Hover" variant="info" />
										</li>
										<li>
											<Link href="/" label="Ripples Hover" variant="light" />
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

export default LinksVariant;
