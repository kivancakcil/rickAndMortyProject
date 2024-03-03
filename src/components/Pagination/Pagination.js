import React from 'react'
import ReactPaginate from 'react-paginate';

const Pagination = ({ info, pageNumber, setPageNumber }) => {
    return (
        <ReactPaginate
            className='pagination justify-content-center gap-3 my-4'
            forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
            nextLabel='Next'
            previousLabel='Prev'
            nextclassNameName='btn btn-light'
            previousclassNameName='btn btn-light'
            pageclassNameName='page-item'
            pageLinkclassNameName='page-link'
            activeclassNameName='active'
            onPageChange={(data) => {
                setPageNumber(data.selected + 1);
            }}
            pageCount={info?.pages}
        />
    );
};

export default Pagination