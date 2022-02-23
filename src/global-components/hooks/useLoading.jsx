import React, {useState} from "react";

const useLoading = () => {
    const [loading, setLoading] = useState(false);

    const handleLoading = (e) => setLoading(e)

    return {loading, handleLoading};
};

export default useLoading;