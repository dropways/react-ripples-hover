# React Ripples Hover
React ripple effect on hover and click component. Customizable, lightweight Google's Material UI style ripple effect

## Installation
```
npm install react-ripples-hover
```
or
```
yarn add react-ripples-hover
```

## Usage
```jsx
import React from 'react';
import Link from 'react-ripples-hover';

function TypesExample() {
  return (
    <>
      <Link href="/" label="Ripples Hover"></Link>
    </>
  );
}

export default TypesExample;
```
### Component props
<table style="width: 100%;">
	<thead>
		<tr>
			<th>Props</th>
			<th>Description</th>
			<th className="text-center">Type</th>
			<th className="text-center" width="150">
				Default
			</th>
			<th className="text-center">Optional</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
				<code>variant</code>
			</td>
			<td>
				<p>One or more button variant combinations</p>
				<p>
					buttons may be one of a variety of visual variants
					such as:
				</p>
				<p>
					'<code>primary</code>', '<code>secondary</code>', '
					<code>success</code>', '<code>danger</code>', '
					<code>warning</code>', '<code>info</code>', '
					<code>light</code>'
				</p>
			</td>
			<td className="text-center">string</td>
			<td className="text-center">Null</td>
			<td className="text-center">
				✅
			</td>
		</tr>
		<tr>
			<td>
				<code>href</code>
			</td>
			<td>
				Providing a <code>href</code> will render an{" "}
				<code>&lt;a&gt;</code> element, styled as a link.
			</td>
			<td className="text-center">string</td>
			<td className="text-center">Null</td>
			<td className="text-center">
				✅
			</td>
		</tr>
		<tr>
			<td>
				<code>as</code>
			</td>
			<td>
				To render the button tag <code>as="button"</code> use
				the as prop.
			</td>
			<td className="text-center">string</td>
			<td className="text-center">
				<code>&lt;a&gt;</code>
			</td>
			<td className="text-center">
				✅
			</td>
		</tr>
		<tr>
			<td>
				<code>label</code>
			</td>
			<td>Add label for link text</td>
			<td className="text-center">string</td>
			<td className="text-center">Null</td>
			<td className="text-center">
				❌
			</td>
		</tr>
		<tr>
			<td>
				<code>rippleColor</code>
			</td>
			<td>Color of the ripple effect</td>
			<td className="text-center">string</td>
			<td className="text-center">rgba(0, 0, 0, .1)</td>
			<td className="text-center">
				✅
			</td>
		</tr>
		<tr>
			<td>
				<code>duration</code>
			</td>
			<td>
				Duration of the ripple effect, measured in seconds
			</td>
			<td className="text-center">number</td>
			<td className="text-center">.5</td>
			<td className="text-center">
				✅
			</td>
		</tr>
		<tr>
			<td>
				<code>rippleOnClick</code>
			</td>
			<td>
				If you do not want ripple on hover, simply pass
				rippleOnClick to get a ripple on click.
			</td>
			<td className="text-center">boolean</td>
			<td className="text-center">false</td>
			<td className="text-center">
				✅
			</td>
		</tr>
		<tr>
			<td>
				<code>icon</code>
			</td>
			<td>Icon of the link</td>
			<td className="text-center">ReactNode</td>
			<td className="text-center">Null</td>
			<td className="text-center">
				✅
			</td>
		</tr>
		<tr>
			<td>
				<code>iconPosition</code>
			</td>
			<td>
				Icon position before text is default <code>start</code>{" "}
				and after text position change position to{" "}
				<code>end</code>
			</td>
			<td className="text-center">string</td>
			<td className="text-center">start</td>
			<td className="text-center">
				✅
			</td>
		</tr>
		<tr>
			<td>
				<code>rounded</code>
			</td>
			<td>For link rounded corner</td>
			<td className="text-center">boolean</td>
			<td className="text-center">false</td>
			<td className="text-center">
				✅
			</td>
		</tr>
		<tr>
			<td>
				<code>flate</code>
			</td>
			<td>For link square corner</td>
			<td className="text-center">boolean</td>
			<td className="text-center">false</td>
			<td className="text-center">
				✅
			</td>
		</tr>
		<tr>
			<td>
				<code>block</code>
			</td>
			<td>For link full width</td>
			<td className="text-center">boolean</td>
			<td className="text-center">false</td>
			<td className="text-center">
				✅
			</td>
		</tr>
		<tr>
			<td>
				<code>disabled</code>
			</td>
			<td>
				You will get a disabled class in link or button for link
				or button disable.
			</td>
			<td className="text-center">boolean</td>
			<td className="text-center">false</td>
			<td className="text-center">
				✅
			</td>
		</tr>
		<tr>
			<td>
				<code>active</code>
			</td>
			<td>
				You will get a active class in link or button for link
				or button active.
			</td>
			<td className="text-center">boolean</td>
			<td className="text-center">false</td>
			<td className="text-center">
				✅
			</td>
		</tr>
		<tr>
			<td>
				<code>className</code>
			</td>
			<td>You will get a custom class on link or button.</td>
			<td className="text-center">string</td>
			<td className="text-center">Null</td>
			<td className="text-center">
				✅
			</td>
		</tr>
		<tr>
			<td>
				<code>children</code>
			</td>
			<td>The children of the component</td>
			<td className="text-center">ReactNode</td>
			<td className="text-center"></td>
			<td className="text-center">
				✅
			</td>
		</tr>
	</tbody>
</table>