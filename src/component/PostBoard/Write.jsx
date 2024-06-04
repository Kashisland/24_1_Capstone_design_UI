import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper, Box, Input } from '@mui/material';
import axios from 'axios';  // Axios 모듈 추가

const Write = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [file, setFile] = useState(null);
  const [userName, setUserName] = useState(''); // 사용자 이름 state 추가
  const [userJob, setUserJob] = useState('');   // 사용자 직업 state 추가

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('content', content);
      formData.append('file', file);
      formData.append('userName', userName); // 직접 입력한 사용자 이름 전송
      formData.append('userJob', userJob);   // 직접 입력한 사용자 직업 전송
  
      const response = await axios.post('http://localhost:5000/api/submit-post', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
  
      console.log('응답:', response.data);
      alert('게시글이 업로드 되었습니다.');
  
      // Reset form
      setTitle('');
      setContent('');
      setFile(null);
      setUserName(''); // 사용자 이름 초기화
      setUserJob('');  // 사용자 직업 초기화

      // 게시글 목록 페이지로 이동
      window.history.back();
    } catch (error) {
      console.error('글을 제출하는 중 오류 발생:', error);
      alert('게시글을 업로드하는 중 오류가 발생했습니다.');
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
      <Paper elevation={3} sx={{ p: 3, width: '800px' }}>
        <Typography variant="h5" component="h1" align="center" gutterBottom
          sx={{
            mt: 5,
            fontSize: '30px',
            fontWeight: 'bold'
          }}>
          게시글 작성
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box sx={{ '& .MuiTextField-root': { m: 1, width: '100%' } }}>
            <TextField
              label="제목"
              variant="outlined"
              fullWidth
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
              <TextField
                label="작성자"
                variant="outlined"
                value={userName}
                onChange={(e) => setUserName(e.target.value)} // 사용자 이름 입력 필드
                sx={{ flex: 1.5 }}
              />
              <TextField
                label="직업"
                variant="outlined"
                value={userJob}
                onChange={(e) => setUserJob(e.target.value)}   // 사용자 직업 입력 필드
                sx={{ flex: 1 }}
              />
            </Box>
            <TextField
              label="내용"
              variant="outlined"
              multiline
              rows={17}
              fullWidth
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                mt: 1,
              }}
            >
              <Input
                type="file"
                onChange={handleFileChange}
                sx={{ display: 'none' }}
                id="file-input"
              />
              <label htmlFor="file-input">
                <Button variant="contained" component="span">
                  파일 선택
                </Button>
              </label>
              {file && (
                <Typography variant="body1" sx={{ ml: 2 }}>
                  {file.name}
                </Typography>
              )}
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              gap: 1,
              mt: 2,
            }}
          >
            <Button variant="outlined" onClick={() => window.history.back()}>
              게시글 목록
            </Button>
            <Button type="submit" variant="contained" color="primary">
              업로드
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default Write;
