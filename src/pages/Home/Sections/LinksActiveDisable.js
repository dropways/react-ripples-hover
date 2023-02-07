import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
import { IconDropletFilled } from "@tabler/icons-react";
import Link from "../../../lib/Components/Link";

const LinksActiveDisable = () => {
	const codeString = `import Link from 'react-ripples-hover';

function TypesExample() {
	return (
		<>
			<Link href="/" variant="primary" disabled>Ripples Hover</Link>
		</>
	);
}

export default TypesExample;`;
	const codeString2 = `import Link from 'react-ripples-hover';

function TypesExample() {
	return (
		<>
			<Link href="/" variant="primary" active>Ripples Hover</Link>
		</>
	);
}

export default TypesExample;`;
	return (
		<>
			<div className="demo-wrap style-5">
				<div className="demo-title">
					<h3 className="h3">
						Link <span style={{ color: "#98ab00" }}>Disabled</span>
					</h3>
				</div>
				<div className="demo-preview">
					<div className="preview-box">
						<div className="preview-body">
							<div className="example-area">
								<div className="btn-list">
									<ul>
										<li className="full-width">
											<Link
												href="/"
												variant="primary"
												disabled
												icon={<IconDropletFilled />}>
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
			<div className="demo-wrap style-5">
				<div className="demo-title">
					<div>
						<h3 className="h3">
							Link <span style={{ color: "#98ab00" }}>Active</span>
						</h3>
						<p>
							If you include active props in the link, you will get an active
							class.
						</p>
					</div>
				</div>
				<div className="demo-preview">
					<div className="preview-box">
						<div className="preview-body">
							<div className="example-area">
								<div className="btn-list">
									<ul>
										<li className="full-width">
											<Link
												href="/"
												variant="primary"
												active
												icon={<IconDropletFilled />}>
												Ripples Hover
											</Link>
										</li>
									</ul>
								</div>
							</div>
							<div className="code-area">
								<SyntaxHighlighter language="jsx" style={nightOwl}>
									{codeString2}
								</SyntaxHighlighter>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default LinksActiveDisable;
