import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('Should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abC'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abC'
    });
});

test('Should setup edit expense action object', () => {
    const action = editExpense( '123abC', { description: 'Mo Cam' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abC',
        updates: {description: 'Mo Cam'}
    });
});

test('should setup add expense action object with provided values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'This was last month\'s rent'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('should setup add expense action object with default values', () => {
    const expenseData = {
        description: '',
        amount: 0,
        createdAt: 0,
        note: ''
    };
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            amount: 0,
            createdAt: 0,
            note: ''
        }
    });
});