export const IconButton = ({children, onClickHandler, dark }) => (
    <div style={{width: "40px", height: "40px", display: "flex", justifyContent: "center", alignContent: "center", background: (dark ? "#f1ebeb" : "white"), borderRadius: "100%", padding: "5px",
    cursor: "pointer"
    }} onClick={onClickHandler}>
        {children}
    </div>
)