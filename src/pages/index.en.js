import React from 'react'
import { SEO } from 'Common'
import { LayoutEn } from 'Layout'
import { Intro, About, ContactEn, Projects } from 'Components/landing'

export default (props) => (
	<LayoutEn location={props.location}>
		<SEO />
		<Intro />
		<About path={props.location.pathname} />
		<Projects />
		<ContactEn />
	</LayoutEn>
)
