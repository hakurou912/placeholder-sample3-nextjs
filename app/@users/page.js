/* User情報取得 */
async function getUsersData(){
    // 初期表示時、ロード画面を少し長く表示させたいため1秒待機
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/`, { revalidate: 10, cache: 'no-store' });
    return response.json();
}
export default async function Page() {
    
    const postList = await getUsersData();

    return(
        <div className="p-2 bg-danger-subtle">
            <p>app/@users/page.js</p>
            <div className="list-group list-group-flush">
            {postList.map((data, index) => (
                <a href="#" key={index} className="list-group-item list-group-item-action d-flex gap-1 py-2" aria-current="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="bi bi-person-circle flex-shrink-0" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                    </svg>
                    <div>
                        <h6 className="mb-0">{data.username}</h6>
                        <small className="mb-0 opacity-75 text-break">{data.email}</small>
                    </div>
                </a>
            ))}
            </div>
        </div>
    )
}