import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters.js';
import { DateRangePicker } from 'react-dates';

// defaultValue={props.filters.text} 

class ExpenseListFilters extends React.Component {

    // this pattern is useful only when no state is being passed in from
    // above
    state = {
        calendarFocused: null,
    };
    onDatesChange = ({startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };
    onFocusChange = (calendarFocused) => {
        this.setState(() => {
            return {
                calendarFocused: calendarFocused
            };
        });
    };
    render() {
        return (
            <div>
                <input type="text" value={this.props.filters.text} 
                    onChange={(event) => {
                        this.props.dispatch(setTextFilter(event.target.value));
                    }}
                />
                <select
                    defaultValue={this.props.filters.sortBy}
                    onChange={(event) => {
                        if (event.target.value === 'date') {
                            this.props.dispatch(sortByDate());
                        } else {
                            this.props.dispatch(sortByAmount());
                        }
                    }}
                >
                    <option value="date">
                        Date
                    </option>
                    <option value="amount">
                        Amount
                    </option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    showClearDates={true}
                />
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ExpenseListFilters);
