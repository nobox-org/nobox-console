import { storage } from "@/lib/localStorage";
import { saveRecordMapInLocalStorage } from "./get-record-map";
import { storageConstants } from "./constants";

export const backgroundUpdate = async (args: {
    recordMapCall: () => any;
    projectId: string;
}) => {
    const store = storage(storageConstants.PROJECT_RECORD_MAP);
    const { recordMapCall, projectId } = args;
    recordMapCall().then((recordMap: any) => {
        // console.log("ran background update")
        saveRecordMapInLocalStorage({
            recordMap,
            projectId,
            store
        })
    })
}





