import React from 'react';
import { Form } from 'semantic-ui-react';

const Search = (props) => {
    // console.log(props)
    return (
      <div className="ui large fluid icon input">
        <input
          type="text"
          placeholder={"Search your Recent Transactions"}
          onChange={props.onChange}
        />
        <i className="circular search link icon"></i>
      </div>
    );
  };
  
  export default Search;