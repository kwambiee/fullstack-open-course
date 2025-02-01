const Button = ({ handleClick, text }) => { 
    
    return (
        <div>
            <button type="button" onClick={() => handleClick(text.toLowerCase())} className=" p-2 m-2 bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline
            
            ">{text}</button>
        </div>
    )
    
    
}

export default Button