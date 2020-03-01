import React, { useState, useEffect } from "react";
import IssueList from "./IssueList";

const SearchForm = ({ issues }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState({ issues });

  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const results = issues.filter(issue => {
      return issue.issue_name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    setSearchResults(results);
  }, [searchTerm, issues]);

  return (
    console.log("searchResults", searchResults),
    console.log("searchTerm", searchTerm),
    (
      <div>
        <section className="search-form">
          <form>
            <input
              id="title"
              type="text"
              name="textfield"
              placeholder="Search Issues"
              onChange={handleChange}
              value={searchTerm}
            />
          </form>
        </section>
        {/* <div className="issue">
          {searchResults.map(issue => {
            return (
              <Issue
                issue_name={issue.issue_name}
                issue_location={issue.issue_location}
                category={issue.category}
                priority={issue.priority}
                imgURL={issue.imgURL}
                issue_details={issue.issue_details}
                key={issue.id}
              />
            );
          })}
        </div> */}
      </div>
    )
  );
};

export default SearchForm;
