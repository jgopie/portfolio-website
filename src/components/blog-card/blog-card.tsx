import './blog-card.styles.css';
type BlogProps = {
    title: string;
    image: string | undefined;
    slug: string;
};

export const BlogCard = (props: BlogProps) => {
    return (
        <a href={`/blog/${props.slug}`}>
            <div className='blog-container'>
                <img
                    className='blogImage'
                    src={props.image}
                    alt={props.title}
                />
                <div className='link-container'>
                    <p>{props.title}</p>
                </div>
            </div>
        </a>
    );
};
