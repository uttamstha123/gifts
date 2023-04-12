import React from "react";
import "./shopFilter.css";
import Form from "react-bootstrap/Form";
import { BsFillGridFill, BsListUl } from "react-icons/bs";
const ShopFilter = () => {
  return (
    <>
      <div className="shopFilter">
        <div className="shopFilterResults">
          <p>Showing all {6} results</p>
        </div>
        <div className="shopFilterAction">
          <div className="shopFilterActionGridView">
            <BsFillGridFill />
          </div>
          <div className="shopFilterActionListView">
            <BsListUl />
          </div>
          <div className="shopFilterActionSorting">
            <Form.Select>
              <option disabled={true}>Default sorting</option>
              <option>Sort by popularity</option>
              <option>Sort by latest</option>
              <option>Sort by price: low to high</option>
              <option>Sort by price: high to low</option>
            </Form.Select>
          </div>
        </div>
      </div>
    </>
  );
};
export default ShopFilter;
