import React from 'react';

import './text.css';
import './Footer.css';

const Footer = () => {
	return (
		<div className="ui container text">
			<div>
				<p style={{fontSize: 17, textAlign: 'center'}} className="textb">
					<a href="https://darksky.net/poweredby/" target="blank" className="ui link">
						Powered by Dark Sky
					</a>
				</p>
				<p style={{ marginTop: 10, color: 'white', textAlign: 'center' }}>
					Made with <ion-icon name="heart" /> by Aric Hylton &copy; 2019
				</p>
			</div>
		</div>
	);
};

export default Footer;
