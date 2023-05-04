import { forwardRef, Ref, SVGProps } from 'react';
function AlbumIcon(props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) {
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
        d='M8.405 10.246a4 4 0 0 0 4.29 5.693l.347 1.97a6 6 0 0 1-6.435-8.54l1.798.877Zm7.577 1.371a4 4 0 0 1-.387 2.136l1.798.877a6.001 6.001 0 0 0-6.435-8.539l.347 1.97a4 4 0 0 1 4.677 3.556Z'
      />
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm0-2a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
const Icon = forwardRef(AlbumIcon);
export { Icon as AlbumIcon };
