import logo from "./logo.svg";
import document_upload from "./document_upload.svg";
import doc from "./doc.svg";
import delete_icon from "./delete.svg";

import * as S from "./App.styles";

function App() {
  return (
    <S.PageContanier>
      <S.LogoContanier>
        <img src={logo} className="App-logo" alt="logo" />
      </S.LogoContanier>
      <S.FormContanier>
        <S.FormTitle>Select Date</S.FormTitle>
        <S.FormInput
          placeholder="Choose a date..."
          // onFocus={(e) => (e.target.type = "date")}
          // onBlur={(e) => (e.target.type = "text")}
        />
      </S.FormContanier>
      <S.FormContanier>
        <S.FormTitleWrapper>
          <S.FormTitle>Upload File</S.FormTitle>
          <S.FormSubtitle>
            {" "}
            (Please note that it should be .xlsx file format)
          </S.FormSubtitle>
        </S.FormTitleWrapper>
        <S.CustomFormFileInput>
          <S.FormFileInput id="upload_file" />
          <S.IconWrapper width="120px" height="120px">
            <img src={document_upload} alt="logo" />
          </S.IconWrapper>
          <S.FileInputTitle>.XLSX</S.FileInputTitle>
          <S.FileInputSubtitle>
            Click to browse or drag and drop your files here
          </S.FileInputSubtitle>
        </S.CustomFormFileInput>
      </S.FormContanier>
      <S.InfoContainer>
        <S.IconWrapper width="65px" height="65px">
          <img src={doc} alt="logo" />
        </S.IconWrapper>
        <S.InfoWrapper>
          <S.FormTitle>NacNac_Data.xlsx</S.FormTitle>
          <S.StorageInfo>89/124 KB</S.StorageInfo>
          <S.ProgressBar />
          <S.ProgressBarDynamic />
        </S.InfoWrapper>
        <S.IconButton width="42px" height="42px">
          <img src={delete_icon} alt="logo" />
        </S.IconButton>
      </S.InfoContainer>
      <S.ButtonWrapper>
        <S.SubmitButton>Run Script</S.SubmitButton>
      </S.ButtonWrapper>
    </S.PageContanier>
  );
}

export default App;
