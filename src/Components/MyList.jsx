import "./CSS/MyList.css";

export default function MyList() {
    return (
        <form className="new-item-form">
            <div className="form-row">
                <label htmlFor="item">New Item</label>
                <input type="text" id="item"></input>
            </div>
        </form>
    );
}
