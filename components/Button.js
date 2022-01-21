import Link from 'next/link'

export default function Button({ children, style, href }) {
    return (
        <button className={style}>
            <Link href={href || "/"}>
                <a>
                    {children}
                </a>
            </Link>
        </button>
    )
};
