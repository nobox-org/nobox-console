import { getControl } from "./getControl";

export const Formatic = ({ schema, onSubmit}: { schema: any[]; onSubmit: () => void; }) => {
    return <form>
        {schema.map((input) => getControl(input))}
        <div className="form-group">
            <button type="submit">Submit</button>
        </div>
    </form>
}