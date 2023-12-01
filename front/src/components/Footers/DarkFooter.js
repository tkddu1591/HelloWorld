/*eslint-disable*/
import React from 'react';

// reactstrap components
import { Container } from 'reactstrap';

function DarkFooter() {
	return (
		<footer className="footer" data-background-color="black">
			<Container>
				<nav>
					<ul>
						<li>
							|
							<a href="https://github.com/tkddu1591/HelloWorld" target="_blank">
								HelloWorld GitHub
							</a>
							|
						</li>
						<li>
							<a href="https://demos.creative-tim.com/now-ui-kit-react/?_ga=2.256269134.417406142.1698895734-613302324.1698895734#/index" target="_blank">
								Used Bootstrap
							</a>
							|
						</li>
					</ul>
				</nav>
				<div className="copyright" id="copyright">
					© {new Date().getFullYear()}, Designed by{' '}
					<a href="https://www.invisionapp.com?ref=nukr-dark-footer" target="_blank">
						Invision
					</a>
					. Coded by{' '}
					<a href="https://www.creative-tim.com?ref=nukr-dark-footer" target="_blank">
						Creative Tim
					</a>
					.
				</div>
			</Container>
		</footer>
	);
}

export default DarkFooter;
