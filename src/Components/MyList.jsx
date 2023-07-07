import "./CSS/MyList.css";

export default function MyList() {
    return (
        <>
            <form className="new-item-form">
                <div className="form-row">
                    <label htmlFor="item">New Item</label>
                    <input type="text" id="item"></input>
                </div>
                <button className="btn btn-add">Add</button>
            </form>
            <h2 className="header">To-do List</h2>
            <ul className="list">
                <li>
                    <label>
                        <input type="checkbox" />
                        Item 1
                    </label>
                    <button className="btn btn-edit">Edit</button>
                    <button className="btn btn-delete">Delete</button>
                </li>
            </ul>
        </>
    );
}
