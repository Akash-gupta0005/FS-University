import { useEffect } from 'react';

const ScrollAnimate = ({ children, className = '' }) => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                    if (entry.target.classList.contains('imageReveal')) {
                        entry.target.classList.add('in-view');
                    }
                } else {
                    entry.target.classList.remove('show');
                    if (entry.target.classList.contains('imageReveal')) {
                        entry.target.classList.remove('in-view');
                    }
                }
            });
        });

        const hiddenElements = document.querySelectorAll('.hidden, .imageReveal');
        hiddenElements.forEach((el) => observer.observe(el));

        return () => {
            hiddenElements.forEach((el) => observer.unobserve(el));
        };
    }, []);

    return (
        <div className={`hidden ${className}`}>
            {children}
        </div>
    );
};

export default ScrollAnimate;