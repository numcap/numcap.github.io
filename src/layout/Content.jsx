import { About } from "../Components/About";
import { JoinUs } from "../Components/JoinUs";
import { usePositionValue } from "../contexts";
import { HeroBanner } from "../Components/HeroBanner";

export const Content = () => {
	const { /*scrollPosition, */ setScrollPosition } = usePositionValue();

	document.addEventListener("scroll", () => {
		// console.log(window.scrollY);
		if (window.scrollY < 600)
			setScrollPosition({ home: true, about: false, contact: false });
		else if (window.scrollY < 1050 && window.scrollY >= 600)
			setScrollPosition({ home: false, about: true, contact: false });
		else if (window.scrollY >= 1050)
			setScrollPosition({ home: false, about: false, contact: true });
	});

	// console.log(scrollPosition);
	
	return (
		<div>
			<HeroBanner />
			<div className='bg-[url("/images/blobs.svg")] pb-40 h-fit md:bg-cover md:relative md:bg-no-repeat bg-contain bg-repeat-y flex flex-col items-center'>
				<About />
				<JoinUs />
			</div>
		</div>
	);
};
