
export default function FilterForm() {
    return (<div>
            <h3>Форма</h3>
            <form action={"http://185.182.111.214:7628/cgi-bin/form_action.py"} method={"get"} target={"blank"}>
                <select name="sort">
                    <option value="price">Price</option>
                    <option value="stars">Stars</option>
                    <option value="distance">Distance</option>
                </select>

                <fieldset>
                    <legend>Star Rating</legend>
                    <label>
                        <input type="radio" name="stars" value="5"/>{" "}
                        ★★★★★
                    </label>
                    <label>
                        <input type="radio" name="stars" value="4"/> ★★★★
                    </label>
                    <label>
                        <input type="radio" name="stars" value="3"/> ★★★
                    </label>
                    <label>
                        <input type="radio" name="stars" value="2"/> ★★
                    </label>
                    <label>
                        <input type="radio" name="stars" value="1"/> ★
                    </label>
                </fieldset>

                <fieldset>
                    <legend>Amenities</legend>
                    <label>
                        <input
                            type="checkbox"
                            name="amenities"
                            value="pool"
                        />{" "}
                        Pool
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="amenities"
                            value="exercise"
                        />{" "}
                        Exercise Room
                    </label>
                </fieldset>
                <button type="submit">Submit</button>
            </form>

        </div>
    )
}
