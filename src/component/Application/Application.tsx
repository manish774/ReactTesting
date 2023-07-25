import React from "react";

const Application = () => {
  const [jobLocation, setJobLocation] = React.useState("");

  const onChangeHandler = (event: any) => {
    setJobLocation(event.target.value);
  };
  return (
    <>
      <h1 id="job-application">Job Application</h1>
      <h2 id="section-heading">Section 1</h2>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea name="bio" id="bio" />
        </div>
        <div>
          <label htmlFor="job-location">Job Location</label>
          <select id="job-location" onChange={onChangeHandler}>
            <option value="">Select a country</option>
            <option value="us">United States</option>
            <option value="uk">United Kingdom</option>
            <option value="ca">Canada</option>
            <option value="india">India</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" id="terms" />I Agree
          </label>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
};

export default Application;
