import React, { useContext, useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import GlobalContext from '../context/GlobalContext';

const TextEditor = () => {
    const [textConntent, setTextContent] = useState("");
    const {projectName} = useContext(GlobalContext);

      const modules = {
        toolbar: [
        [{ 'header': [1, 2, 3,4,5,6, false] }],
        ['bold', 'italic', 'underline','strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image'],
        ['clean']
        ],
    };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link'
  ]

  return (
    <div className='TextEditor'>
        <h2>{projectName}</h2>
        <ReactQuill theme='snow'
            modules={modules}
            formats={formats}
            value={textConntent}
            onChange={setTextContent}
            className='quill'
        ></ReactQuill>
    </div>
  )
}

export default TextEditor