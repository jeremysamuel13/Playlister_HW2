import React from "react";

export default class SidebarHeading extends React.Component {
    handleClick = (event) => {
        const { createNewListCallback } = this.props;
        createNewListCallback();
    };
    render() {
        const { canAdd } = this.props
        let addClass = "toolbar-button";
        if (!canAdd) addClass += " disabled";

        return (
            <div id="sidebar-heading">
                <input
                    type="button"
                    id="add-list-button"
                    className={addClass}
                    onClick={this.handleClick}
                    value="+"
                    disabled={!canAdd}

                />
                Your Playlists
            </div>
        );
    }
}