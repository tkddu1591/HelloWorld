import { useEffect } from 'react';

interface FallbackProps {
	pageLoading: any;
}

function Fallback({ fallback }) {
	useEffect(() => {
		fallback();
	}, []);
}

export default Fallback;