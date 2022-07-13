import { url } from "inspector";
import { useRouter } from "next/router";
import { useState } from "react";

const Search = () => {
    const router = useRouter()
    const [search, setSearch] = useState<string>(() => {
      if (router.query.q) {
        return decodeURIComponent(router.query.q as string)
      }
    })
    
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            router.push({ pathname: "/search", query: { q: encodeURIComponent(search) } }, undefined, { shallow: true })
          }}>
            <label>Search</label>
            <input 
              type="text" 
              name="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
    )
}

export default Search
