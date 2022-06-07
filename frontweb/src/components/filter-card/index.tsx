import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import { FilterData, Store } from '../../types';
import { requestBackend } from '../../utils/requests';
import './styles.css';

type Props = {
  onFilterChange: (filter: FilterData) => void;
};

function FilterCard({ onFilterChange }: Props) {
  const [stores, setStores] = useState<Store[]>();

  const { control, setValue, getValues } = useForm<FilterData>();

  useEffect(() => {
    requestBackend({ url: '/stores' }).then((response) => {
      setStores(response.data);
    });
  }, []);

  const handleChangeStore = (value: Store) => {
    setValue('store', value);
    const selectedStore = { store: getValues('store') };
    onFilterChange(selectedStore);
  };

  return (
    <div className="filter-card-component base-card">
      <form>
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
              onChange={(value) => handleChangeStore(value as Store)}
              getOptionLabel={(store: Store) => store.name}
              getOptionValue={(store: Store) => String(store.id)}
            />
          )}
        />
      </form>
    </div>
  );
}

export default FilterCard;
