'use client';

import useCountries from '@/app/hooks/useCountries';
import React from 'react';
import Select from 'react-select';

export type CountrySelectValue = {
  flag: string;
  value: string;
  label: string;
  latlng: number[];
  region: string;
};

interface CountrySelectProps {
  value?: CountrySelectValue;
  onChange: (value: CountrySelectValue) => void;
}

const CountrySelect: React.FC<CountrySelectProps> = ({ onChange, value }) => {
  const { getAll } = useCountries();

  return (
    <Select
      placeholder="Select a country"
      isClearable
      options={getAll()}
      value={value}
      onChange={(value) => onChange(value as CountrySelectValue)}
      formatOptionLabel={(option: any) => (
        <div className="flex flex-row items-center gap-3">
          {option.flag}
          <div>{option.label},</div>
          <div className="ml-1 text-neutral-800">{option.region} </div>
        </div>
      )}
      classNames={{
        control: () => 'border-2 p-3',
        input: () => 'text-lg',
        option: () => 'text-lg',
      }}
      theme={(theme) => ({
        ...theme,
        borderRadius: 6,
        colors: {
          ...theme.colors,
          primary: 'black',
          primary25: '#ffe4e6',
        },
      })}
    />
  );
};

export default CountrySelect;
