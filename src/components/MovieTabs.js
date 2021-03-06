import React from "react";
var classNames = require('classnames');

export class MovieTabs extends React.Component{
    render() {
        const {sort_by, updateSortBy} = this.props;
        const handleClick = (value) => () => updateSortBy(value);
        const getClassLink = (value) => classNames('nav-link', {'active': sort_by === value});
        return (
            <div>
                <ul className="tabs nav nav-pills">
                    <li className="nav-item">
                        <div className={getClassLink('popularity.desc')}
                            onClick={handleClick('popularity.desc')}
                        >
                            Popularity desc
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className={getClassLink('revenue.desc')}
                             onClick={handleClick('revenue.desc')}
                        >
                            Revenue desc
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className={getClassLink('vote_average.desc')}
                             onClick={handleClick('vote_average.desc')}
                        >
                            Vote average desc
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}
