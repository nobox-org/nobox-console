import { redirect } from "next/navigation";

const navigate = (path: string) => redirect(path);
export default navigate;