import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
import {
	IconLogin,
	IconArrowLeft,
	IconDropletFilled,
	IconArrowRight,
	IconChevronLeft,
	IconChevronRight,
	IconPhoneCall,
	IconHeart,
} from "@tabler/icons-react";
import Link from "../../../lib/Components/Link";

const LinksStyle = () => {
	const codeString = `import Link from 'react-ripples-hover';

function TypesExample() {
	return (
		<>
			{/* Flate Style Link */}

			<Link href="/" flate>Ripples Hover</Link>
			<Link href="/" variant="primary" flate>Ripples Hover</Link>
			<Link href="/" variant="secondary" flate>Ripples Hover</Link>
			<Link href="/" variant="success" flate>Ripples Hover</Link>

			{/* Rounded Style Link */}

			<Link href="/" variant="danger" rounded>Ripples Hover</Link>
			<Link href="/" variant="warning" rounded>Ripples Hover</Link>
			<Link href="/" variant="info" rounded>Ripples Hover</Link>
			<Link href="/" variant="light" rounded>Ripples Hover</Link>
		</>
	);
}

export default TypesExample;`;
	return (
		<>
			<div className="demo-wrap style-3">
				<div className="demo-title">
					<h3 className="h3">
						Link Diffrent <span style={{ color: "#E2282E" }}>Style</span>
					</h3>
				</div>
				<div className="demo-preview">
					<div className="preview-box">
						<div className="preview-body">
							<div className="example-area">
								<div className="btn-list">
									<ul>
										<li>
											<Link href="/" icon={<IconLogin />} flate>
												Ripples Hover
											</Link>
										</li>
										<li>
											<Link
												href="/"
												variant="primary"
												icon={<IconDropletFilled />}
												flate>
												Ripples Hover
											</Link>
										</li>
										<li>
											<Link
												href="/"
												variant="secondary"
												icon={<IconArrowLeft />}
												flate>
												Ripples Hover
											</Link>
										</li>
										<li>
											<Link
												href="/"
												variant="success"
												icon={<IconChevronLeft />}
												flate>
												Ripples Hover
											</Link>
										</li>
										<li>
											<Link
												href="/"
												variant="danger"
												icon={<IconArrowRight />}
												iconPosition="end"
												rounded>
												Ripples Hover
											</Link>
										</li>
										<li>
											<Link
												href="/"
												variant="warning"
												icon={<IconChevronRight />}
												iconPosition="end"
												rounded>
												Ripples Hover
											</Link>
										</li>
										<li>
											<Link
												href="/"
												variant="info"
												icon={<IconPhoneCall />}
												iconPosition="end"
												rounded>
												Ripples Hover
											</Link>
										</li>
										<li>
											<Link
												href="/"
												variant="light"
												icon={<IconHeart />}
												iconPosition="end"
												rounded>
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

export default LinksStyle;
