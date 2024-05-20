import { Post, postService } from "@domain";
import { useEffect, useState } from "react";


export const usePostList = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] =  useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    const fetchData =  async () => {
        try {
            setLoading(true);
            const list = await postService.getList();
            setPosts(list);
        }catch (error) {
            console.log('ERROR:', error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return {
        posts,
        loading,
        error,
        refetch: fetchData 
    }
}