import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useTitle = () => {
   
    const { refetch, data: title = [] ,isLoading } = useQuery({
        queryKey: ['title'],
        queryFn: async() => {
            const res = await axios.get('http://localhost:5000/componentsTitle')
        return res.data;
        }
    })

    return [refetch,title,isLoading];
};

export default useTitle;