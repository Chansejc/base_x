export type Item = {
    summary: string,
    title: string,
}


export default function ItemCard(item: Item, key: number){
    
    return(
        <div className={`my-4 ml-2 flex-col w-50 rounded-lg bg-gray-700 key=${key}`}>
            <a href="#" className="flex justify-center align-center p-2 h-48 w-34">
                <img className="rounded-lg h-44 w-38" src="https://picsum.photos/100" alt="" />
            </a>
            <div className="py-2 px-5 flex-col justify-center align-center">
                <a href="#">
                    <p className="mb-2 text-xl font-bold tracking-tight text-white hover:underline justify-self-center">{item.title}</p>
                </a>
                <p className="mb-2 font-normal text-white">{item.summary}</p>
            </div>
        </div>
    )
}

