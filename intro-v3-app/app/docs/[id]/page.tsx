interface Params {
    id: string;
}

const DocsIdPage = async ({ params }: { params: Params }) => {
    const { id } = await params;
    return (
        <div>
            <h1>DocsIdPage</h1>
            <p>id: {id}</p>
        </div>
    );
}

export default DocsIdPage;