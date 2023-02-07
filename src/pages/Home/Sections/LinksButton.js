import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
import Link from "../../../lib/Components/Link";

const LinksButton = () => {
	const codeString = `import Link from 'react-ripples-hover';

function TypesExample() {
	return (
		<>
			<Link as="button" label="Ripples Hover" />
			<Link as="button" label="Ripples Hover" variant="primary" />
			<Link as="button" label="Ripples Hover" variant="secondary" />
			<Link as="button" label="Ripples Hover" variant="success" />
			<Link as="button" label="Ripples Hover" variant="warning" />
			<Link as="button" label="Ripples Hover" variant="danger" />
			<Link as="button" label="Ripples Hover" variant="info" />
			<Link as="button" label="Ripples Hover" variant="light" />
		</>
	);
}

export default TypesExample;`;
	return (
		<>
			<div className="demo-wrap style-7">
				<div className="demo-title">
					<h3 className="h3">
						Ripple Links <span style={{ color: "#0487a1" }}>As a Button</span>
					</h3>
				</div>
				<div className="demo-preview">
					<div className="preview-box">
						<div className="preview-body">
							<div className="example-area">
								<div className="btn-list">
									<ul>
										<li>
											<Link as="button" label="Ripples Hover" />
										</li>
										<li>
											<Link
												as="button"
												label="Ripples Hover"
												variant="primary"
											/>
										</li>
										<li>
											<Link
												as="button"
												label="Ripples Hover"
												variant="secondary"
											/>
										</li>
										<li>
											<Link
												as="button"
												label="Ripples Hover"
												variant="success"
											/>
										</li>
										<li>
											<Link
												as="button"
												label="Ripples Hover"
												variant="danger"
											/>
										</li>
										<li>
											<Link
												as="button"
												label="Ripples Hover"
												variant="warning"
											/>
										</li>
										<li>
											<Link as="button" label="Ripples Hover" variant="info" />
										</li>
										<li>
											<Link as="button" label="Ripples Hover" variant="light" />
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

export default LinksButton;
