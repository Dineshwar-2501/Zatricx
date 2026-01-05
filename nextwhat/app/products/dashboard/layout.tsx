export default function Layout({children}: {children: React.ReactNode}) {
    return (<main>
<section>This is dashboard layout        </section>
            <section>
                {children}
            </section>
    </main>
    );
}