
export const Card = ({content}) => {
    return (
        <div className="w-10/12 bg-white shadow-xl flex flex-col p-10 my-10">
            <div className="text-xl text-gray-800 py-1"> {content.year}</div>
            <a className="text-3xl text-blue-900 cursor-pointer py-2" href={content.link} target="_blank"> {content.title}</a>
            <div className="text-lg"> {content.details}</div>
        </div>
    )
}
