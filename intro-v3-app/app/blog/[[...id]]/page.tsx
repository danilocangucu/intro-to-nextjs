import styles from './style.module.css';

interface Params {
    id?: string[];
}

const BlogIdPage = async ({ params }: { params: Promise<Params> }) => {
    const { id } = await params;
    console.log(id);

    return (
        <div>
            <h1 className={styles.title}>BlogIdPage</h1>
            <p>id: {id?.join(', ') || 'No ID provided'}</p>
        </div>
    );
};

export default BlogIdPage;
