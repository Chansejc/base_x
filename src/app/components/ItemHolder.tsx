
type Items = {
    children: JSX.Element | JSX.Element[] 
}

export default function ItemHolder({children} : Items){
    return(
        <div className="mt-20 mx-10 flex flex-wrap justify-evenly gap-20 bg-inherit">
            { children }
        </div>
    )
}
