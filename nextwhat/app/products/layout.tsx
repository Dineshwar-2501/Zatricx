export default function Layout({children}: {children: React.ReactNode}) {
    return (<main>
        <section>this is thw whole product layout</section>
            <section>
                {children}
            </section>
    </main>
    );
}