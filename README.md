## Description

Provides the ability to easily add a custom Add To Home Screen button with minimal markup for your Gatsby Progressive Web Application.

### Dependencies

_gatsby-plugin-manifest_\
_gatsby-plugin-offline_

## How to install

> `npm i gatsby-plugin-a2hs`

## Usage

```js
// In your gatsby-config.js
plugins['gatsby-plugin-a2hs']
```

## Optional Properties

> **suspend**\
> _How many days to suspend presentation following install dismissal. (default: 2)_

> **acceptedUri**\
> _Page to redirect if install is accepted._

> **dismmissedUri**\
> _Page to redirect if install is dismissed._

## Examples of usage

```js
import AddToHomeScreen from 'gatsby-plugin-a2hs'

export default (props) => {
	return (
		<div>
			<AddToHomeScreen suspend='2' acceptedUri='/' dismmissedUri='/'>
				Install Our App
			</AddToHomeScreen>
		</div>
	)
}
```

## How to contribute

If this plugin was useful to you, 🍕 pizza & ☕ coffee donations are welcome.

![XRP QR Code](https://drive.google.com/thumbnail?id=1LSo_RQvLTgh3F3YNioQlmJNanTSLx7Wp&sz=w200-h200)
