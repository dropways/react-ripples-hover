import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
import {
	IconLogin,
	IconArrowLeft,
	IconDropletFilled,
	IconChevronLeft,
} from "@tabler/icons-react";
import Link from "../../../lib/Components/Link";

const LinksBlock = () => {
	const codeString = `import Link from 'react-ripples-hover';

function TypesExample() {
	return (
		<>
			{/* Full Width Link */}

			<Link href="/" block>Ripples Hover</Link>
			<Link href="/" variant="primary" block>Ripples Hover</Link>
			<Link href="/" variant="secondary" block>Ripples Hover</Link>
			<Link href="/" variant="success" block>Ripples Hover</Link>
		</>
	);
}

export default TypesExample;`;
	return (
		<>
			<div className="demo-wrap style-4">
				<div className="demo-title">
					<h3 className="h3">
						Link Ripple <span style={{ color: "#ff5e00" }}>Full Width</span>
					</h3>
				</div>
				<div className="demo-preview">
					<div className="preview-box">
						<div className="preview-body">
							<div className="example-area">
								<div className="btn-list">
									<ul>
										<li>
											<Link href="/" icon={<IconLogin />} block>
												Ripples Hover
											</Link>
										</li>
										<li>
											<Link
												href="/"
												variant="primary"
												icon={<IconDropletFilled />}
												block>
												Ripples Hover
											</Link>
										</li>
										<li>
											<Link
												href="/"
												variant="secondary"
												icon={<IconArrowLeft />}
												block>
												Ripples Hover
											</Link>
										</li>
										<li>
											<Link
												href="/"
												variant="success"
												icon={<IconChevronLeft />}
												block>
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

export default LinksBlock;
