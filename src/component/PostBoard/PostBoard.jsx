import React, { useState, useEffect } from 'react';
import { Typography, Button, Container, Modal, Box, TextField } from '@mui/material';
import axios from 'axios';

export default function PostBoard() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [comment, setComment] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/posts');
        console.log('Fetched posts:', response.data);
        setPosts(response.data);
      } catch (error) {
        console.error('게시글을 불러오는 중 오류 발생:', error);
      }
    };

    fetchPosts();
  }, []);

  const handleOpenModal = async (post) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/posts/${post.id}`);
      console.log('Fetched post:', response.data);
      setSelectedPost(response.data);
      setOpenModal(true);
      setComment('');
    } catch (error) {
      console.error('게시글을 불러오는 중 오류 발생:', error);
    }
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/posts/comment', {
        postId: selectedPost.id,
        comment: comment
      });
      console.log('댓글 추가 응답:', response.data);
      const updatedPost = { ...selectedPost, comments: [...selectedPost.comments, comment] };
      setSelectedPost(updatedPost);
      setComment('');
    } catch (error) {
      console.error('댓글 추가 중 오류 발생:', error);
    }
  };

  const handleDeletePost = async () => {
    if (!selectedPost) return;

    console.log(`Deleting post with id: ${selectedPost.id}`);
    try {
      const response = await axios.delete(`http://localhost:5000/api/posts/${selectedPost.id}`);
      console.log('게시글 삭제 응답:', response.data);
      setPosts(posts.filter(post => post.id !== selectedPost.id));
      setOpenModal(false);
    } catch (error) {
      console.error('게시글 삭제 중 오류 발생:', error);
    }
  };

  return (
    <Container maxWidth="xl">
      <Typography
        variant="h5"
        align='center'
        sx={{
          mt: 5,
          fontSize: '30px',
          fontWeight: 'bold'
        }}
      >
        자유 게시판
      </Typography>
      <div>
        <Box sx={{ display: 'flex', width: '1050px', alignItems: 'center', padding: '10px', borderBottom: '1px solid #ddd', backgroundColor: '#f5f5f5' }}>
          {/* 게시글 번호 컬럼 삭제 */}
          <Typography variant="body1" sx={{ flex: '0 0 550px', fontWeight: 'bold' }}>제목</Typography>
          <Typography variant="body1" sx={{ flex: '0 0 150px', fontWeight: 'bold' }}>작성자</Typography>
          <Typography variant="body1" sx={{ flex: '0 0 150px', fontWeight: 'bold' }}>직업</Typography>
          <Typography variant="body1" sx={{ flex: '0 0 200px', fontWeight: 'bold' }}>작성일시</Typography>
        </Box>
        {posts.map((post, index) => (
          <Box
            key={index}
            role="button"
            tabIndex="0"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '10px',
              cursor: 'pointer',
              marginBottom: '10px',
              borderBottom: '1px solid #ddd',
            }}
            onClick={() => handleOpenModal(post)}
            onKeyPress={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleOpenModal(post);
              }
            }}
          >
            {/* 게시글 번호 컬럼 삭제 */}
            <Typography variant="h6" sx={{ flex: '0 0 550px', textAlign: 'left', paddingLeft: '10px' }}>{post.title || '-'}</Typography>
            <Typography variant="body1" sx={{ flex: '0 0 130px', textAlign: 'left', paddingLeft: '10px' }}>{post.userName || '-'}</Typography>
            <Typography variant="body1" sx={{ flex: '0 0 130px', textAlign: 'left', paddingLeft: '10px' }}>{post.userJob || '-'}</Typography>
            <Typography variant="body1" sx={{ flex: '0 0 200px', textAlign: 'right' }}>{post.createdAt ? new Date(post.createdAt).toLocaleString() : '-'}</Typography>
          </Box>
        ))}
      </div>

      <Box sx={{ textAlign: 'right', mt: 3 }}>
        <Button variant="contained" color="primary" href="/boardwrite">
          글쓰기
        </Button>
      </Box>

      <Modal
        open={openModal}
        onClose={handleCloseModal}
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          height: '80%',
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
          overflow: 'auto',
        }}>
          <Typography variant="h6" gutterBottom>
            {selectedPost ? selectedPost.title : ''}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {selectedPost ? selectedPost.content : ''}
          </Typography>
          {selectedPost && selectedPost.file && (
            <Box sx={{ mb: 2 }}>
              {selectedPost.file.match(/\.(jpeg|jpg|gif|png)$/) ? (
                <img
                  src={`http://localhost:5000/uploads/${selectedPost.file}`}
                  alt="Uploaded file"
                  style={{ maxWidth: '100%' }}
                />
              ) : (
                <a href={`http://localhost:5000/uploads/${selectedPost.file}`} download>
                  파일 다운로드
                </a>
              )}
            </Box>
          )}
          <TextField
            label="댓글"
            multiline
            rows={2}
            fullWidth
            variant="outlined"
            value={comment}
            onChange={handleCommentChange}
            sx={{ mb: 2 }}
          />
          {selectedPost && selectedPost.comments.map((comment, index) => (
            <Typography key={index} variant="body2" sx={{ mt: 1 }}>
              {comment}
            </Typography>
          ))}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
            <Button variant="contained" onClick={handleCloseModal}>취소</Button>
            <Button variant="contained" color="primary" onClick={handleCommentSubmit} sx={{ ml: 1 }}>댓글 달기</Button>
            <Button variant="contained" color="secondary" onClick={handleDeletePost} sx={{ ml: 1 }}>삭제</Button>
          </Box>
        </Box>
      </Modal>
    </Container>
  );
}
