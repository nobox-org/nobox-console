import Link from "next/link";

export const Breadcrumb = ({ path }: {
    path: (string | { name: string; link: string })[]
}) => {

    return (
        <>
            {
                path.map((pathItem, index) => {
                    const pathName = typeof pathItem === "string" ? pathItem : <Link href={pathItem.link} className="underline color-[blue]">{pathItem.name}</Link>;

                    if (index === path.length - 1) {
                        return (
                            <span key={index} >
                                {pathName}
                            </span>
                        )
                    }
                    return (
                        <span key={index} >
                            {pathName} &nbsp;&nbsp; &gt; &nbsp;&nbsp;
                        </span>
                    )
                }
                )
            }
        </>
    )

}