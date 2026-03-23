import { useRef } from "react";

function Uncontrolled() {
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const feedbackRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (nameRef.current && emailRef.current && feedbackRef.current) {
            const data = {
                name: nameRef.current.value,
                course: emailRef.current.value,
                feedbackRef: feedbackRef.current.value
            }
            console.log("Event Feedback.", data);
            alert("Check the console for submitted data");
        }
    }

    return (
        <>
            <div className="uncontrolled">
                <form onSubmit={handleSubmit}>
                    <h1>Event Feedback</h1>
                    <label style={{ fontSize: "20px", padding: "10px" }}><strong>Name</strong> </label><br />
                    <input type="text" ref={nameRef} placeholder="Enter name" /><br />

                    <label style={{ fontSize: "20px", padding: "10px" }}><strong>Email</strong></label><br />
                    <input type="text" ref={emailRef} placeholder="Enter email" /><br />

                    <label style={{ fontSize: "20px", padding: "10px" }}><strong>Feedback </strong> </label><br />
                    <input type="text" ref={feedbackRef} placeholder="Enter feedback" /><br /><br />

                    <button type="submit" style={{ width: "150px" }}>Submit</button>
                </form>
                <hr />
            </div>



        </>



    )
}
export default Uncontrolled