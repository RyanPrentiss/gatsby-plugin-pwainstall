import React, { useState, useEffect } from 'react'
import { navigate } from 'gatsby'
import moment from 'moment'

const provideButton = (_) => {
	const dismissed = localStorage.getItem('a2hs_dismissal')
	return !dismissed || dismissed < moment() ? true : false
}

export default (props) => {
	const { suspend, acceptedUri, dismissedUri, children, ...other } = props

	const [showButton, setShowButton] = useState(provideButton)
	const [prompt, setPrompt] = useState()

	useEffect(() => {
		const handle_storePrompt = (e) => {
			e.preventDefault()
			if (showButton) setPrompt(e)
		}

		window.addEventListener('beforeinstallprompt', (e) =>
			handle_storePrompt(e)
		)

		return (_) => {
			window.removeEventListener('beforeinstallprompt', (e) =>
				handle_storePrompt(e)
			)
		}
	}, [showButton])

	const handle_prompt = (_) => {
		setShowButton(false)
		prompt.prompt()
		setPrompt(null)

		prompt.userChoice.then((result) => {
			if (result.outcome === 'accepted')
				if (acceptedUri) navigate(acceptedUri)

			if (result.outcome === 'dismissed') {
				localStorage.setItem(
					'a2hs_dismissal',
					moment().add(suspend || 2, 'days')
				)
				if (dismissedUri) navigate(dismissedUri)
			}
		})
	}

	return (
		<button
			style={{ display: showButton && prompt ? 'block' : 'none' }}
			onClick={handle_prompt}
			{...other}
		>
			{children}
		</button>
	)
}
