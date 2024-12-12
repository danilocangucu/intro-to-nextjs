import styles from './style.module.css';

interface Params {
    id: string[];
}

const BlogIdPage = async ({ params }: { params: Params }) => {
    const id = await params.id;
    console.log(id);
    return (
        <div>
            <h1 className={styles.title}>BlogIdPage</h1>
            <p>id: {id}</p>
        </div>
    );
}

export default BlogIdPage;