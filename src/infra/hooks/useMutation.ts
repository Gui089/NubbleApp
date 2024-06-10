import { useState } from "react";


export interface MutationOptions<TData> {
    onSuccess?: (data: TData) => void;
}

/**
 * @deprecated  use useMutation from react-query
 */

export function useMutation<TVariables, TData>(
    mutationFn: (variables: TVariables) => Promise<TData>,
    options?: MutationOptions<TData>
){
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<boolean | null>(null);
    
    const mutate = async (variables: TVariables) => {
        try {
            setLoading(true);
            setError(null);
            const data = await mutationFn(variables);
            if(options?.onSuccess) {
                options.onSuccess(data);
            }
        } catch (error) {
            setError(true);
        }finally {
            setLoading(false);
        }
    }

    return {
        mutate,
        loading,
        error
    }
}

