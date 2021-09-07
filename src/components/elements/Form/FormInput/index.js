import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const FormInput = ({
  children,
  onChange,
  className,
  value,
  onClickMax,
  prefixIcon,
  type = 'number',
  step,
}) => {
  return (
    <div
      className={classNames(
        'flex items-start w-full field-box-shadow p-3 rounded-lg manta-bg-gray my-2',
        className
      )}
    >
      <div className="w-4/5">
        <div className="flex">
          {prefixIcon && (
            <img className="w-6 h-6 mr-2" src={prefixIcon} alt="prefix-icon" />
          )}
          <input
            type={type}
            onChange={onChange}
            step={step}
            className="w-full text-lg outline-none manta-bg-gray"
            value={value}
          />
        </div>
        <div className="text-sm manta-gray">{children}</div>
      </div>
      {onClickMax && (
        <span
          onClick={onClickMax}
          className="py-0.5 px-5 w-1/5 uppercase cursor-pointer btn-hover text-center rounded-lg btn-primary"
        >
          Max
        </span>
      )}
    </div>
  );
};

FormInput.propTypes = {
  className: PropTypes.string,
  isMax: PropTypes.bool,
  onChange: PropTypes.func,
};

export default FormInput;
