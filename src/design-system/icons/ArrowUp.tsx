import { forwardRef, Ref, SVGProps } from 'react';
function ArrowUpIcon(props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) {
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
        d='m11 5.414-6.293 6.293-1.414-1.414L12 1.586l8.707 8.707-1.414 1.414L13 5.414V23h-2V5.414Z'
      />
    </svg>
  );
}
const Icon = forwardRef(ArrowUpIcon);
export { Icon as ArrowUpIcon };
