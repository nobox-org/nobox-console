import { storageConstants } from "@/lib/constants";
import { LINKS } from "@/lib/links";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import axios, { AxiosResponse } from "axios";

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

export const useAddRecordViewActions = (projectId: string, recordSpaceId: string) => {
    const client = useQueryClient();
    interface AddViewInterface {
        viewData: any;
        viewId?: string;
    }
    const addRecordView = useMutation<AxiosResponse, any, AddViewInterface>(
        {
            mutationFn: data => {
                const { viewData, viewId } = data;
                const url = viewId
                    ? `${LINKS.noboxAPIRootUrl}/gateway/*/views/${viewId}`
                    :`${LINKS.noboxAPIRootUrl}/gateway/*/views/${projectId}/${recordSpaceId}`;
                return axios.post(url, { data: viewData }, {
                    headers: {
                        Authorization: `Bearezr ${localStorage.getItem(storageConstants.NOBOX_TOKEN)}`,
                    }
                })
            },
            onSuccess: async () => client
                .invalidateQueries({ queryKey: ['views'] })
        })
    return { addRecordView: (data: AddViewInterface) => addRecordView.mutateAsync(data) }
}