import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useComponent = () => {
    const { refetch, data: component = [] ,isLoading } = useQuery({
        queryKey: ['component'],
        queryFn: async() => {
            const res = await axios.get('http://localhost:5000/component')
        return res.data;
        }
    })

    return [refetch,component,isLoading];
};

export default useComponent;