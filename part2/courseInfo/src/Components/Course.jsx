import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course = ({ course }) => { 
    return (
        <div>
            {
                course.map((course) => {
                    return (
                        <div key={course.id}>
                            <Header course={course.name} />
                            <Content parts={course.parts} />
                            <Total parts={course.parts} />
                        </div>
                    );
                })
            }
        </div>
    );
};

export default Course;