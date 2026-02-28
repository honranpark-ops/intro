# 자기소개 페이지

GitHub Pages로 배포되는 정적 자기소개 사이트입니다.

## 로컬에서 보기

`index.html`을 브라우저에서 열면 됩니다.

## GitHub Pages 배포 방법

아래 순서대로 진행하세요.

### 1. Git 사용자 설정 (처음 한 번만)

PowerShell 또는 터미널에서:

```bash
git config --global user.email "본인이메일@example.com"
git config --global user.name "본인이름"
```

(GitHub 가입 이메일·이름을 사용하면 좋습니다.)

### 2. 커밋 완료

`introduce` 폴더에서:

```bash
cd c:\Users\Ryan\Downloads\study\introduce
git add index.html style.css script.js .gitignore README.md
git commit -m "Initial commit: self-intro page for GitHub Pages"
```

### 3. GitHub에서 저장소 만들기

1. [https://github.com/new](https://github.com/new) 접속
2. **Repository name**: `intro` 또는 `my-intro` (원하는 이름)
3. **Public** 선택
4. **Create repository** 클릭 (README, .gitignore 추가 안 함)

### 4. 원격 저장소 연결 후 푸시

GitHub에서 저장소를 만든 뒤, 화면에 나오는 주소를 사용합니다.  
**사용자이름**을 본인 GitHub 아이디로 바꾸세요.

```bash
cd c:\Users\Ryan\Downloads\study\introduce
git branch -M main
git remote add origin https://github.com/사용자이름/intro.git
git push -u origin main
```

(저장소 이름을 `intro` 대신 다른 이름으로 만들었다면 위 주소의 `intro` 부분을 그 이름으로 바꾸세요.)

### 5. GitHub Pages 켜기

1. GitHub 저장소 페이지에서 **Settings** 클릭
2. 왼쪽 메뉴 **Pages** 클릭
3. **Build and deployment** → **Source**: **Deploy from a branch**
4. **Branch**: `main` / **Folder**: `/ (root)` 선택 후 **Save**

### 6. 배포 주소 확인

1~2분 후 아래 주소로 접속해 보세요.

```
https://사용자이름.github.io/저장소이름/
```

예: 저장소 이름을 `intro`로 만들었다면  
`https://사용자이름.github.io/intro/`
