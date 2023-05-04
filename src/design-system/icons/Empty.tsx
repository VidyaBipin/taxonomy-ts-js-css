import { forwardRef, Ref, SVGProps } from 'react';
function EmptyIcon(props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) {
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
        d='M6.785 19.336a8.953 8.953 0 0 0 3.715 1.54v2.023a10.945 10.945 0 0 1-5.145-2.132l1.43-1.43ZM3.124 13.5a8.952 8.952 0 0 0 1.54 3.715l-1.43 1.43A10.944 10.944 0 0 1 1.1 13.5h2.023Zm1.54-6.715a8.952 8.952 0 0 0-1.54 3.715H1.101a10.945 10.945 0 0 1 2.132-5.145l1.43 1.43ZM10.5 3.124a8.952 8.952 0 0 0-3.715 1.54l-1.43-1.43A10.944 10.944 0 0 1 10.5 1.1v2.023Zm3-2.023v2.023a8.97 8.97 0 0 1 3.715 1.54l1.43-1.43A10.944 10.944 0 0 0 13.5 1.1Zm7.267 4.254-1.43 1.43a8.952 8.952 0 0 1 1.539 3.715h2.023a10.945 10.945 0 0 0-2.132-5.145Zm2.132 8.145h-2.023a8.952 8.952 0 0 1-1.54 3.715l1.43 1.43A10.944 10.944 0 0 0 22.9 13.5Zm-4.254 7.267-1.43-1.43a8.953 8.953 0 0 1-3.715 1.539v2.023a10.944 10.944 0 0 0 5.145-2.132ZM4.234 4.21l-.024.024.024-.024Z'
      />
    </svg>
  );
}
const Icon = forwardRef(EmptyIcon);
export { Icon as EmptyIcon };
