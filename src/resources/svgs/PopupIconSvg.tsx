// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';

const PopupIconSvg = ({ className, fill }) => {
  return (
    <svg width="1002.667" height="1002.667" viewBox="0 0 752 752" className={className} fill={fill}>
      <path d="M568.75 198.41v-3.316l-.945-1.894-.945-1.422-2.367-2.84-3.793-2.844-1.422-.945-1.894-.945-109.87-.004c-6.766 0-13.02 3.613-16.406 9.473a18.95 18.95 0 0 0 16.406 28.414h56.832l-170.02 168.6a19.08 19.08 0 0 0-4.941 18.438 19.09 19.09 0 0 0 13.496 13.496c6.586 1.766 13.617-.117 18.438-4.941l170.02-170.02v56.832c0 6.766 3.609 13.02 9.473 16.402s13.082 3.387 18.941 0a18.95 18.95 0 0 0 9.473-16.402V201.72a18.92 18.92 0 0 0-.473-3.312zM239.61 569.22h224.48c15.074 0 29.527-5.988 40.188-16.645a56.84 56.84 0 0 0 16.645-40.184v-134.02c0-6.769-3.613-13.023-9.473-16.406s-13.082-3.383-18.941 0a18.94 18.94 0 0 0-9.473 16.406v134.02a18.94 18.94 0 0 1-18.946 18.942H239.61c-5.023 0-9.84-1.996-13.395-5.547a18.93 18.93 0 0 1-5.547-13.395v-224.48c0-5.023 1.996-9.84 5.547-13.395a18.93 18.93 0 0 1 13.395-5.547h134.02a18.94 18.94 0 0 0 16.406-9.473c3.383-5.859 3.383-13.082 0-18.941a18.94 18.94 0 0 0-16.406-9.473H239.61c-15.07 0-29.527 5.988-40.184 16.645a56.83 56.83 0 0 0-16.645 40.184v224.48a56.84 56.84 0 0 0 16.645 40.184c10.656 10.656 25.113 16.645 40.184 16.645z"/>
    </svg>
  );
};

PopupIconSvg.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string,
};

export default PopupIconSvg;
