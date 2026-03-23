import { useState } from "react"

interface FeedbackData {
    name: string;
    studentID: string;
    bookTitle: string;
    author: string;
    reason: string;
    request: string;
}

function Controlled() {
    const [name, setName] = useState<string>("");
    const [studentID, setStudentID] = useState<string>("");
    const [bookTitle, setBookTitle] = useState<string>("");
    const [author, setAuthor] = useState<string>("");
    const [reason, setReason] = useState<string>("");
    const [request, setRequest] = useState<string>("");
    const [submittedData, setSubmittedData] = useState<FeedbackData | null>(null);

    const handleControlledSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data: FeedbackData = {
            name,
            studentID,
            bookTitle,
            author,
            reason,
            request
        };
        setSubmittedData(data);
        setName("");
        setStudentID("");
        setBookTitle("");
        setAuthor("");
        setReason("");
        setRequest("");
    };
    return (
        <div className="controlled">
            <h2>Book Request</h2>
            <form onSubmit={handleControlledSubmit}>
                <div>
                    <label><strong>Name: </strong></label><br />
                    <input
                        type="text"
                        value={name}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setName(e.target.value)
                        }
                    />
                </div>
                <br />
                <div>
                    <label><strong>Student ID: </strong></label><br />
                    <input
                        type="number"
                        value={studentID}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setStudentID(e.target.value)
                        }
                    />
                </div>
                <br />
                <div>
                    <label><strong>Author: </strong></label><br />
                    <input
                        type="text"
                        value={author}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setAuthor(e.target.value)
                        }
                    />
                </div>
                <br />
                <div>
                    <label><strong>Reason: </strong> </label><br />
                    <textarea
                        value={reason}
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                            setReason(e.target.value)
                        }
                    />
                </div>
                <br />
                <div>
                    <label><strong>Requests: </strong></label><br />
                    <textarea
                        value={request}
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                            setRequest(e.target.value)
                        }
                    />
                </div>
                <br />

                <button type="submit">
                    Submit Controlled Form
                </button>
            </form>
            {submittedData && (
                <div style={{ marginTop: "20px" }}>
                    <h3>Submitted Request</h3>
                    <p><strong>Name: </strong> {submittedData.name}</p>
                    <p><strong>Student ID: </strong> {submittedData.studentID}</p>
                    <p><strong>Book Title: </strong> {submittedData.bookTitle}</p>
                    <p><strong>Author: </strong> {submittedData.author}</p>
                    <p><strong>Reason: </strong> {submittedData.reason}</p>
                    <p><strong>Requests: </strong> {submittedData.request}</p>
                </div>
            )}
            <hr style={{ margin: "40px 0" }} />
        </div>
    )
}
export default Controlled




