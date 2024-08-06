import './SelectField.scss';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import {  MOVIE_TYPES } from '@/shared/composables/constants/constants';

const SelectField = ({ filterData, handleFilterChange }) => {
    const animatedComponents = makeAnimated();

    return (
       <div>
            <Select 
                className="movie-page__filters--first"
                value={filterData.options.find(option => option.value === filterData.value) ?? null}
                onChange={option => handleFilterChange(filterData.name, option?.value ?? MOVIE_TYPES.ALL)}
                components={animatedComponents} 
                options={filterData.options}
                isClearable={true}
            />
       </div>
    );
};

export default SelectField;