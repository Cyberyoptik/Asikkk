
export default function ItemLogo() {
    return (
        <a href="/" className="flex items-center">
            <img src="../logo/1.png" width={100} className="dark:hidden" />
            <img src="../logo/2.png" width={100} className="hidden dark:block" />
        </a>
    )
}