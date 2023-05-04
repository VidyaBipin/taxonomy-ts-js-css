import { forwardRef, Ref, SVGProps } from 'react';
function SpeakerHighIcon(
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) {
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
        d='M13 1.865v20.27L5.638 16H0V8h5.638L13 1.865Zm-2 4.27L6.362 10H2v4h4.362L11 17.865V6.135Z'
        clipRule='evenodd'
      />
      <path
        fill='currentColor'
        d='M17 12a7 7 0 0 0-1.337-4.114l1.618-1.176a9 9 0 0 1 0 10.58l-1.618-1.175A7 7 0 0 0 17 12Z'
      />
      <path
        fill='currentColor'
        d='M19.304 5.24a11.5 11.5 0 0 1 0 13.52l1.618 1.175a13.5 13.5 0 0 0 0-15.87L19.304 5.24Z'
      />
    </svg>
  );
}
const Icon = forwardRef(SpeakerHighIcon);
export { Icon as SpeakerHighIcon };
