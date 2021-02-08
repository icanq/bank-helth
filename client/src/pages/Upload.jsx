import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { StyledDropzone, StyledButton } from '../styled';

function MyDropzone() {
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
  }, []);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    acceptedFiles,
    fileRejections,
  } = useDropzone({
    onDrop,
    accept:
      ('application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'text/plain',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'),
  });
  const acceptedFileItems = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));
  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
      <ul>
        {errors.map((e) => (
          <li key={e.code}>{e.message}</li>
        ))}
      </ul>
    </li>
  ));
  const handleUpload = () => {
    const formdata = new FormData();
    formdata.append(
      'file',
      acceptedFiles[0]
    );
    const requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow',
    };
    fetch('http://localhost:3001/upload', requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
  };
  return (
    <section>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <StyledDropzone>Drop the files here</StyledDropzone>
        ) : (
          <StyledDropzone>
            Drag 'n' drop the excel files here, or click to select files
          </StyledDropzone>
        )}
      </div>
      <StyledButton type='submit' onClick={() => handleUpload()}>
        Submit!
      </StyledButton>
      <aside>
        <p>Accepted files</p>
        <ul>{acceptedFileItems}</ul>
        <p>Rejected files</p>
        <ul>{fileRejectionItems}</ul>
      </aside>
    </section>
  );
}
function Upload() {
  return <MyDropzone />;
}

export default Upload;
