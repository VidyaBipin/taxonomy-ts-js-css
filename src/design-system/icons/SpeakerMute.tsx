import { forwardRef, Ref, SVGProps } from 'react';
function SpeakerMuteIcon(
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
        d='m8.343 14 2 2H5v-5.343l2 2V14h1.343ZM18 1.865l-5.715 4.763 1.42 1.42L16 6.135v4.208l2 2V1.865ZM2.293 3.707l18 18 1.414-1.414-18-18-1.414 1.414Z'
      />
    </svg>
  );
}
const Icon = forwardRef(SpeakerMuteIcon);
export { Icon as SpeakerMuteIcon };
