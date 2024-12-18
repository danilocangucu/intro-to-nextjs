interface Params {
    id?: string[];
}

const DocsIdPage = async ({ params }: { params: Promise<Params> }) => {
    const { id } = await params;
    return (
        <div>
            <h1>DocsIdPage</h1>
            <p>docId: {id}</p>
        </div>
    );
}

export default DocsIdPage;