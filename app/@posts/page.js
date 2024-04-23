/* Post情報取得 */
async function getPostsData(){
    // 初期表示時、ロード画面を少し長く表示させたいため1秒待機
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`, { revalidate: 10, cache: 'no-store' })
    return response.json();
}

export default async function Page() {
    
    const postList = await getPostsData();

    //各ユーザーIDでPost情報を1件ずつに絞っています（id=1~10がuser1のPost、id=11～20がuser2の人のPost...という感じだったので10の倍数でfilterかけています。
    const dispList = postList.filter(element => element.id = element.id % 10 === 0);

    return(
        <div className="p-2 bg-success-subtle">
            <p>app/@posts/page.js</p>
            <ul className="list-group list-group-flush">
            {dispList.map((element, index) => (
               <li key={index} className="list-group-item">
                    {element.title}
                    <div>userId:{element.userId}</div>
                </li>
            ))}
            </ul>
        </div>
    )
}