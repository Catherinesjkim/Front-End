// useState - This hook allows us to use state in function components (the equivalent to this.state and this.setState in class components)

import React, { useState, useEffect } from "react";
import { IssueContext } from "../contexts/IssueContext";
import Issue from "./Issue";
import { Link } from "react-router-dom"; // moved from IssueList
import { axiosWithAuth } from "../utils/axiosWithAuth";

const SearchForm = ({ issues }) => {
  // const [issues, setIssues] = useContext(IssueContext);

  const [searchTerm, setSearchTerm] = useState("");

  // searchResult is used to set the search result
  const [searchResults, setSearchResults] = useState(issues);

  // the handleChange method takes the event object as the argument and sets the current value of the form to the searchTerm state using setSearchTerm
  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const results = issues.filter(issue => {
      return issue.issue_name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    setSearchResults(results);
  }, [searchTerm, issues]);

  //  useEffect(() => {
  //     console.log(issues);
  //     setSearchResults(issues)},[issues])
  // componentDidUpdate re-render the element
  useEffect(() => {
    const getSearch = () => {
      axiosWithAuth()
        .get("https://bw-pt-co-make5.herokuapp.com/api/issues") // Co-Make API key here
        .then(response => {
          console.log("API IS HERE: ", response.data);
          setSearchResults(response.data);
        })
        .catch(error => {
          console.log("Whoops go back, that's an error!", error);
        });
    };

    const results = issues.filter(stat => {
      return (
        stat.register.toLowerCase().includes(searchTerm.toLowerCase()) ||
        stat.login.toLowerCase().includes(searchTerm.toLowerCase) ||
        stat.users.toLowerCase().includes(searchTerm.toLowerCase) ||
        {
          /* Add all of the keys here */
        }
      );
    });

    getSearch();
    setSearchResults(results);
    //eslint-disable-next-line
  }, [searchTerm]);
  console.log(issues);

  return (
    // console.log("searchResults", searchResults),
    // console.log("searchTerm", searchTerm),
    <div className="search-form">
      <section className="header">
        <Link className="search-link" to="/addIssue">
          <button>Add Issue</button>
        </Link>
        {/* inverted button & link order for better functionality */}
        <form className="search-bar">
          <input
            id="title"
            type="text"
            name="textfield"
            placeholder="Search"
            onChange={handleChange}
            value={searchTerm}
          />
          {/* <button>Submit</button> */}
        </form>
      </section>
      <div className="issue-list">
        {searchResults.map(issue => {
          console.log("issue-id", issue.id);
          return (
            <div>
              <Issue
                issue_name={issue.issue_name}
                issue_location={issue.issue_location}
                category={issue.category}
                priority={issue.priority}
                imgURL={issue.imgUrl} // changed imgURL to imgUrl
                issue_details={issue.issue_details}
                key={issue.id}
              />
              <Link to={`protected/${issue.id}`}>More Info</Link>{" "}
              {/* added link to each individual detailed issue page */}
            </div>
          );
        })}
        {/* new Search (
          Array
            .from(searchResults)
            .sort((a,b) => {
              return a.id - b.id;
            })
        ) */}
      </div>
    </div>
  );
};

export default SearchForm;
