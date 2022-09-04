- ## fork한 repostory 수정하고 잔디심기

  1. make new-repository
  2. goto new-repository
  3. git clone --bare old-repository
  4. git push --mirror new-repository
  5. (optional) delete old-repository

<br/>

- ## reset한 commit 되돌리기

  1. git reflog
  2. 되돌리고자 하는 commit id 확인
  3. git reset --hard commit id
