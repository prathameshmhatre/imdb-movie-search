import React from 'react'

const App = ({ data }) => {
    return (
        <div className="p-3 border d-flex flex-column ">
            <div className="flex-grow-1 ">

                <img width="100%" src={data.image} alt={data.title} />
                <h2 className="text-capitalize">{data.title}<span className="h5 text-muted">({data.year})</span></h2>
                <p className="text-capitalize">
                    <span>{data.duration}</span>&nbsp;|&nbsp;
                {data.genre.map((gen, i) => [
                        i > 0 && ", ",
                        <span key={i} >{gen}</span>
                    ])}
                </p>
                <p className="text-sm mb-2"><small>{data.synopsis}</small></p>
            </div>
            <div className="">
                <h5 className="text-right">{data.rating}
                    <span className="text-warning">
                        <i className="fa fa-star" aria-hidden="true"></i>
                    </span>
                </h5>
            </div>
        </div>
    );
}

export default App;