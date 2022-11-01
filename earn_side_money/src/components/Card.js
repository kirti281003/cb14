

function Card(props)
{
    return(
        <>
          
            <div class="card">
                <img src={props.img}></img>
                <div class="footer">
                    <p>{props.desc}</p>
                </div>
            </div>
           
        </>
    )
}
export default Card;