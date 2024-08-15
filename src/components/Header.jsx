import React from 'react'

export default function Header() {
  return (
    <div>
      {/* <div classNameName='tw-bg-gray-200'>
        <input type="text" name="Text Type Domain you want" placeholder='     Text Type Domain you want' id="input"/>
      <div>
       <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fillRule="currentColor" classNameName="bi bi-search -tw-mt-14 tw-ml-20" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
        </svg>
      </div>
    </div> */}

<form className="d-flex" role="search">
        <input className="form-control tw-p-4 tw-mt-2" type="search" placeholder="Type the domain you want" aria-label="Search"/>
        <button className="btn btn-success" type="submit">Search Domain</button>
      </form>
    </div>
  )
}
