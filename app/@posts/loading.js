export default function Loading() {
    return (
        <div className="p-3">
            <p>Loading...</p>
            <div className="spinner-border text-success" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}