const Content = ({ parts }) => {
    return (
        <div>
            {parts.map((part, index) => <p key={index}>{part}</p>)}
        </div>
    )
 };
export default Content;