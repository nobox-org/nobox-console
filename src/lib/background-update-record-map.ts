import { storage } from "@/lib/utils/local-storage";
import { saveRecordMapInLocalStorage } from "./calls/get-record-map";
import { storageConstants } from "./constants";

export const backgroundUpdate = async (args: {
    recordMapCall: () => any;
    projectId: string;
}) => {
    const store = storage(storageConstants.PROJECT_RECORD_MAP);
    const { recordMapCall, projectId } = args;
    recordMapCall().then((recordMap: any) => {
        saveRecordMapInLocalStorage({
            recordMap,
            projectId,
            store
        })
    })
}





