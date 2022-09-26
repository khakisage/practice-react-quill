import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';

const toolbarOptions = [
  ['link', 'image'],
  [{ header: [1, 2, 3, false] }],
  ['bold', 'italic', 'underline', 'strike'],
  ['blockquote', 'code-block'],
  [{ list: 'ordered' }, { list: 'bullet' }],
  [{ color: [] }, { background: [] }],
  [{ align: [] }],
  ['clean'],
];

export const formats = [
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'code-block',
  'list',
  'bullet',
  'link',
  'image',
  'color',
  'background',
  'align',
  'clean',
];

const modules = {
  toolbar: {
    container: toolbarOptions,
  },
};
export default function Quill() {
  const [value, setValue] = useState('');
  console.log('value', value);

  return (
    <>
      <Wrapper>
        <ReactQuill
          value={value}
          onChange={(content, delta, source, editor) => {
            setValue(editor.getSelection());
          }}
          theme="snow"
          modules={modules}
        />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
