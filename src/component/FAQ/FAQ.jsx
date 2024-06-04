import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import axios from 'axios';

export default function FAQ() {
  const [faqButtons, setFaqButtons] = useState([]); // FAQ 내부 버튼
  const [dialogOpen, setDialogOpen] = useState(false); // 다이얼로그 열림 여부
  const [dialogText, setDialogText] = useState(''); // 다이얼로그 내용
  const [policyButtons, setPolicyButtons] = useState([]); // 정책 버튼
  const [selectedRegion, setSelectedRegion] = useState(''); // 선택된 지역

  // FAQ 버튼 클릭 시 내부 버튼 설정
  const handleFAQButtonClick = (faqText) => {
    const buttons = getFaqButtonsForText(faqText);
    setFaqButtons(buttons);
    setSelectedRegion(faqText); // 선택된 지역 설정
    console.log(`Region selected: ${faqText}`);
  };

  // FAQ 텍스트에 따른 내부 버튼 설정
  const getFaqButtonsForText = (faqText) => {
    switch (faqText) {
      case '중앙부처':
        return ['일자리', '주거', '교육'];
      case '서울':
        return ['일자리', '주거', '교육'];
      case '대전':
        return ['일자리', '주거', '교육'];
      case '부산':
        return ['일자리', '주거', '교육'];
      default:
        return [];
    }
  };

  // FAQ 내부 버튼 클릭 시 정책 버튼 설정 및 모달 열기
  const handleFaqInnerButtonClick = async (field) => {
    console.log(`Fetching policies for region: ${selectedRegion}, field: ${field}`);
    try {
      const response = await axios.get(`http://localhost:5000/api/policies/${encodeURIComponent(selectedRegion)}/${encodeURIComponent(field)}`);
      console.log('Policies fetched:', response.data);
      setPolicyButtons(response.data.map(policy => policy.policyName));
      setDialogText('');
      setDialogOpen(true);
    } catch (error) {
      console.error('정책을 불러오는 중 오류 발생:', error);
    }
  };

  // 정책 버튼 클릭 시 정책 설명 설정
  const handlePolicyButtonClick = async (policyName) => {
    console.log(`Fetching description for policy: ${policyName}`);
    try {
      const response = await axios.get(`http://localhost:5000/api/policy-description/${encodeURIComponent(policyName)}`);
      console.log('Policy description fetched:', response.data);
      setDialogText(response.data.description);
    } catch (error) {
      console.error('정책 설명을 불러오는 중 오류 발생:', error);
    }
  };

  // 다이얼로그 닫기
  const handleCloseDialog = () => {
    setDialogOpen(false);
    setPolicyButtons([]); // 다이얼로그를 닫을 때 정책 버튼 초기화
    setDialogText(''); // 다이얼로그를 닫을 때 텍스트 초기화
  };

  return (
    <div>
      {/* 기존 FAQ 버튼들 */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div><Button variant="contained" color="primary" style={{ width: '200px' }} onClick={() => handleFAQButtonClick("중앙부처")}>중앙 부처</Button></div>
        <div><Button variant="contained" color="primary" style={{ width: '200px' }} onClick={() => handleFAQButtonClick("서울")}>서울</Button></div>
        <div><Button variant="contained" color="primary" style={{ width: '200px' }} onClick={() => handleFAQButtonClick("대전")}>대전</Button></div>
        <div><Button variant="contained" color="primary" style={{ width: '200px' }} onClick={() => handleFAQButtonClick("부산")}>부산</Button></div>
      </div>

      {/* 선 */}
      <hr style={{ margin: '10px 0', width: 'calc(200% + 10px)', marginLeft: '-100px', marginRight: '-10px' }} />

      {/* 새로 생성되는 FAQ 내부 버튼 */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {faqButtons.map((buttonText, index) => (
          <Button
            key={index}
            variant="contained"
            color="success"
            style={{ width: '200px' }}
            onClick={() => handleFaqInnerButtonClick(buttonText)}
          >
            {buttonText}
          </Button>
        ))}
      </div>

      {/* 다이얼로그 */}
      <Dialog open={dialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>정책 목록</DialogTitle>
        <DialogContent>
          <div dangerouslySetInnerHTML={{ __html: dialogText || '정책을 선택하세요' }} />
          {/* 정책 버튼들 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px', justifyContent: 'center' }}>
            {policyButtons.map((policyName, index) => (
              <Button
                key={index}
                variant="contained"
                color="primary"
                onClick={() => handlePolicyButtonClick(policyName)}
              >
                {policyName}
              </Button>
            ))}
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            닫기
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
