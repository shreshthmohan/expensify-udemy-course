import { addExpense, editExpense, removeExpense } from '../../actions/expenses.js';

test('should setup remove expense action object', () => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({type: 'REMOVE_EXPENSE', expense: {id: '123abc'}});
});

test('should setup edit expense action object', () => {
    const action = editExpense({id: 'wgv345', updates: {note: 'New note value'}});
    expect(action).toEqual({type: 'EDIT_EXPENSE', id: 'wgv345', updates: {note: 'New note value'}});
});
