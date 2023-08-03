import { useRef } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";

export const SearchForm = () => {
  const navigate = useNavigate();
  const inputRef = useRef();
  const handleSumbit = (e) => {
    e.preventDefault();
    const value = inputRef.current.value;
    if(value.length >= 3) {
      const parametriDeSearch = createSearchParams({
        s: value
      }).toString();
      navigate({
        pathname: 'search',
        search: parametriDeSearch
      });
    } else {
      console.log('Termenul de cautare este prea scurt');
    }
  }
  return <form
    onSubmit={handleSumbit}
    className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
    role="search"
  >
    <div className="form-check form-check-inline">
      <input
        ref={inputRef}
        type="search"
        className="form-control form-control-dark text-bg-dark"
        placeholder="Search..."
        aria-label="Search"
      />
    </div>
    <div className="form-check form-check-inline">
      <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
      <label className="form-check-label" htmlFor="inlineCheckbox1">Include adult?</label>
    </div>
  </form>
}