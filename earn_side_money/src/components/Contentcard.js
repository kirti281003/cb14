function Content(props)
{
    return(
        <>
             <div class="card">
             <h1>{props.heading}</h1>
                <p>{props.content}</p>
                <div class="footer">
                    <p>{props.name}</p>
                </div>
            </div>
        </>
    )
}
export default Content;