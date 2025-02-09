import React from "react";
import { Heading, Txt } from "rendition";
import { Link } from 'gatsby'
import { Container } from "Common";
import { FormattedMessage } from "react-intl";
import NavbarLinks from "../NavbarLinks";
import { Wrapper } from "./styles";


const Navbar = ({ getDarkMode, setDarkMode, langs, home, isHome }) => (
	<Wrapper as={Container}>
		<Link color="text.main" to={home}>
			<Heading.h4>
				<FormattedMessage id="name" />
			</Heading.h4>
			<Txt>
				<FormattedMessage id="job" />
			</Txt>
		</Link>
		<NavbarLinks desktop getDarkMode={getDarkMode} setDarkMode={setDarkMode} langs={langs} isHome={isHome} />
	</Wrapper>
);

export default Navbar;
