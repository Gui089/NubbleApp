import { Post, postService } from "@domain";
import { useEffect, useState } from "react";


export const usePostList = () => {

    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] =  useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [page, setPage] = useState(1);
    const [hasNextPage, setHasNextPage] = useState(true);

    const fetchInitialData =  async () => {
        try {
            setLoading(true);
            const {data, meta} = await postService.getList(1);
            setPosts(data);
            if(meta.hasNextPage) {
                setPage(2);
                setHasNextPage(true);
            } else {
                setHasNextPage(false);
            }
        }catch (error) {
            console.log('ERROR:', error);
        } finally {
            setLoading(false);
        }
    }

    async function fetchNextPage() {
        if(loading || !hasNextPage) {
            return;
        }
            
        try {
            setLoading(true);
            const {data, meta} = await postService.getList(page);
            setPosts(prev => [...prev, ...data]);
            if(meta.hasNextPage) {
                setPage(prev => prev + 1);
            } else {
                setHasNextPage(false);
            }
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