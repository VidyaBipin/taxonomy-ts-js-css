import { forwardRef, Ref, SVGProps } from 'react';
function HideIcon(props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      fill='none'
      viewBox='0 0 24 24'
      ref={ref}
      {...props}
    >
      <path
        fill='currentColor'
        d='m2.293 3.707 18 18 1.414-1.414-18-18-1.414 1.414ZM24 12c-.72 1.711-1.62 3.178-2.65 4.401l-1.418-1.42A14.78 14.78 0 0 0 21.808 12C19.494 7.176 15.63 5 12 5c-.616 0-1.24.063-1.86.19L8.505 3.555C14.248 1.695 20.846 4.51 24 12Z'
      />
      <path
        fill='currentColor'
        d='M17 12v.05L11.95 7H12a5 5 0 0 1 5 5Zm-4.95 5L7 11.95V12a5 5 0 0 0 5 5h.05Z'
      />
      <path
        fill='currentColor'
        d='M2.192 12a14.781 14.781 0 0 1 1.876-2.982L2.65 7.598C1.621 8.823.72 10.29 0 12c3.154 7.49 9.752 10.305 15.495 8.445L13.86 18.81c-.62.127-1.244.19-1.86.19-3.631 0-7.494-2.176-9.808-7Z'
      />
    </svg>
  );
}
const Icon = forwardRef(HideIcon);
export { Icon as HideIcon };
