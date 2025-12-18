"use strict";

window.addEventListener("load", () => {
	const sliderEffect = sliderElement => {
		const sliderContainer = document.querySelector(sliderElement);

		if (sliderContainer) {
			const originalContent = sliderContainer.innerHTML;
			sliderContainer.innerHTML = originalContent + originalContent;
		}
	};

	sliderEffect("#sliderVerticalChildOne");
	sliderEffect("#sliderVerticalChildTwo");
});
