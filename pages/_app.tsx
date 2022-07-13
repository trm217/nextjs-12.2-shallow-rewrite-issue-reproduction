import axios from "axios";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter()
    const { data, error, mutate } = useSWR("/api/isMember", (url) => axios.get(url).then((res) => res.data));

    return (
        <div>
            <Component {...pageProps} />
            <div>
                {!data && !error && <p>Loading...</p>}
                {error && <p>Error: {error.message}</p>}
                {data && <div>
                    {
                        data.isMember ? <p>You are a member</p> : <p>You are not a member</p>
                    }
                    <button onClick={() => {
                        axios.get(`/api/toggleMember${data.isMember ? "?member=true" : ""}`)
                        .then((resData) => {
                            mutate({ isMember: !data.isMember })
                            let str = resData.data.isMember ? "You are now a member" : "You are now not a member"
                            str += "\nThe page will be reloaded to retrigger the middleware rewrite"
                            alert(str)
                            router.push("/")
                        })
                    }}>
                        toggle auth state
                    </button>
                </div>}
            </div>
        </div>
    )
}
