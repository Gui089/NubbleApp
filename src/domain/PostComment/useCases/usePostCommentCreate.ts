import { useState } from "react";
import { postCommentService } from "../postCommentService"


export const usePostCommentCreate = (postId: number) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<boolean | null>(null);
    
    const createComment= async (message: string) => {
        try {
            setLoading(true);
            setError(null);
            await postCommentService.create(postId, message);
        } catch (error) {
            setError(true);
        }finally {
            setLoading(false);
        }
    }

    return {
        createComment,
        loading,
        error
    }
}