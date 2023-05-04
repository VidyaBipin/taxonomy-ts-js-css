import { forwardRef, Ref, SVGProps } from 'react';
function TwitterIcon(props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      fill='currentColor'
      viewBox='0 0 24 24'
      ref={ref}
      {...props}
    >
      <path
        fill='currentColor'
        d='M7.919 20.938c8.302 0 12.842-6.878 12.842-12.843 0-.195 0-.39-.013-.583A9.183 9.183 0 0 0 23 5.176a8.997 8.997 0 0 1-2.593.71 4.528 4.528 0 0 0 1.985-2.497 9.043 9.043 0 0 1-2.866 1.096A4.518 4.518 0 0 0 11.834 8.6 12.816 12.816 0 0 1 2.53 3.885a4.517 4.517 0 0 0 1.4 6.026 4.474 4.474 0 0 1-2.049-.565v.057a4.515 4.515 0 0 0 3.621 4.425 4.505 4.505 0 0 1-2.038.077A4.52 4.52 0 0 0 7.68 17.04 9.055 9.055 0 0 1 1 18.91a12.78 12.78 0 0 0 6.919 2.025'
      />
    </svg>
  );
}
const Icon = forwardRef(TwitterIcon);
export { Icon as TwitterIcon };
