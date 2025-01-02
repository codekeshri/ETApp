function Expense() {
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
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Amount"
                  />
                </div>
                <div className="form-group">
                  <label>Item</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Item"
                  />
                </div>
                <div className="form-group">
                  <label>Category</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Category"
                  />
                </div>
                <button type="submit" className="btn btn-primary mt-2">
                  Add
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
                  <tr>
                    <td>100</td>
                    <td>Food</td>
                    <td>Food</td>
                    <td>
                      <button className="btn btn-warning btn-sm">edit</button>
                      <button className="btn btn-danger btn-sm">delete</button>
                    </td>
                  </tr>
                  <tr>
                    <td>100</td>
                    <td>Food</td>
                    <td>Food</td>
                    <td>
                      <button className="btn btn-warning btn-sm">edit</button>
                      <button className="btn btn-danger btn-sm">delete</button>
                    </td>
                  </tr>
                  <tr>
                    <td>100</td>
                    <td>Food</td>
                    <td>Food</td>
                    <td>
                      <button className="btn btn-warning btn-sm">edit</button>
                      <button className="btn btn-danger btn-sm">delete</button>
                    </td>
                  </tr>
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
