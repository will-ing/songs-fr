import React from 'react'


function FormSubmit() {
    return (
        <div>
            <form>
                <p>Add a song</p>
                <input
                    name="title"
                    placeholder="Song Title"
                    type="text" />
                <input
                    name="artist"
                    placeholder="Song artist"
                    type="text" />
                <input
                    name="album"
                    placeholder="Song album"
                    type="text" />
                <input
                    name="year"
                    placeholder="Song year"
                    type="text" />
                <button type="submit">ADD</button>
            </form>
        </div>
    )
}

export default FormSubmit