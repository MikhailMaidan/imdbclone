import './FilterFields';
import { lazy, Suspense } from 'react';

const componentMapping = {
    'select': lazy(() => import('@/components/FilterFields/SelectField/SelectField')),
    'range': lazy(() => import('@/components/FilterFields/RangeField/RangeField')),
};


const FilterFields = ({ filterData, handleFilterChange }) => {
    const FilterComponent = componentMapping[filterData.type];

    if (!FilterComponent) {
        return null;
    }

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <FilterComponent filterData={filterData} handleFilterChange={handleFilterChange } />
        </Suspense>
    );
};

export default FilterFields;








