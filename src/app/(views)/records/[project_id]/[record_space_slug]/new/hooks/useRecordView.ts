import { storageConstants } from "@/lib/constants";
import { LINKS } from "@/lib/links";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import axios from "axios";

export const useGetRecordView = (projectId: string, recordSpaceId: string) => {
    const url = `${LINKS.noboxAPIRootUrl}/gateway/*/views/${projectId}/665f33f1b3a4445cd4e4424b`;
    const { data, isLoading } = useQuery({
        queryFn: async () => await axios.get(url, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem(storageConstants.NOBOX_TOKEN)}`,
            }
        }).then(res => res.data),
        queryKey: ['views']
    });
    return { data, isLoading };
}

export const useAddRecordViewActions = (projectId: string) => {
    const url = `${LINKS.noboxAPIRootUrl}/gateway/*/views/${projectId}/665f33f1b3a4445cd4e4424b`;
    const client = useQueryClient()
    const addRecordView = useMutation( 
        {
            mutationFn: (viewData: any) => axios.post(url, { data: viewData }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(storageConstants.NOBOX_TOKEN)}`,
                }
            }),
            onSuccess: async (data, order) => client
                .invalidateQueries({queryKey: ['views']})
        })
    return { addRecordView: addRecordView.mutateAsync }
}