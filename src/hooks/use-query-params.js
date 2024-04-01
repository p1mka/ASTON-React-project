import { useLocation } from "react-router-dom";

export const useQueryParams = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search).get("keyword");
    return searchParams;
};
