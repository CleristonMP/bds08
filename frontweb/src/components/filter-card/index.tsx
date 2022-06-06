import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import { Store } from '../../types';
import { requestBackend } from '../../utils/requests';
import './styles.css';

export type FilterData = {
  store: Store | null;
};

type Props = {
  onFilterChange: (store: Store | undefined) => void;
};

function FilterCard({ onFilterChange }: Props) {
  const [stores, setStores] = useState<Store[]>();
  const [selectedStore, setSelectedStore] = useState<Store>();

  const { control, setValue } = useForm<FilterData>();

  useEffect(() => {
    requestBackend({ url: '/stores' }).then((response) => {
      setStores(response.data);
    });
  }, []);

  const onChangeStore = (value: Store) => {
    console.log(value);

    setSelectedStore(value);
    setValue('store', value);
    onFilterChange(selectedStore);
  };

  return (
    <div className="filter-card-component base-card">
      <Controller
        name="store"
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            options={stores}
            isClearable
            placeholder="Lojas"
            classNamePrefix="store-filter-select"
            onChange={(value) => onChangeStore(value as Store)}
            getOptionLabel={(store: Store) => store.name}
            getOptionValue={(store: Store) => String(store.id)}
          />
        )}
      />
    </div>
  );
}

export default FilterCard;
