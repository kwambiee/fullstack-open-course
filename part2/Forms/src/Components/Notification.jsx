const Notification = ({ message }) => { 
    if (message === null) {
        return null;
    }
    
    return (
        <div className="border w-1/2 mx-auto mt-4 p-4 bg-green-200 text-green-800 font-bold">
        {message}
        </div>
    );
};

export default Notification;