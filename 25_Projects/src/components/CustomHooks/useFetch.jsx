import { useEffect, useState } from "react";

{/* You can use this hook as an alternative, just to get rid of the fetching process, to use it, simply destructure it like this:*/}
{/* const {data, error, pending} = useFetch("your_url", {your_options}) */}

function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData() {
    try {
      setPending(true);

      const res = await fetch(url, { ...options });
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      const result = await res.json();

      setData(result);
      setError(null);
      setPending(false);
    } catch (error) {
      setError(error);
      setPending(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, error, pending };
}

export default useFetch;
