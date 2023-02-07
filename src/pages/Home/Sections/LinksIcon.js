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
	IconMail,
} from "@tabler/icons-react";
import Link from "../../../lib/Components/Link";

const LinksIcon = () => {
	const codeString = `import Link from 'react-ripples-hover';
import {IconLogin, IconArrowLeft, IconDropletFilled, IconArrowRight} from '@tabler/icons-react';

function TypesExample() {
	return (
		<>
			{/* Icon Position Default */}

			<Link href="/" icon={<IconLogin />}>Ripples Hover</Link>
			<Link href="/" variant="primary" icon={<IconDropletFilled />}>Ripples Hover</Link>
			<Link href="/" variant="secondary" icon={<IconArrowLeft />}>Ripples Hover</Link>
			<Link href="/" variant="success" icon={<IconChevronLeft />}>Ripples Hover</Link>

			{/* Icon Position After Text */}

			<Link href="/" variant="danger" icon={<IconArrowRight />} iconPosition="end">Ripples Hover</Link>
			<Link href="/" variant="warning" icon={<IconChevronRight />} iconPosition="end">Ripples Hover</Link>
			<Link href="tel:+1202-918-2132" variant="info" icon={<IconPhoneCall />} iconPosition="end">Ripples Hover</Link>
			<Link href="mailto:your@example.com" variant="light" icon={<IconMail />} iconPosition="end">Ripples Hover</Link>
		</>
	);
}

export default TypesExample;`;
	return (
		<>
			<div className="demo-wrap style-2">
				<div className="demo-title">
					<h3 className="h3">
						Link With{" "}
						<span style={{ color: "#2B8C3A" }}>Icon And Icon Position</span>
					</h3>
				</div>
				<div className="demo-preview">
					<div className="preview-box">
						<div className="preview-body">
							<div className="example-area">
								<div className="btn-list">
									<ul>
										<li>
											<Link href="/" icon={<IconLogin />}>
												Ripples Hover
											</Link>
										</li>
										<li>
											<Link
												href="/"
												variant="primary"
												icon={<IconDropletFilled />}>
												Ripples Hover
											</Link>
										</li>
										<li>
											<Link
												href="/"
												variant="secondary"
												icon={<IconArrowLeft />}>
												Ripples Hover
											</Link>
										</li>
										<li>
											<Link
												href="/"
												variant="success"
												icon={<IconChevronLeft />}>
												Ripples Hover
											</Link>
										</li>
										<li>
											<Link
												href="/"
												variant="danger"
												icon={<IconArrowRight />}
												iconPosition="end">
												Ripples Hover
											</Link>
										</li>
										<li>
											<Link
												href="/"
												variant="warning"
												icon={<IconChevronRight />}
												iconPosition="end">
												Ripples Hover
											</Link>
										</li>
										<li>
											<Link
												href="tel:+1202-918-2132"
												variant="info"
												icon={<IconPhoneCall />}
												iconPosition="end">
												Ripples Hover
											</Link>
										</li>
										<li>
											<Link
												href="mailto:your@example.com"
												variant="light"
												icon={<IconMail />}
												iconPosition="end">
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

export default LinksIcon;
