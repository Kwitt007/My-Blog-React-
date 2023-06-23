import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Kwitt');
    const [isPending, setIsPending] = useState(false);
    const history = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = { title, body, author };

        setIsPending(true);

        fetch('https://full-carpal-pick.glitch.me/blogs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('The new blog has been added');
            setIsPending(false);
            // history.go(-1);
            history('/');
        });
    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>

                <label>Blog Title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label>Blog Body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>

                <label>Blog Author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Kwitt">Kwitt</option>
                    <option value="Mario">Mario</option>
                </select>

                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled >Adding Blog...</button>}

                <p>{title}</p>
                <p>{body}</p>
            </form>
        </div>
    );
}

export default Create;