import { Dispatch, SetStateAction } from 'react';

export const handleWarehouseChange = (
  selectedOption: { value: string; label: string } | null,
  setSelectedWarehouse: Dispatch<
    SetStateAction<{ value: string; label: string } | null>
  >
) => {
  if (selectedOption) {
    setSelectedWarehouse(selectedOption);
  }
};