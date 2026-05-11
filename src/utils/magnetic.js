/**
 * Magnetic Button Effect Utility
 * Makes elements subtly follow the cursor when it is within a certain distance.
 */

export const initMagneticButtons = () => {
  const magnets = document.querySelectorAll('.magnetic');
  const strength = 30; // Maximum displacement in pixels

  magnets.forEach((magnet) => {
    magnet.addEventListener('mousemove', (e) => {
      const position = magnet.getBoundingClientRect();
      const x = e.clientX - position.left - position.width / 2;
      const y = e.clientY - position.top - position.height / 2;

      magnet.style.transform = `translate(${x / strength}px, ${y / strength}px)`;
      magnet.style.transition = 'transform 0.1s ease-out';
    });

    magnet.addEventListener('mouseleave', () => {
      magnet.style.transform = 'translate(0, 0)';
      magnet.style.transition = 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)';
    });
  });
};
