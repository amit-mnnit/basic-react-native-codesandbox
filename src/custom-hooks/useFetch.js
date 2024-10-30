import { useState, useEffect } from "react";

const getURL = () => {
  return `${process.env.EXPO_PUBLIC_AEM_HOST}${process.env.EXPO_PUBLIC_AEM_FORM_PATH}/jcr:content/guideContainer.model.json`;
};

const useFetch = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(getURL());
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
      }
    };

    fetchData();
  }, []);

  return data;
};

export default useFetch;
