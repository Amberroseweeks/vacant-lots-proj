'use client';

import React, { FC, useEffect, useRef, useState } from 'react';
import { Check, X } from '@phosphor-icons/react';
import {
  SelectFilter,
  SelectFilterItem,
  SelectFilterChip,
  BlankSelectorIcon,
} from './MultiSelectVariants';

type MultiSelectProps = {
  display: string;
  options: any[];
  selectedKeys: string[];
  aria_describedby_label?: string;
  toggleDimension: (dimension: string) => void;
  handleSelectionChange: (
    selection: React.ChangeEvent<HTMLSelectElement> | string
  ) => void;
};

const MultiSelect: FC<MultiSelectProps> = ({
  display,
  options,
  selectedKeys,
  aria_describedby_label,
  toggleDimension,
  handleSelectionChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Override Autocomplete design to continue focus on the input after closing the popover menu
  useEffect(() => {
    console.log('Effect to unfocus input');
    !isOpen && inputRef.current?.blur();
  }, [isOpen]);

  return (
    <div className="space-x-2 min-h-[33.5px] flex flex-col">
      <SelectFilter
        aria-describedby={aria_describedby_label}
        variant="flat"
        size="md"
        radius="md"
        placeholder="Select options..."
        selectedKey={null}
        classNames={{
          selectorButton: 'hidden',
        }}
        inputProps={{
          ref: inputRef,
          classNames: {
            inputWrapper: [
              'multiSelect',
              'data-[hover=true]:bg-gray-100',
              'group-data-[focus=true]:bg-gray-100',
            ],
            input: ['text-gray-900', 'placeholder:text-gray-900'],
          },
        }}
        onOpenChange={() => setIsOpen((prev) => !prev)}
      >
        {options.map((option) => (
          <SelectFilterItem
            key={option}
            value={option}
            onClick={(e) => {
              const target = e.target as HTMLSpanElement;
              handleSelectionChange(target.innerText);
            }}
            endContent={
              selectedKeys.includes(option) && <Check weight="bold" />
            }
          >
            {option}
          </SelectFilterItem>
        ))}
      </SelectFilter>
      <div className="flex min-h-14 mt-2 gap-y-2 flex-wrap overflow-hidden">
        {selectedKeys.map((option) => (
          <SelectFilterChip
            key={option}
            classNames={{ base: 'multiSelectChip' }}
            endContent={<X aria-label={`close ${option}`} />}
            onClose={() => handleSelectionChange(option)}
          >
            {option}
          </SelectFilterChip>
        ))}
      </div>
    </div>
  );
};

export default MultiSelect;
