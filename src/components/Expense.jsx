/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getExpense, postExpense, putExpense, deleteExpense } from '../store/slices/expense';
import axios from 'axios';
import toast from 'react-hot-toast';

function Expense() {
  const dispatch = useDispatch();
  const expenses = useSelector(state => state.expenses);
  const [amount, setAmount] = useState('');
  const [item, setItem] = useState('');
  const [category, setCategory] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [id, setId] = useState(null);
  const [email, setEmail] = useState('arvidce10@gmail.com');

  const fetchExpenses = async () => {
    try {
      const response = await axios.get(import.meta.env.VITE_GET_EXPENSE);

      const fetchedExpenses = [];
      for (const key in response.data) {
        fetchedExpenses.push({
          id: key,
          ...response.data[key],
        });
      }
      dispatch(getExpense(fetchedExpenses));
    } catch (error) {
      toast.error('Error fetching expenses from Firebase');
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, [dispatch, email]);

  const addExpenseHandler = async e => {
    e.preventDefault();
    try {
      await axios.post(import.meta.env.VITE_POST_EXPENSE, { amount, item, category }, { headers: { 'Content-Type': 'application/json' } });
      toast.success('Expense added successfully');
      clearForm();
      dispatch(postExpense({ amount, item, category }));
    } catch {
      toast.error('error posting expense in firebase');
    }
  };

  const editHandler = (expense, event) => {
    event.preventDefault();
    setIsEditing(true);
    setId(expense.id);
    setAmount(expense.amount);
    setItem(expense.item);
    setCategory(expense.category);
  };

  const updateExpenseHandler = async e => {
    e.preventDefault();
    try {
      await axios.put(`${import.meta.env.VITE_DELETE_EXPENSE}/${id}.json`, { amount, item, category }, { headers: { 'Content-Type': 'application/json' } });
      dispatch(putExpense({ id, amount, item, category }));
      clearForm();
    } catch {
      toast.error('error updating expense in firebase');
    }
  };

  const deleteHandler = async (expense, event) => {
    event.preventDefault();
    setId(expense.id);
    console.log(id);
    try {
      await axios.delete(`${import.meta.env.VITE_DELETE_EXPENSE}/${id}.json`, { headers: { 'Content-Type': 'application/json' } });
      dispatch(deleteExpense({ id }));
    } catch {
      toast.error('error deleting expense in firebase');
    }
  };

  const clearForm = () => {
    setAmount('');
    setItem('');
    setCategory('');
    setIsEditing(false);
    setId(null);
  };

  return (
    <div>
      <div className="contain">
        <div className="row">
          <div className="col-sm mt-3 ">
            <div>
              <h3>Add Expense</h3>
              <form>
                <div className="form-group">
                  <label>Amount</label>
                  <input type="number" className="form-control" placeholder="Amount" onChange={e => setAmount(e.target.value)} value={amount} />
                </div>
                <div className="form-group">
                  <label>Item</label>
                  <input type="text" className="form-control" placeholder="Item" onChange={e => setItem(e.target.value)} value={item} />
                </div>
                <div className="form-group">
                  <label>Category</label>
                  <input type="text" className="form-control" placeholder="Category" onChange={e => setCategory(e.target.value)} value={category} />
                </div>
                <button type="submit" className="btn btn-primary mt-2" onClick={isEditing ? updateExpenseHandler : addExpenseHandler}>
                  {isEditing ? 'Update' : 'Add'}
                </button>
              </form>
            </div>
          </div>
          <div className="col-sm mt-3 ">
            <div>
              <div className="mt-3">
                <h3>List</h3>
              </div>
              <table className="table">
                <thead>
                  <tr>
                    <th>Amount</th>
                    <th>Item</th>
                    <th>Category</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {expenses.map((expense, index) => (
                    <tr key={index}>
                      <td>{expense.amount}</td>
                      <td>{expense.item}</td>
                      <td>{expense.category}</td>
                      <td>
                        <button className="btn btn-warning btn-sm" onClick={event => editHandler(expense, event)}>
                          edit
                        </button>
                        <button className="btn btn-danger btn-sm ms-2" onClick={event => deleteHandler(expense, event)}>
                          delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expense;
