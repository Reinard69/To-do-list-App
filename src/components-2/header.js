import React from "react";
import PropTypes from "prop-types";
import Checkbox from "./checkbox";
import NewItem from "./newItem";

function Header({ filter, addItem, setFilter }) {
    const [adding, setAdding] = React.useState(false);

    const selectOverdueFilter = () => setFilter({ ...filter, overdueOnly: true });
    const unSelectOverdueFilter = () =>
        setFilter({ ...filter, overdueOnly: false });
    const selectCompleteFilter = () =>
        setFilter({ ...filter, includeComplete: true });
    const unSelectCompleteFilter = () =>
        setFilter({ ...filter, includeComplete: false });

    const addNewItem = (item) => {
        setAdding(false);
        addItem(item);
    };

    return (
        <header>
            <nav className="navbar navbar-light bg-light">
                <div className="navbar-title">
                    <span className="navbar-brand">What are we doing today?</span>
                </div>
                <div
                    className="navbar-second"
                    style={{
                        flexDirection: "inherit",
                        display: "flex",
                        alignItems: "center",
                    }}
                >

                    <Checkbox
                        label="Overdue items only"
                        selected={filter.overdueOnly}
                        select={selectOverdueFilter}
                        unSelect={unSelectOverdueFilter}
                    />
                    <Checkbox
                        label="Include complete items"
                        selected={filter.includeComplete}
                        select={selectCompleteFilter}
                        unSelect={unSelectCompleteFilter}
                    />
                    {!adding && (
                        <button
                            type="button"
                            className="btn btn-link"
                            onClick={() => setAdding(true)}
                        >
                            Add new item
                        </button>
                    )}
                </div>
            </nav>
            {adding && <NewItem cancel={() => setAdding(false)} add={addNewItem} />}
        </header>
    );
}

Header.propTypes = {
    addItem: PropTypes.func.isRequired,
    filter: PropTypes.object.isRequired,
    setFilter: PropTypes.func.isRequired,
};

export default Header;
