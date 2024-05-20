import { Post, postService } from "@domain";
import { useEffect, useState } from "react";


export const usePostList = () => {

    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] =  useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [page, setPage] = useState(1);

    const fetchData =  async () => {
        try {
            setLoading(true);
            const list = await postService.getList(page);
            setPage(prev => prev + 1);
            setPosts(prev => [...prev, ...list]);
        }catch (error) {
            console.log('ERROR:', error);
        } finally {
            setLoading(false);
        }
    }

    function fetchNextPage() {
        if(!loading) {
            fetchData();
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return {
        posts,
        loading,
        error,
        refetch: fetchData,
        fetchNextPage
    }
}