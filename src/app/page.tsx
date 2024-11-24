import Nav from "./components/Nav";
import ItemCard, {Item} from "./components/ItemCard";
import ItemHolder from "./components/ItemHolder";

const description = "future text"


export default function Home() {

    // summary: string, title: string,
    const items: Item[] = [
        {title: "DuGong", summary: "big dugong for fun"},
        {title: "DuGong", summary: "big dugong for fun"},
        {title: "DuGong", summary: "big dugong for fun"},
        {title: "DuGong", summary: "big dugong for fun"},
        {title: "DuGong", summary: "big dugong for fun"},
        {title: "DuGong", summary: "big dugong for fun"},
        {title: "DuGong", summary: "big dugong for fun"},
        ]
    return (
          <div className="bg-[url('../../public/images/modern_house.jpg')] font-sans">
            <div className="flex-col bg-inherit border-white">
                <Nav/>
                <div className="w-full grid grid-cols-4 grid-rows-2 ">
                    <div className="col-start-4 row-start-2 text-pretty ">
                        <h1 className="text-white text-lg">{description}</h1>
                    </div>
                </div>
                <div className="flex justify-end">
                    <svg className="w-10 h-10 text-lg border-rounded text-white bg-inherit -mb-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" >
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"></path>
                    </svg>
                    <svg className="w-10 h-10 text-lg border-rounded text-white bg-inherit -mb-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"> 
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"></path>
                    </svg>
                </div>
            </div>
            <div className="bg-inherit">
                <ItemHolder>
                    {items.map((item, i)=>{ return ItemCard(item, i) })}
                </ItemHolder>
            </div>
          </div>
    );
}
