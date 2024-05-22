

const Card =({children}: {children: React.ReactNode}) => {
    const cardStyles = {
        border: "thin solid #0077cc",
        margin: "1rem auto",
        padding: "1rem",
        width: "90%",
    
    }

    return(
        <div style={cardStyles}>
            {children}
        </div>
    )

}

export default Card;