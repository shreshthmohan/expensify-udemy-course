import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css'

const now = moment();
//console.log(now);

export default class ExpenseForm extends React.Component {
    // Why is this constructor needed?
    // to accept passed in props?
    // earlier it was :
    // state = {properties ...}
    constructor(props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        };
    }
    onDescriptionChange = (event) => {
        const description = event.target.value;
        this.setState(() => {
            return {
                description: description
            };
        });
    };
    onNoteChange = (event) => {
        const note = event.target.value;
        this.setState(() => {
            return {
                note : note 
            };
        });
    };
    onAmountChange = (event) => {
        const amount = event.target.value;
        // good place to check regex: regex101.com
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) { // validation
            this.setState(() => {
                return {
                    amount: amount 
                };
            });
        }
    };
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => {
                return {
                    createdAt: createdAt
                };
            });
        }
    };
    onFocusChange = ({ focused }) => {
        this.setState(() => {
            return {
                calendarFocused : focused 
            };
        });
    };
    onSubmit = (event) => {
        event.preventDefault();
        if (!this.state.description || !this.state.amount) {
            this.setState(() => {
                return {
                    error: 'Please provide description and amount'
                };
            });
        } else {
            this.setState(() => {
                return {
                    error: ''
                };
            });
            this.props.onSubmit({ // this is the function passed in via Edit page or add Expense page
                description: this.state.description,
                amount: parseFloat(this.state.amount),
                note: this.state.note,
                createdAt: this.state.createdAt.valueOf()
            });
        }
    };
    render() {
        return (
            <div>
                Expense Form
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => {
                            return false;
                        }}
                    />
                    <textarea
                        placeholder="Add a note(optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    />
                    <button>Add Expense</button>
                </form>
            </div>
        );
    }
}
//
