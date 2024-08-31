import React from 'react';

function CardFilter({ filterChange }) {
  return (
    <div className="filter">
      <a className="icon" href="/#" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
        <i className="bi bi-three-dots"></i>
      </a>
      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
        <li className="dropdown-header text-start">
          <h6>Filter</h6>
        </li>
        <li>
          <button className="dropdown-item" onClick={() => filterChange('Today')}>
            Today
          </button>
        </li>
        <li>
          <button className="dropdown-item" onClick={() => filterChange('This Month')}>
            This Month
          </button>
        </li>
        <li>
          <button className="dropdown-item" onClick={() => filterChange('This Year')}>
            This Year
          </button>
        </li>
      </ul>
    </div>
  );
}

export default CardFilter;
