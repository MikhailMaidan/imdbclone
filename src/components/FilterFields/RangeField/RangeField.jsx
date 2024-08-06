import './RangeField.scss';
import ReactSlider from 'react-slider';

const RangeField = ({ filterData, handleFilterChange }) => {

    return (
       <div>
            <div className="movie-page__filters--slider">
                <label>
                    {filterData.placeholder}:&nbsp;{filterData.value[0]} - {filterData.value[1]}
                </label>
                <ReactSlider
                    className="horizontal-slider"
                    thumbClassName="thumb"
                    trackClassName="track"
                    min={filterData.min}
                    max={filterData.max}
                    value={filterData.value}
                    onChange={value => handleFilterChange(filterData.name, value)}
                    ariaLabel={['Lower thumb', 'Upper thumb']}
                    ariaValuetext={state => `Thumb value ${state.valueNow}`}
                    renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                />
            </div>
        </div>
    );
};

export default RangeField;
