import Search from "../component/Search";

/** Add your relevant code here for the issue to reproduce */
export default function Member() {


    return <div>
      <p>
        This is the private page of the app, only accessible for members.
        This page can not be accessed by entering the url directly.<br/>
        Instead members are rewritten to '/member' from '/' in the middlware.
        No rewritte has been made in the middleware.
      </p>
      <p>
        Now enter something into the search input and submit.<br/>
        You will notice that the url updates, but the page doesn't unload,
        even though it's a shallow route to '/search', which should load the '/search' page, since we are not on '/search' yet.<br/>
        If you reload the page, you will see that the search page is loaded as expected.
      </p>

      <Search />

    </div>
  }
  