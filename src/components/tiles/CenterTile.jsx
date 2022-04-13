const CenterTile = (props) => {
    return (
        <div className="container mt-4">
            <div className="tile is-ancestor">
                <div className="tile is-2" />
                <div className="tile">
                    {props.children}
                </div>
                <div className="tile is-2" />
            </div>
        </div>
    );
};

export default CenterTile;