import { forwardRef, Ref, SVGProps } from 'react';
function VerifiedIcon(props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) {
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
        fillRule='evenodd'
        d='M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11ZM9.054 9.054c1.024-1.025 1.628-2.719 1.69-5.554h2.511c.063 2.835.667 4.53 1.691 5.554 1.025 1.024 2.719 1.628 5.554 1.69v2.511c-2.835.063-4.53.667-5.554 1.691-1.024 1.025-1.628 2.719-1.69 5.554h-2.511c-.063-2.835-.667-4.53-1.691-5.554-1.025-1.024-2.719-1.628-5.554-1.69v-2.511c2.835-.063 4.53-.667 5.554-1.691Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
const Icon = forwardRef(VerifiedIcon);
export { Icon as VerifiedIcon };
