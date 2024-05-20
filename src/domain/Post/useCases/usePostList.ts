import { Post, postService } from "@domain";
import { useEffect, useState } from "react";


export const usePostList = () => {

    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] =  useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [page, setPage] = useState(1);

    const fetchInitialData =  async () => {
        try {
            setLoading(true);
            const list = await postService.getList(1);
            setPage(2);
            setPosts(list);
        }catch (error) {
            console.log('ERROR:', error);
        } finally {
            setLoading(false);
        }
    }

    async function fetchNextPage() {
        if(loading) return;
        try {
            setLoading(true);
            const list = await postService.getList(page);
            setPosts(prev => [...prev, ...list]);
            setPage(prev => prev + 1);
        } catch(err) {
            setError(true);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchInitialData();
    }, []);

    return {
        posts,
        loading,
        error,
        refresh: fetchInitialData,
        fetchNextPage
    }
}