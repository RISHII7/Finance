import { toast } from "sonner";
import { InferRequestType, InferResponseType } from "hono";

import { client } from "@/lib/hono";

import { useMutation, useQueryClient } from "@tanstack/react-query";

type ResponseType = InferResponseType<
    (typeof client.api.transactions)[":id"]["$patch"]
>;
type RequestType = InferRequestType<
    (typeof client.api.transactions)[":id"]["$patch"]
>["json"];

export const useEditTransaction = (id?: string) => {
    const queryClient = useQueryClient();

    const mutation = useMutation<
        ResponseType,
        Error,
        RequestType
    >({
        mutationFn: async (json) => {
            const response = await client.api.transactions[":id"]["$patch"]({ json, param: { id } })
            return await response.json();
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["transactions"] });
            queryClient.invalidateQueries({ queryKey: ["transaction", { id }] });
            queryClient.invalidateQueries({ queryKey: ["summary", { id }] });
            toast.success("Transaction Updated");
        },
        onError: () => {
            toast.error("Failed to edit Transaction");
        },
    });

    return mutation;
};