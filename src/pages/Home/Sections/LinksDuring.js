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

const LinksDuring = () => {
	const codeString = `import Link from 'react-ripples-hover';

function TypesExample() {
	return (
		<>
			<Link href="/" duration={0.3}>Ripples Hover</Link>
			<Link href="/" variant="primary" duration={0.7}>Ripples Hover</Link>
			<Link href="/" variant="secondary" duration={1.1}>Ripples Hover</Link>
			<Link href="/" variant="success" duration={1.5}>Ripples Hover</Link>
			<Link href="/" variant="danger" duration={1.9}>Ripples Hover</Link>
			<Link href="/" variant="warning" duration={2.3}>Ripples Hover</Link>
			<Link href="/" variant="info" duration={2.7}>Ripples Hover</Link>
			<Link href="/" variant="light" duration={3}>Ripples Hover</Link>
		</>
	);
}

export default TypesExample;`;
	return (
		<>
			<div className="demo-wrap style-6">
				<div className="demo-title">
					<h3 className="h3">
						Link Ripple <span style={{ color: "#BC4E99" }}>Duration</span>
					</h3>
				</div>
				<div className="demo-preview">
					<div className="preview-box">
						<div className="preview-body">
							<div className="example-area">
								<div className="btn-list">
									<ul>
										<li>
											<Link
												href="/"
												icon={<IconLogin />}
												duration={0.3}
												rounded>
												Ripples Hover
											</Link>
										</li>
										<li>
											<Link
												href="/"
												variant="primary"
												icon={<IconDropletFilled />}
												duration={0.7}
												rounded>
												Ripples Hover
											</Link>
										</li>
										<li>
											<Link
												href="/"
												variant="secondary"
												icon={<IconArrowLeft />}
												duration={1.1}
												rounded>
												Ripples Hover
											</Link>
										</li>
										<li>
											<Link
												href="/"
												variant="success"
												icon={<IconChevronLeft />}
												duration={1.5}
												rounded>
												Ripples Hover
											</Link>
										</li>
										<li>
											<Link
												href="/"
												variant="danger"
												icon={<IconArrowRight />}
												duration={1.9}
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
												duration={2.3}
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
												duration={2.7}
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
												duration={3}
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

export default LinksDuring;
