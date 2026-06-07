const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add('animate-in');
				observer.unobserve(entry.target);
			}
		});
	},
	{
		threshold: 0.2,
	}
);

document.querySelectorAll('.reveal-card').forEach((card) => {
	observer.observe(card);
});