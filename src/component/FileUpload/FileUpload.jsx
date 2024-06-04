import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function FileUpload({ handleFileChange }) {
  return (
    <div>
      <Button
        variant="contained"
        component="label"
        color="primary"
      >
        파일 선택
        <input
          type="file"
          hidden
          onChange={handleFileChange}
        />
      </Button>
    </div>
  );
}

export default FileUpload;
