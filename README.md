## About this

独学でNext.jsを学んでいます。  
成果物として、Parallel Routesを使って画面を作成しました。  
異なるAPIで取得してレンダリングした要素が、並行して同時出力できることを確認できました。

使用したもの
- [{JSON} Placeholder](https://jsonplaceholder.typicode.com/) - a free online REST API
- [Bootstrap@5.3.0](https://getbootstrap.jp/)  - スタイル適用
- Next.js 14.2.2


理解したこと
- Parallel Routes  
slotsと呼ばれるフォルダ名規約（先頭にアットマーク、次にフォルダ名）が有る。  
layout.jsでchildrenと同じようにPropsとして渡され、平行レンダリングされる。（アットマークの後のフォルダ名と完全一致させないとPropsとして渡されずレンダリングされない）


次回以降に学びたいこと、試したいこと
- Parallel Routesを使う際、動的フォルダ名（@[id]など）は出来るか？  
- モーダル追加 ← Intercepting Routesが絡む？

参考
- [Parallel Routes（公式サイト）](https://nextjs.org/docs/app/building-your-application/routing/parallel-routes)