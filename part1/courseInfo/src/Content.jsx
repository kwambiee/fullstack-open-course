const Content = ({ parts }) => {
    return (
        <div>
            {parts.map((part, index) => <p key={index}>{part.name}</p>)}
        </div>
    )
 };
export default Content;