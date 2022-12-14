export function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="33"
      height="33"
      fill="none"
      viewBox="0 0 44 44"
    >
      <path fill="url(#pattern0)" d="M0 0H44V44H0z"></path>
      <defs>
        <pattern
          id="pattern0"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use transform="scale(.00444)" xlinkHref="#image0_4_2"></use>
        </pattern>
        <image
          id="image0_4_2"
          width="225"
          height="225"
          xlinkHref="data:image/png;base64,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"
        ></image>
      </defs>
    </svg>
  );
}


